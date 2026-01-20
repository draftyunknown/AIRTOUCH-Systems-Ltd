
import React, { useState, useRef, useEffect } from 'react';
import { getCoolingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Diagnostic active. How can I assist with your thermal systems today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const aiResponse = await getCoolingAdvice(input);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[550px] w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden scale-in">
      <div className="bg-slate-950 p-6 text-white flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <i className="fas fa-terminal text-slate-900 text-lg"></i>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest">Airtouch Core</h4>
            <span className="text-[10px] text-cyan-400 font-bold flex items-center gap-1.5 uppercase tracking-tighter">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Systems Online
            </span>
          </div>
        </div>
        <i className="fas fa-cog text-slate-700 hover:text-white transition-colors cursor-pointer"></i>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
              m.role === 'user' 
                ? 'bg-slate-900 text-white rounded-br-none shadow-lg' 
                : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-bl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex gap-2 items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3 bg-slate-100 p-2 rounded-2xl border border-slate-200 focus-within:border-cyan-400 transition-colors">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="System query..."
            className="flex-1 bg-transparent px-4 py-2 text-sm font-bold text-slate-800 outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all disabled:opacity-50 shadow-lg shadow-slate-900/10"
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </div>
        <p className="text-[9px] text-slate-400 mt-4 text-center font-bold uppercase tracking-widest">
          Secured by Airtouch Thermal Intelligence
        </p>
      </div>
    </div>
  );
};
