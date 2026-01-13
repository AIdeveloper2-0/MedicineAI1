import json
import os
import requests 
from sqlalchemy.orm import Session
import models

# --- 1. AYARLAR ---
# Senin çalışan anahtarın:
API_KEY = "AIzaSyAK6HwzzyHAzdJhMEbXFiea3g7zF5kPR5I"

# --- 2. AKILLI MODEL SEÇİCİ ---
def get_working_model():
    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
        response = requests.get(url)
        data = response.json()
        for model in data.get('models', []):
            name = model['name']
            if 'generateContent' in model.get('supportedGenerationMethods', []) and 'gemini' in name and 'vision' not in name:
                return name.replace("models/", "")
        return "gemini-1.5-flash"
    except:
        return "gemini-1.5-flash"

CURRENT_MODEL = get_working_model()
print(f"\n✅ SEÇİLEN AKTİF MODEL: {CURRENT_MODEL}\n")

API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{CURRENT_MODEL}:generateContent?key={API_KEY}"


# --- 3. VERİTABANI YÜKLEME ---
def load_medical_data():
    try:
        file_path = os.path.join(os.path.dirname(__file__), "medical_data.json")
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return json.dumps(data["diseases"], ensure_ascii=False)
    except Exception as e:
        print(f"HATA: Veritabanı okunamadı! {e}")
        return ""

MEDICAL_KNOWLEDGE_BASE = load_medical_data()

def analyze_symptom_and_suggest(db: Session, user_id: int, user_input: str, context: dict = None):
    
    # --- HAFIZA YÖNETİMİ (BURASI DEĞİŞTİ) ---
    # Geçmişi frontend'den alıyoruz
    current_history = ""
    if context and context.get("history"):
        current_history = context.get("history")

    # --- 4. DOKTOR PROMPTU ---
    prompt_text = f"""
    Sen 'Medicine AI' adında uzman bir klinik asistansın.
    
    GÖREVİN: 
    Aşağıdaki "HASTA GEÇMİŞİ"ni dikkatlice oku. Eğer orada daha önce bir soru sorduysan, kullanıcının son cevabını o soruya verilmiş bir cevap olarak kabul et ve TEKRAR AYNI SORUYU SORMA. Bir sonraki aşamaya geç.
    
    KURALLAR:
    1. SADECE aşağıdaki "TIBBİ VERİTABANI"ndaki hastalıkları teşhis et.
    2. Eğer emin değilsen veritabanındaki "questions" kısmından HENÜZ SORMADIĞIN bir soru sor.
    3. Cevabın MUTLAKA geçerli bir JSON formatında olsun. Markdown (```json) kullanma.

    TIBBİ VERİTABANI:
    {MEDICAL_KNOWLEDGE_BASE}

    HASTA GEÇMİŞİ (DİKKAT: Buradaki soruları tekrar sorma!):
    {current_history}

    KULLANICININ SON MESAJI:
    "{user_input}"

    İSTENEN JSON FORMATI:
    {{
        "status": "final_result" VEYA "follow_up",
        "message": "Kullanıcıya mesaj",
        "condition": "Hastalık Adı (Sadece teşhis konduysa)",
        "icd_code": "ICD Kodu",
        "department": "Bölüm",
        "recommendation": "Tedavi"
    }}
    """

    # --- 5. GOOGLE'A BAĞLANTI ---
    try:
        payload = {
            "contents": [{
                "parts": [{"text": prompt_text}]
            }]
        }
        
        headers = {'Content-Type': 'application/json'}
        response = requests.post(API_URL, headers=headers, data=json.dumps(payload))
        
        if response.status_code != 200:
            return {"status": "unknown", "message": "Bağlantı hatası oluştu."}

        result = response.json()
        
        if 'candidates' in result and result['candidates']:
            ai_text = result['candidates'][0]['content']['parts'][0]['text']
            cleaned_response = ai_text.replace("```json", "").replace("```", "").strip()
            result_json = json.loads(cleaned_response)
            
            # --- KRİTİK NOKTA: HAFIZAYI BİZ GÜNCELLİYORUZ ---
            # Yapay zekaya bırakmıyoruz, Python ile biz ekliyoruz.
            # Eski Geçmiş + Yeni Konuşma
            new_interaction = f"Hasta: {user_input} | Asistan: {result_json.get('message', '')}"
            updated_history = f"{current_history}\n{new_interaction}"
            
            # Güncel geçmişi JSON'a ekle ki Frontend bunu geri gönderebilsin
            result_json['history_update'] = updated_history
            
            return result_json
        else:
            return {"status": "unknown", "message": "Yapay zeka cevap veremedi."}

    except Exception as e:
        print(f"SİSTEM HATASI: {e}")
        return {
            "status": "unknown",
            "message": "Sistemsel bir hata oluştu."
        }