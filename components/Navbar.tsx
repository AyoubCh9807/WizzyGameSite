'use client';

import { motion } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center skew-x-[-12deg] group-hover:bg-yellow-500 transition-colors">
            <Terminal className="w-6 h-6 text-white skew-x-[12deg]" />
          </div>
          <span className="font-pixel text-xl font-bold uppercase tracking-tighter italic">
            Over<span className="text-blue-500 group-hover:text-yellow-400 transition-colors">Tempo</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {['Features', 'Characters', 'Lore', 'Intel'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-pixel font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block text-[10px] font-pixel font-bold uppercase tracking-widest px-4 py-2 border border-white/10 hover:border-blue-500 transition-colors">
            Login // Auth
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {['Features', 'Characters', 'Lore', 'Intel'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-display font-bold uppercase tracking-tight text-zinc-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-blue-600 text-white font-display font-bold uppercase italic">
              Initiate Protocol
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
