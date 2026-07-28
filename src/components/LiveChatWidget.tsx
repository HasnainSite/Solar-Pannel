import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageCircle, Sun, Sparkles } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! I am your SolarTech AI Energy Consultant. How can I help you today? Ask me about solar panel pricing, 30% tax credits, net metering, or battery backups!',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: timeStr }]);
    setInputText('');
    setIsTyping(true);

    // Smart Solar AI Response Logic
    setTimeout(() => {
      let reply = '';
      const lower = userMsg.toLowerCase();

      if (lower.includes('tax credit') || lower.includes('itc') || lower.includes('rebate') || lower.includes('cost')) {
        reply = "Under current 2026 federal policy, you qualify for a 30% Federal Investment Tax Credit (ITC) on total turnkey solar and battery costs. For example, a $20,000 system gets a $6,000 direct tax deduction!";
      } else if (lower.includes('net metering') || lower.includes('grid') || lower.includes('credit')) {
        reply = "Net Metering allows your bi-directional electric meter to spin backward when your solar panels generate surplus daytime power. Your local utility company credits your account for every exported kWh!";
      } else if (lower.includes('battery') || lower.includes('storage') || lower.includes('powerwall') || lower.includes('outage')) {
        reply = "Our SolarTech PowerVault 15kWh LiFePO4 battery pack switches on within 10 milliseconds during grid blackouts, keeping your ACs, lights, refrigerators, and Wi-Fi running seamlessly.";
      } else if (lower.includes('quote') || lower.includes('price') || lower.includes('estimate')) {
        reply = "You can calculate your exact 25-year solar savings using our ROI Calculator on this page, or click the 'Get Free Quote' button in the top menu for a customized 3D roof shading report!";
      } else if (lower.includes('panel') || lower.includes('brand') || lower.includes('topcon')) {
        reply = "We install Bloomberg Tier-1 N-Type TOPCon 580W panels with 22.8% efficiency, anti-reflective tempered glass, and a 30-year linear power warranty.";
      } else {
        reply = "Great question! SolarTech Energy provides turnkey solar, net metering, and lithium battery backup systems with 25-year warranties and 48-hour rapid installation. Would you like to request a free site survey?";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Widget Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#0A4D9B] hover:bg-[#083a75] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-110 border border-blue-400/30"
          title="Open AI Solar Consultant Chat"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#FFC107]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline font-bold text-xs pr-1">Solar AI Consultant</span>
        </button>
      )}

      {/* Live Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden flex flex-col h-[480px] animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0A4D9B] to-[#2E8B57] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="font-extrabold text-xs text-white flex items-center gap-1.5">
                  SolarTech AI Advisor
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </div>
                <div className="text-[10px] text-emerald-200">● Online • 24/7 Energy Expert</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-200 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-950/60">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0A4D9B] text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs italic p-2">
                <Bot className="w-4 h-4 text-amber-400 animate-spin" />
                <span>AI Solar Consultant is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about solar panels, tax credits, savings..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0A4D9B]"
            />
            <button
              type="submit"
              className="p-2 bg-[#2E8B57] text-white rounded-xl hover:bg-emerald-600 transition-colors"
            >
              <Send className="w-4 h-4 text-amber-300" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
