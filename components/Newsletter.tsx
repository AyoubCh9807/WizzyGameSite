'use client';

import { motion } from 'motion/react';
import { Mail, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-white/10 p-8 md:p-16 relative overflow-hidden skew-x-[-2deg]">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center skew-x-[2deg]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-[10px] font-pixel uppercase tracking-widest text-blue-500">Neural-Link Registration</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic leading-none">
                Join the <span className="text-blue-500">Vanguard</span>
              </h2>
              <p className="text-zinc-400 mb-0 leading-relaxed">
                Register your neural signature to receive classified updates, early access invites, and exclusive core-tech rewards.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  required
                  placeholder="ENTER NEURAL SIGNATURE (EMAIL)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 py-5 pl-12 pr-4 text-xs font-pixel uppercase tracking-widest focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <button
                disabled={status !== 'idle'}
                className="w-full py-5 bg-blue-600 text-white font-pixel font-bold uppercase italic tracking-tighter hover:bg-blue-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {status === 'idle' && (
                  <>Synchronize Link <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
                {status === 'loading' && (
                  <span className="animate-pulse">Establishing Connection...</span>
                )}
                {status === 'success' && (
                  <span className="text-green-400">Link Established</span>
                )}
              </button>
              
              <p className="text-[8px] font-pixel text-zinc-600 uppercase tracking-widest text-center">
                By synchronizing, you agree to the Vanguard Protocols & Privacy Directives.
              </p>
            </form>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
