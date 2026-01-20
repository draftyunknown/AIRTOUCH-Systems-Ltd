
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const EnergyCalculator: React.FC = () => {
  const [currentBill, setCurrentBill] = useState<number>(200);
  const [efficiencyGain, setEfficiencyGain] = useState<number>(35);

  const data = useMemo(() => [
    { name: 'Current', value: currentBill, color: '#475569' },
    { name: 'Optimum', value: currentBill * (1 - efficiencyGain / 100), color: '#22d3ee' }
  ], [currentBill, efficiencyGain]);

  const yearlySavings = (currentBill - (currentBill * (1 - efficiencyGain / 100))) * 12;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <i className="fas fa-bolt text-8xl text-cyan-600"></i>
      </div>
      
      <h3 className="text-sm font-black mb-10 text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
        <i className="fas fa-microchip text-cyan-500"></i>
        Savings Analysis
      </h3>
      
      <div className="space-y-10">
        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="text-xs font-black text-slate-800 uppercase tracking-widest">Monthly Bill ($)</label>
            <span className="text-2xl font-black text-slate-900">${currentBill}</span>
          </div>
          <input 
            type="range" 
            min="50" max="2000" step="50"
            value={currentBill}
            onChange={(e) => setCurrentBill(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-900"
          />
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="text-xs font-black text-slate-800 uppercase tracking-widest">Efficiency Goal</label>
            <span className="text-2xl font-black text-cyan-600">{efficiencyGain}%</span>
          </div>
          <input 
            type="range" 
            min="10" max="60" step="5"
            value={efficiencyGain}
            onChange={(e) => setEfficiencyGain(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </div>

        <div className="flex gap-4 items-center h-48">
          <div className="flex-1 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 900, fill: '#94a3b8'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'transparent'}} 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold'}}
                />
                <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-32 p-4 bg-slate-900 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl">
            <div className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-2 leading-none">Net Savings</div>
            <div className="text-xl font-black text-white">${yearlySavings.toFixed(0)}</div>
            <div className="text-[8px] text-slate-500 font-bold uppercase mt-1">Per Year</div>
          </div>
        </div>
      </div>
    </div>
  );
};
