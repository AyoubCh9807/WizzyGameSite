'use client';

import { motion } from 'motion/react';
import { Activity, Users, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ServerStatus() {
  const [wizards, setWizards] = useState(12402);

  useEffect(() => {
    const interval = setInterval(() => {
      setWizards(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:flex flex-col gap-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-zinc-950/80 backdrop-blur-md border border-white/10 p-4 pr-8 flex items-center gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
        
        <div className="w-10 h-10 bg-green-500/10 flex items-center justify-center rounded-sm">
          <Activity className="w-5 h-5 text-green-500 animate-pulse" />
        </div>
        
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-pixel text-zinc-500 uppercase tracking-widest">Global Servers</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <div className="font-display text-lg font-black uppercase italic tracking-tighter leading-none">
            Operational
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-zinc-950/80 backdrop-blur-md border border-white/10 p-4 pr-8 flex items-center gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
        
        <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center rounded-sm">
          <Users className="w-5 h-5 text-blue-500" />
        </div>
        
        <div>
          <span className="text-[8px] font-pixel text-zinc-500 uppercase tracking-widest block">Active Wizards</span>
          <div className="font-display text-lg font-black uppercase italic tracking-tighter leading-none">
            {wizards.toLocaleString()}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
