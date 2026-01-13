from sqlalchemy import Column, Integer, String, Text, Boolean, ForeignKey
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    # main.py fields
    full_name = Column(String, index=True, nullable=True)
    chronic_diseases = Column(Text, default="") 
    medications = Column(Text, default="")      
    recent_illnesses = Column(Text, default="")
    
    # seed.py fields (added for compatibility)
    username = Column(String, index=True, nullable=True)
    age = Column(Integer, nullable=True)

class MedicalHistory(Base):
    __tablename__ = "medical_history"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    condition = Column(String)
    symptom = Column(String)
    date = Column(String)

class DrugHistory(Base):
    __tablename__ = "drug_history"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    drug_name = Column(String)
    condition_treated = Column(String)
    is_effective = Column(Boolean)
    side_effects = Column(String)

class ChatLog(Base):
    __tablename__ = "chat_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    message = Column(Text)
    response = Column(Text)