export const medicineAIData = {
  brand: {
    name: 'Medicine AI',
    tagline: 'Klinik Asistan v1',
    description: 'yapay zeka destekli doktorunuz'
  },

  themes: [
    {
      id: 'clinical-white',
      name: 'Klinik Beyaz',
      description: 'Temiz, tıbbi, minimalist',
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      accent: '#2196F3'
    },
    {
      id: 'night-carbon',
      name: 'Karbon Gece Modu',
      description: 'Gece kullanımı için karanlık mod',
      primary: '#000000',
      secondary: '#121212',
      accent: '#00FFD1',
      active: true
    },
    {
      id: 'surgical-blue',
      name: 'Cerrahi Mavi',
      description: 'Profesyonel, sakin',
      primary: '#E3F2FD',
      secondary: '#BBDEFB',
      accent: '#1976D2'
    },
    {
      id: 'emergency-red',
      name: 'Acil Durum Kırmızısı',
      description: 'Kritik uyarı modu',
      primary: '#FFEBEE',
      secondary: '#FFCDD2',
      accent: '#D32F2F'
    }
  ],

  features: [
    {
      id: 1,
      title: 'Yapay Zeka Destekli Tıbbi Asistan',
      description: 'Tıbbi literatürle eğitilmiş gelişmiş LLM teknolojisi ile anında klinik rehberlik alın',
      icon: 'MessageSquare',
      image: 'https://images.unsplash.com/photo-1682941664177-7920d0e59418'
    },
    {
      id: 2,
      title: 'Semptom Analizi & Triyaj',
      description: 'Klinik protokollere dayalı otomatik triyaj önerileri sunan akıllı semptom kontrolü',
      icon: 'Activity',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28'
    },
    {
      id: 3,
      title: 'İlaç Etkileşim Kontrolü',
      description: 'Kapsamlı ilaç veritabanı ile gerçek zamanlı farmasötik etkileşim tespiti',
      icon: 'AlertCircle',
      image: 'https://images.pexels.com/photos/8439076/pexels-photo-8439076.jpeg'
    },
    {
      id: 4,
      title: 'Hasta Verisi Özetleme',
      description: 'Karmaşık hasta geçmişlerini eyleme geçirilebilir içgörülere dönüştüren LLM destekli analiz',
      icon: 'FileText',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      id: 5,
      title: 'Tıbbi Rapor Oluşturma',
      description: 'Özelleştirilebilir şablonlar ve akıllı biçimlendirme ile otomatik klinik dokümantasyon',
      icon: 'FileCheck'
    },
    {
      id: 6,
      title: 'Gerçek Zamanlı Sağlık İçgörüleri',
      description: 'Desenleri tanımlayan ve sağlık sonuçlarını tahmin eden makine öğrenimi destekli analitik',
      icon: 'TrendingUp'
    },
    {
      id: 7,
      title: 'Güvenli Veri İşleme',
      description: 'Tam hasta veri güvenliği sağlayan TLS 1.3 ile AES-256 şifreleme',
      icon: 'Shield'
    },
    {
      id: 8,
      title: 'Çoklu Dil Desteği',
      description: 'Küresel sağlık erişilebilirliği için birden fazla dilde klinik destek',
      icon: 'Globe'
    }
  ],

  technicalSpecs: [
    {
      category: 'Yapay Zeka Motoru',
      specs: [
        { label: 'Model Boyutu', value: '45B / 70B parametre' },
        { label: 'Eğitim Verisi', value: 'PubMed, Klinik Vaka Kütüphaneleri' },
        { label: 'Yanıt Süresi', value: '< 1.5sn (bulut modu)' },
        { label: 'Çıkarım Modu', value: 'Bulut + Opsiyonel Edge' }
      ]
    },
    {
      category: 'Tıbbi Standartlar',
      specs: [
        { label: 'Sınıflandırma', value: 'ICD-10 Uyumlu' },
        { label: 'Terminoloji', value: 'SNOMED CT Desteği' },
        { label: 'Birlikte Çalışabilirlik', value: 'HL7 FHIR Entegrasyonu' },
        { label: 'İlaç Veritabanı', value: 'FDA & WHO Standartları' }
      ]
    },
    {
      category: 'Güvenlik & Uyumluluk',
      specs: [
        { label: 'Şifreleme', value: 'AES-256 + TLS 1.3' },
        { label: 'Uyumluluk', value: 'HIPAA Sertifikalı' },
        { label: 'Veri Depolama', value: 'Uçtan Uca Şifreli' },
        { label: 'Kimlik Doğrulama', value: 'Çok Faktörlü (MFA)' }
      ]
    },
    {
      category: 'Performans',
      specs: [
        { label: 'Çalışma Süresi SLA', value: '%99.95' },
        { label: 'Eşzamanlı Kullanıcı', value: '10,000\'e kadar' },
        { label: 'API Hız Limiti', value: '1000 istek/dk' },
        { label: 'Veri İşleme', value: 'Gerçek zamanlı akış' }
      ]
    },
  ],

  useCases: [
    {
      title: 'Klinik Uygulama',
      description: 'Yoğun klinik ortamlarda teşhis doğruluğunu ve tedavi planlamasını geliştirin',
      icon: 'Stethoscope',
      users: '5,000+ Klinik'
    },
    {
      title: 'Tıp Eğitimi',
      description: 'Tıp öğrencileri ve asistanlar için interaktif öğrenme aracı',
      icon: 'GraduationCap',
      users: '15,000+ Öğrenci'
    },
    {
      title: 'Hastane Sistemleri',
      description: 'Hastane ağları için kurumsal düzeyde klinik karar desteği',
      icon: 'Building2',
      users: '200+ Hastane'
    }
  ],

  pricing: [
    {
      name: 'Başlangıç',
      price: '₺2.999',
      period: '/ay',
      description: 'Bireysel doktorlar için mükemmel',
      features: [
        'Yapay Zeka Klinik Asistanı',
        'Temel Semptom Analizi',
        'İlaç Etkileşim Kontrolü',
        '500 sorgu/ay',
        'E-posta Desteği'
      ],
      popular: false
    },
    {
      name: 'Profesyonel',
      price: '₺8.999',
      period: '/ay',
      description: 'Küçük klinikler ve muayenehaneler için',
      features: [
        'Başlangıç paketindeki her şey',
        'Hasta Verisi Özetleme',
        'Tıbbi Rapor Oluşturma',
        'Sınırsız sorgu',
        'Öncelikli Destek',
        'API Erişimi'
      ],
      popular: true
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      period: '',
      description: 'Hastaneler ve büyük kuruluşlar için',
      features: [
        'Profesyonel paketindeki her şey',
        'Özel Model Eğitimi',
        'Yerinde (On-premise) Kurulum',
        'Özel Destek Ekibi',
        'SLA Garantisi',
        'HIPAA Uyumluluk Paketi'
      ],
      popular: false
    }
  ],

  testimonials: [
    {
      name: 'Dr. Sarah Chen',
      role: 'Dahiliye Uzmanı, Stanford Tıp',
      content: 'Medicine AI, hasta bakımına yaklaşımımı değiştirdi. Semptom analizi inanılmaz derecede doğru ve bana her gün saatler kazandırıyor.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Dr. Michael Roberts',
      role: 'Acil Tıp Hekimi, Johns Hopkins',
      content: 'İlaç etkileşim kontrolü, potansiyel olumsuz olayları birçok kez önledi. Herhangi bir sağlık hizmeti sağlayıcısı için vazgeçilmez bir araç.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    {
      name: 'Dr. Sharma',
      role: 'Tıp Öğrencisi, Harvard Tıp Fakültesi',
      content: 'Bir tıp öğrencisi olarak, bu platform klinik muhakemeyi öğrenmek için paha biçilmez. 7/24 yanınızda bir uzman doktor varmış gibi.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ],

  stats: [
    { label: 'Sağlık Profesyoneli', value: '50,000+' },
    { label: 'İşlenen Klinik Sorgu', value: '10M+' },
    { label: 'Doğruluk Oranı', value: '%98.5' },
    { label: 'Hizmet Verilen Ülke', value: '45+' }
  ]
};