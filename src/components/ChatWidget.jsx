import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageSquare, X, Send, Activity, User, Bot, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Merhaba! Ben Dr. AI. Size nasıl yardımcı olabilirim?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatContext, setChatContext] = useState({}); // Hafıza (Context)
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
      
      // Backend'e mesajı ve geçmişi (context) gönderiyoruz
      const response = await axios.post(`${backendUrl}/chat`, {
        user_id: 1,
        message: userMessage.text,
        context: chatContext 
      });

      const data = response.data;
      let botResponse = {};

      // --- YAPAY ZEKA CEVAPLARINI İŞLEME ---
      
      // 1. Durum: Soru Soruyor (Follow Up)
      if (data.status === "follow_up") {
        botResponse = {
          role: 'bot',
          type: 'question',
          text: data.message 
        };
        // Hafızayı güncelle (Konuşma geçmişini kaydet)
        setChatContext({ history: data.history_update });
      } 
      
      // 2. Durum: Teşhis Koydu (Final Result)
      else if (data.status === "final_result") {
        botResponse = {
          role: 'bot',
          type: 'diagnosis',
          text: `✅ **SONUÇ:**\n${data.message}\n\n🏥 **Bölüm:** ${data.department}\n💊 **Öneri:** ${data.recommendation}`
        };
        // Konu bittiği için hafızayı temizle
        setChatContext({});
      } 
      
      // 3. Durum: Genel Cevap
      else {
        botResponse = { role: 'bot', text: data.message || "Anlaşılamadı." };
      }

      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'bot', text: '⚠️ Bağlantı hatası. Lütfen daha sonra tekrar deneyin.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[380px] h-[600px] bg-[#121212] border border-[#333] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A1A1A] p-4 border-b border-[#333] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Activity className="text-[#00FFD1]" size={20} />
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-sm">Dr. AI Asistan</h3>
                <span className="text-[10px] text-gray-400">Gemini Pro • Powered</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="text-gray-400" /></button>
          </div>

          {/* Mesajlar */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
            {messages.map((msg, index) => (
              <div key={index} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-[#00FFD1] text-black font-medium rounded-tr-none' 
                      : msg.type === 'question' 
                        ? 'bg-[#2A2A1A] text-[#FFD700] border border-[#FFD700] rounded-tl-none' 
                        : 'bg-[#1E1E1E] text-gray-200 border border-[#333] rounded-tl-none'
                  }`}
                >
                  {msg.type === 'question' && <div className="flex items-center gap-2 mb-2 font-bold text-[#FFD700]"><HelpCircle size={16}/> Dr. AI Soruyor:</div>}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-gray-500 text-xs ml-4 animate-pulse">Dr. AI düşünüyor...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-[#1A1A1A] flex gap-2">
            <input
              className="flex-1 bg-[#0F0F0F] text-white rounded-xl px-4 py-3 border border-[#333] focus:border-[#00FFD1] outline-none placeholder-gray-600 text-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Şikayetinizi yazın..."
            />
            <Button type="submit" disabled={isLoading} className="bg-[#00FFD1] text-black rounded-xl w-12"><Send size={20}/></Button>
          </form>
        </div>
      )}
      
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-[#00FFD1] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;