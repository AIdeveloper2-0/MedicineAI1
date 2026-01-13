from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite veritabanı dosyamızın adı 'medicine.db' olacak
SQLALCHEMY_DATABASE_URL = "sqlite:///./medicine.db"

# Veritabanı motorunu oluşturuyoruz
# check_same_thread=False ayarı SQLite için gereklidir
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Veritabanı oturumu (Session) oluşturucu
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Modellerimiz bu Base sınıfından türeyecek
Base = declarative_base()