
import React, { useState, useMemo } from 'react';
import { EnergyCalculator } from './components/Calculator';
import { AIChat } from './components/AIChat';
import { Product } from './types';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Arctic Split v3', category: 'Residential', price: 850, efficiency: 'A+++', image: '❄️' },
  { id: '2', name: 'Cryo-Vault 5000', category: 'Industrial', price: 4500, efficiency: 'A+', image: '🧊' },
  { id: '3', name: 'Flow-Logic Pro', category: 'Commercial', price: 2200, efficiency: 'A++', image: '🏢' },
  { id: '4', name: 'Frost-Byte Compact', category: 'Residential', price: 600, efficiency: 'A++', image: '🏠' },
];

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [bookingStep, setBookingStep] = useState(1);

  const filteredProducts = useMemo(() => 
    filter === 'All' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.category === filter)
  , [filter]);

  const toggleCompare = (id: string) => {
    setCompareList(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id].slice(-2));
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] selection:bg-cyan-200 selection:text-cyan-900">
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] frost-glass px-6">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 border border-cyan-400/20 group-hover:rotate-90 transition-transform duration-700">
              <i className="fas fa-snowflake text-cyan-400 text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-[900] tracking-tighter text-slate-950 leading-none">AIRTOUCH</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Systems Ltd</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nairobi</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'Catalog', 'Efficiency', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[13px] font-black text-slate-500 hover:text-cyan-600 uppercase tracking-widest transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-slate-950 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-600 hover:shadow-cyan-500/30 transition-all active:scale-95 border border-white/10 shadow-xl">
              Portal Access
            </button>
          </div>
          
          <button className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100">
            <i className="fas fa-bars-staggered text-xl text-slate-900"></i>
          </button>
        </div>
      </nav>

      {/* Hero: Precision Engineered */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-52 overflow-hidden hero-gradient">
        <div className="mist-layer"></div>
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-emerald-400/10 blur-[150px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-2xl text-cyan-100 text-[11px] font-black mb-10 border border-white/20 uppercase tracking-[0.2em] animate-fade-in">
              <i className="fas fa-shield-check text-cyan-400"></i>
              Verified 4.5 Stars on Nairobi Business List
            </div>
            <h1 className="text-7xl md:text-9xl font-[950] text-white leading-[0.85] mb-10 tracking-[-0.04em] glow-text">
              Cooling <br/><span className="text-cyan-400">Mastery.</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-medium tracking-tight">
              From residential luxury to mission-critical industrial cold chains. We engineer the future of thermal comfort in Kenya.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-cyan-400 hover:bg-white text-slate-950 px-12 py-6 rounded-[2rem] font-black text-lg transition-all flex items-center gap-4 shadow-2xl shadow-cyan-400/40 group">
                Instant Quote <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black text-lg transition-all backdrop-blur-md">
                3D Product Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Accolades */}
      <div className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Energy Efficiency', val: 'A+++ Rated', icon: 'fa-leaf' },
            { label: 'Response Time', val: '< 2 Hours', icon: 'fa-bolt' },
            { label: 'Satisfaction', val: '4.9/5 Score', icon: 'fa-star' },
            { label: 'Licensed', val: 'Nairobi Reg.', icon: 'fa-id-card' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-3">
                <i className={`fas ${item.icon} text-cyan-600 text-lg`}></i>
                <span className="text-2xl font-black text-slate-900">{item.val}</span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services: The Core Hub */}
      <section className="py-32 max-w-7xl mx-auto px-6" id="services">
        <div className="text-center mb-24">
          <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Capabilities</span>
          <h2 className="text-6xl font-[950] text-slate-950 tracking-tighter mb-8 leading-none">Complete Cooling <br/>Intelligence.</h2>
          <div className="w-24 h-2 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              title: 'HVAC Architecture', 
              icon: 'fa-wind', 
              features: ['Smart Zoning', 'Ductless Splits', 'HEPA Filtration'],
              color: 'from-blue-500/10'
            },
            { 
              title: 'Cold Storage', 
              icon: 'fa-temperature-low', 
              features: ['Pharmaceutical Grade', 'Blast Freezers', 'Humidity Control'],
              color: 'from-cyan-500/10'
            },
            { 
              title: 'Precision Repair', 
              icon: 'fa-microchip', 
              features: ['Digital Diagnostics', 'Original Spares', 'Refilling Services'],
              color: 'from-emerald-500/10'
            }
          ].map((item, i) => (
            <div key={i} className={`ice-card p-12 rounded-[3.5rem] bg-gradient-to-br ${item.color} to-white relative overflow-hidden group border-2 border-slate-50`}>
              <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <i className={`fas ${item.icon} text-cyan-400 text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-black mb-6 text-slate-950">{item.title}</h3>
              <ul className="space-y-4 mb-10">
                {item.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-500 font-bold text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-50 hover:bg-cyan-600 hover:text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                System Specs
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Catalog: Compare & Filter */}
      <section className="bg-slate-50 py-32 border-y border-slate-100" id="catalog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div>
              <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Product Lineup</h2>
              <p className="text-slate-500 font-bold max-w-md">Compare efficiency and output across our residential and industrial categories.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-3xl border border-slate-200 shadow-sm">
              {['All', 'Residential', 'Commercial', 'Industrial'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-slate-950 text-white shadow-xl' : 'text-slate-400 hover:text-slate-950'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((p) => (
              <div key={p.id} className={`ice-card rounded-[3rem] p-6 flex flex-col relative transition-all duration-500 ${compareList.includes(p.id) ? 'ring-4 ring-cyan-400 bg-cyan-50/20' : ''}`}>
                <div className="h-64 bg-[#f8fafc] rounded-[2.5rem] flex items-center justify-center text-8xl mb-8 group overflow-hidden relative shadow-inner">
                  <span className="group-hover:scale-125 transition-transform duration-700">{p.image}</span>
                  <button 
                    onClick={() => toggleCompare(p.id)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${compareList.includes(p.id) ? 'bg-cyan-500 text-white' : 'bg-white/80 hover:bg-white text-slate-900'}`}
                  >
                    <i className={`fas ${compareList.includes(p.id) ? 'fa-check' : 'fa-plus'} text-xs`}></i>
                  </button>
                </div>
                
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase text-cyan-700 bg-cyan-100 px-3 py-1.5 rounded-full tracking-widest">{p.category}</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star text-[8px] text-amber-400"></i>)}
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-slate-950 mb-8 leading-tight">{p.name}</h4>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Estimate</span>
                      <span className="text-3xl font-black text-slate-950">${p.price.toLocaleString()}</span>
                    </div>
                    <button className="bg-slate-950 text-white px-6 py-4 rounded-2xl hover:bg-cyan-500 hover:text-slate-950 transition-all font-black text-xs uppercase tracking-widest">
                      Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {compareList.length > 0 && (
            <div className="mt-16 bg-slate-950 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 animate-slide-up">
              <div className="flex gap-6 items-center">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Comparison Mode</span>
                <div className="flex -space-x-4">
                   {compareList.map(id => (
                     <div key={id} className="w-14 h-14 rounded-full bg-white/10 border-4 border-slate-950 flex items-center justify-center text-2xl">
                       {MOCK_PRODUCTS.find(p => p.id === id)?.image}
                     </div>
                   ))}
                </div>
              </div>
              <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                Generate Comparison Report
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Booking System */}
      <section className="py-32 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <i className="fas fa-snowflake text-[15rem] text-cyan-400"></i>
            </div>
            
            <div className="lg:w-2/5 p-16 md:p-24 text-white relative z-10">
              <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Service Scheduling</span>
              <h2 className="text-6xl font-black mb-10 tracking-tighter leading-[0.9]">Smart <br/>Installation.</h2>
              <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
                Connect directly with our engineering team on Mombasa Road. We offer priority dispatch for critical refrigeration failure.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: 'fa-location-dot', label: 'Office', val: 'Mombasa Road, Nairobi' },
                  { icon: 'fa-phone', label: 'Priority', val: '+254 722 275492' },
                  { icon: 'fa-wheelchair', label: 'Access', val: 'Fully Accessible Entry' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <i className={`fas ${item.icon} text-cyan-400`}></i>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.label}</div>
                      <div className="text-lg font-black">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 bg-white m-6 rounded-[3rem] p-12 md:p-20 shadow-inner">
              <div className="flex gap-4 mb-12">
                {[1,2,3].map(s => (
                  <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${bookingStep >= s ? 'bg-cyan-500 shadow-lg shadow-cyan-500/30' : 'bg-slate-100'}`}></div>
                ))}
              </div>

              {bookingStep === 1 && (
                <div className="animate-fade-in">
                  <h4 className="text-3xl font-black mb-8 text-slate-950 tracking-tight uppercase text-sm tracking-[0.2em] text-slate-400">Step 01: Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <input type="text" placeholder="Your Name" className="bg-slate-50 border-none rounded-2xl p-6 outline-none focus:ring-4 focus:ring-cyan-500/10 font-bold text-slate-800" />
                    <input type="email" placeholder="Email Address" className="bg-slate-50 border-none rounded-2xl p-6 outline-none focus:ring-4 focus:ring-cyan-500/10 font-bold text-slate-800" />
                  </div>
                  <button onClick={() => setBookingStep(2)} className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-600 transition-all">
                    Configure Service Details
                  </button>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="animate-fade-in">
                  <h4 className="text-3xl font-black mb-8 text-slate-950 tracking-tight uppercase text-sm tracking-[0.2em] text-slate-400">Step 02: Thermal Profile</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {['Split AC', 'Cold Room', 'Freezer', 'Central Air', 'Maintenance', 'Emergency'].map(type => (
                      <button key={type} className="p-5 border-2 border-slate-100 rounded-2xl hover:border-cyan-400 transition-all text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-600">
                        {type}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setBookingStep(1)} className="flex-1 bg-slate-100 text-slate-900 py-6 rounded-2xl font-black text-xs uppercase tracking-widest">Back</button>
                    <button onClick={() => setBookingStep(3)} className="flex-[2] bg-slate-950 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-600">Finalize Request</button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="animate-fade-in text-center py-10">
                   <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                     <i className="fas fa-check-double"></i>
                   </div>
                   <h4 className="text-3xl font-[950] text-slate-950 mb-4 tracking-tighter">Transmission Successful.</h4>
                   <p className="text-slate-500 font-bold mb-10">Our Mombasa Road dispatch team will contact you within 60 minutes.</p>
                   <button onClick={() => setBookingStep(1)} className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest">Reset Form</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Industrial Strength */}
      <footer className="bg-slate-950 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                  <i className="fas fa-snowflake text-slate-950 text-xl"></i>
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase">Airtouch</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed text-lg mb-12 max-w-sm">
                Nairobi's premium destination for industrial cooling, climate architecture, and professional refrigeration maintenance since 2011.
              </p>
              <div className="flex gap-5">
                {[
                  { icon: 'fa-facebook-f', link: 'https://www.facebook.com/p/Airtouch-100063490421855/' },
                  { icon: 'fa-linkedin-in', link: '#' },
                  { icon: 'fa-instagram', link: '#' },
                  { icon: 'fa-x-twitter', link: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-slate-950 transition-all border border-white/10">
                    <i className={`fab ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-cyan-400">Engineering</h5>
              <ul className="space-y-6 text-slate-500 text-xs font-black uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">AC Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cold Chains</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diagnostics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Lab</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-cyan-400">Network</h5>
              <ul className="space-y-6 text-slate-500 text-xs font-black uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Find Dealer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nairobi HQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Map</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-cyan-400">Thermal Pulse</h5>
              <p className="text-slate-500 text-xs font-bold mb-6">Subscribe for system efficiency briefings.</p>
              <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10">
                <input type="email" placeholder="Email" className="bg-transparent border-none px-4 py-3 text-xs outline-none flex-1 font-bold text-white" />
                <button className="bg-cyan-500 text-slate-950 px-5 rounded-xl hover:bg-white transition-all">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            <div>Airtouch Cooling Systems Ltd &copy; 2024. Engineering the Cold.</div>
            <div className="flex gap-10">
              <span className="flex items-center gap-3"><i className="fas fa-shield-check text-cyan-400"></i> Licensed Service #112518</span>
              <span className="flex items-center gap-3"><i className="fas fa-wheelchair text-cyan-400"></i> Accessible Facility</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Intelligence */}
      <div className="fixed bottom-12 right-12 z-[100] flex flex-col items-end gap-6">
        {showChat && <AIChat />}
        <button 
          onClick={() => setShowChat(!showChat)}
          className="w-20 h-20 bg-slate-950 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(34,211,238,0.4)] flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all active:scale-90 group relative ring-8 ring-white"
        >
          {showChat ? (
            <i className="fas fa-times text-2xl"></i>
          ) : (
            <div className="relative">
              <i className="fas fa-robot text-3xl group-hover:scale-110 transition-transform"></i>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-950 animate-pulse"></span>
            </div>
          )}
          <div className="absolute right-28 bg-slate-950 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none border border-white/10 whitespace-nowrap">
             Airtouch Neural Support <span className="text-cyan-400 ml-2">Online</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
