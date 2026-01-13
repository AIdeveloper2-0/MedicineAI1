from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import models
import services
from database import engine, SessionLocal

# Veritabanı tablolarını oluştur
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Frontend izni
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- VERİ TİPLERİ ---
class ChatRequest(BaseModel):
    user_id: int
    message: str
    context: dict = {}

class UserRegistration(BaseModel):
    user_id: int
    full_name: str
    chronic_diseases: str
    medications: str
    recent_illnesses: str

# --- ENDPOINTLER ---

@app.get("/")
def read_root():
    return {"message": "Medicine AI Backend Online 🚀", "status": "online"}

@app.post("/register")
def register_user(user_data: UserRegistration, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.id == user_data.user_id).first()
    
    if db_user:
        db_user.full_name = user_data.full_name
        db_user.chronic_diseases = user_data.chronic_diseases
        db_user.medications = user_data.medications
        db_user.recent_illnesses = user_data.recent_illnesses
    else:
        # BURADAN EMAIL PARAMETRESİNİ SİLDİM
        db_user = models.User(
            id=user_data.user_id,
            full_name=user_data.full_name,
            chronic_diseases=user_data.chronic_diseases,
            medications=user_data.medications,
            recent_illnesses=user_data.recent_illnesses
        )
        db.add(db_user)
    
    db.commit()
    db.refresh(db_user)
    return {"status": "success", "message": "Profil kaydedildi."}

@app.post("/chat")
def chat_with_doctor_ai(request: ChatRequest, db: Session = Depends(get_db)):
    # Kullanıcıyı bul
    user = db.query(models.User).filter(models.User.id == request.user_id).first()
    
    # Kullanıcı yoksa oluştur (BURADAN DA EMAIL PARAMETRESİNİ SİLDİM)
    if not user:
        new_user = models.User(
            id=request.user_id, 
            full_name="Misafir Hasta"
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

    # Yapay zekaya sor
    ai_response = services.analyze_symptom_and_suggest(
        db=db, 
        user_id=request.user_id, 
        user_input=request.message,
        context=request.context
    )

    return ai_response