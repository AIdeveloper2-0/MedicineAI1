from database import SessionLocal
from models import User, MedicalHistory, DrugHistory

# Veritabanı oturumunu başlat
db = SessionLocal()

def create_dummy_data():
    # Önce eski veri varsa temizleyelim (Tekrar tekrar çalıştırırsan çakışmasın)
    db.query(DrugHistory).delete()
    db.query(MedicalHistory).delete()
    db.query(User).delete()
    db.commit()

    print("Eski veriler temizlendi...")

    # 1. HASTA OLUŞTURMA
    # Senaryo: Ahmet, 30 yaşında
    user_ahmet = User(username="ahmet_yilmaz", age=30)
    db.add(user_ahmet)
    db.commit() # Ahmet'i kaydettik ki ID'si oluşsun
    
    print(f"Hasta oluşturuldu: {user_ahmet.username} (ID: {user_ahmet.id})")

    # 2. TIBBİ GEÇMİŞ EKLEME
    # Senaryo: Son 1 yılda sık sık boğaz ağrısı yaşamış
    history1 = MedicalHistory(
        user_id=user_ahmet.id,
        condition="Akut Farenjit",
        symptom="Şiddetli boğaz ağrısı, ateş",
        date="2024-01-15"
    )
    history2 = MedicalHistory(
        user_id=user_ahmet.id,
        condition="Tonsilit",
        symptom="Boğaz şişmesi, yutkunma güçlüğü",
        date="2024-06-20"
    )
    db.add_all([history1, history2])
    
    print("Hastalık geçmişi eklendi...")

    # 3. İLAÇ GEÇMİŞİ EKLEME (Kritik Kısım!)
    # Senaryo: Parol verilmiş ama işe yaramamış (False)
    drug1 = DrugHistory(
        user_id=user_ahmet.id,
        drug_name="Parol",
        condition_treated="Boğaz Ağrısı",
        is_effective=False,  # <--- İŞE YARAMADI
        side_effects="Yok"
    )
    
    # Senaryo: Majezik verilmiş ve işe yaramış (True)
    drug2 = DrugHistory(
        user_id=user_ahmet.id,
        drug_name="Majezik",
        condition_treated="Boğaz Ağrısı",
        is_effective=True,   # <--- İŞE YARADI
        side_effects="Hafif mide yanması"
    )

    db.add_all([drug1, drug2])
    db.commit()
    
    print("İlaç geçmişi eklendi. İşlem tamam! 🚀")

if __name__ == "__main__":
    create_dummy_data()
    db.close()