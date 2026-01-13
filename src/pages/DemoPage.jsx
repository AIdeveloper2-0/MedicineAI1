import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Send, Activity, ArrowLeft, Save, Bot, User } from 'lucide-react';

const DemoPage = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  // Hafıza ve Mesajlar
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Merhaba! Ben Dr. AI. Size nasıl yardımcı olabilirim?' }
  ]);
  const [chatContext, setChatContext] = useState({});

  // Form Verileri (Email YOK - Backend ile uyumlu)
  const [formData, setFormData] = useState({
    full_name: '',
    chronic_diseases: '',
    medications: '',
    recent_illnesses: ''
  });

  // Otomatik Kaydırma
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom(); }, [messages]);

  // --- 1. KAYIT FONKSİYONU ---
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
      
      // Backend'e kullanıcıyı kaydet
      await axios.post(`${backendUrl}/register`, {
        user_id: 1, // Demo olduğu için sabit ID
        ...formData
      });
      
      setIsRegistered(true); // Sohbet ekranına geç
      
      // İlk mesajı kişiselleştir
      setMessages([{ 
        role: 'bot', 
        text: `Merhaba ${formData.full_name}! Sağlık profilinizi hafızama kaydettim.\n\nKronik rahatsızlıklarınızı ve ilaçlarınızı dikkate alarak size yardımcı olacağım. Şikayetiniz nedir?` 
      }]);

    } catch (error) {
      console.error("Kayıt hatası:", error);
      alert("Sunucuya bağlanılamadı. Backend'in çalıştığından emin olun.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- 2. MESAJ GÖNDERME ---
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
      
      const response = await axios.post(`${backendUrl}/chat`, {
        user_id: 1,
        message: userMessage.text,
        context: chatContext 
      });

      const data = response.data;
      let botResponse = {};

      if (data.status === "follow_up") {
        botResponse = { role: 'bot', type: 'question', text: data.message };
        setChatContext({ history: data.history_update }); 
      } else if (data.status === "final_result") {
        botResponse = {
          role: 'bot',
          type: 'diagnosis',
          text: `✅ **SONUÇ:**\n${data.message}\n\n🏥 **Bölüm:** ${data.department}\n💊 **Öneri:** ${data.recommendation}`
        };
        setChatContext({}); 
      } else {
        botResponse = { role: 'bot', text: data.message || "Anlaşılamadı." };
      }

      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: '⚠️ Bağlantı hatası. Lütfen tekrar deneyin.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      
      {/* Üst Bar */}
      <div className="w-full bg-[#121212] border-b border-[#333] p-4 flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <Activity className="text-[#00FFD1]" size={24} />
          <div>
            <h1 className="text-lg font-bold">Medicine AI</h1>
            <p className="text-xs text-gray-400">Klinik Asistan Modu</p>
          </div>
        </div>
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
          <ArrowLeft size={18} /> Ana Sayfaya Dön
        </button>
      </div>

      {/* Ana İçerik */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-[#0f0f0f] border border-[#222] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh]">
          
          {!isRegistered ? (
            // --- EKRAN 1: KAYIT FORMU ---
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center animate-in fade-in duration-500">
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-[#00FFD1] mb-4">Hasta Profil Kartı</h2>
                <p className="text-gray-400 max-w-lg mx-auto">Yapay zekanın size doğru teşhis koyabilmesi için lütfen tıbbi geçmişinizi kısaca özetleyin.</p>
              </div>
              
              <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
                <div className="space-y-2">
                  <label className="text-sm text-gray-500 font-medium">Ad Soyad</label>
                  <input required className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] outline-none transition" 
                    placeholder="Örn: Ali Yılmaz"
                    onChange={e => setFormData({...formData, full_name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-500 font-medium">Kullandığınız İlaçlar</label>
                  <input className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] outline-none transition" 
                    placeholder="Örn: İnsülin, Ağrı kesici..."
                    onChange={e => setFormData({...formData, medications: e.target.value})} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-gray-500 font-medium">Kronik Hastalıklar</label>
                  <input className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] outline-none transition" 
                    placeholder="Örn: Diyabet, Tansiyon, Astım (Yoksa boş bırakın)"
                    onChange={e => setFormData({...formData, chronic_diseases: e.target.value})} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-gray-500 font-medium">Son Dönem Rahatsızlıkları</label>
                  <textarea className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-4 focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] outline-none h-24 resize-none transition" 
                    placeholder="Son 1 ayda geçirdiğiniz hastalıklar veya operasyonlar..."
                    onChange={e => setFormData({...formData, recent_illnesses: e.target.value})} />
                </div>

                <button type="submit" disabled={isLoading} className="md:col-span-2 bg-[#00FFD1] text-black font-bold py-4 rounded-xl hover:bg-[#00e6bc] hover:shadow-[0_0_20px_rgba(0,255,209,0.2)] transition flex items-center justify-center gap-2 text-lg mt-4">
                  {isLoading ? 'Profil Oluşturuluyor...' : <><Save size={20}/> Profili Kaydet ve Başla</>}
                </button>
              </form>
            </div>
          ) : (
            // --- EKRAN 2: SOHBET MODU ---
            <>
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 bg-[#0a0a0a]">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                    <div className={`flex items-start gap-3 max-w-[85%] md:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-[#00FFD1] text-black' : 'bg-[#1F1F1F] text-[#00FFD1] border border-[#333]'}`}>
                        {msg.role === 'user' ? <User size={20}/> : <Bot size={20}/>}
                      </div>
                      <div className={`p-5 rounded-3xl text-sm md:text-base leading-relaxed whitespace-pre-wrap shadow-md ${
                          msg.role === 'user' ? 'bg-[#00FFD1] text-black rounded-tr-none font-medium' : 
                          msg.type === 'question' ? 'bg-[#2A2A1A] text-[#FFD700] border border-[#FFD700] rounded-tl-none' : 
                          'bg-[#1A1A1A] text-gray-200 border border-[#333] rounded-tl-none'
                        }`}>
                        {msg.type === 'question' && <div className="flex items-center gap-2 mb-2 font-bold text-[#FFD700] text-xs uppercase tracking-wider"><Activity size={14}/> Dr. AI Soruyor</div>}
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm ml-16 animate-pulse">
                    <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-bounce delay-150"></div>
                    Dr. AI düşünüyor...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="p-6 bg-[#121212] border-t border-[#333] flex gap-4">
                <input 
                  className="flex-1 bg-[#1A1A1A] text-white rounded-2xl px-6 py-4 border border-[#333] focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] outline-none text-base placeholder-gray-600 transition"
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)} 
                  placeholder="Şikayetinizi detaylıca buraya yazın..." 
                />
                <button type="submit" disabled={isLoading} className="bg-[#00FFD1] text-black rounded-2xl w-16 md:w-20 flex items-center justify-center hover:scale-105 hover:bg-[#00e6bc] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send size={24}/>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;