'use client';

import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/60 z-10" />
        {/* In a real app, replace src with the actual video URL */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://picsum.photos/seed/wizzy/1920/1080?blur=10"
        >
          <source src="/animated.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Energy Core Placeholder (CSS Visual) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: 360,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 rounded-full border-[1px] border-blue-500/30 blur-sm"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: -360,
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 rounded-full border-[1px] border-sky-500/20 blur-md"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[10px] font-pixel uppercase tracking-widest text-zinc-400">System Online // v1.0.4-beta</span>
          </div>

          <h1 className="font-display text-7xl md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic">
            Over<span className="text-blue-500 text-glow font-pixel font-bold">Tempo</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light tracking-tight">
            The next generation of <span className="text-white font-medium">multiplayer magical combat</span>. 
            Harness the core. Rewrite the rules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-blue-600 text-white font-pixel font-bold uppercase tracking-tighter overflow-hidden skew-x-[-12deg]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center gap-2 skew-x-[12deg]">
                Initiate Protocol <ChevronRight className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 border border-white/20 hover:border-yellow-400 transition-colors font-pixel font-bold uppercase tracking-tighter skew-x-[-12deg]"
            >
              <span className="relative flex items-center gap-2 skew-x-[12deg]">
                <Play className="w-4 h-4 fill-current" /> View Transmission
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
    </section>
  );
}
