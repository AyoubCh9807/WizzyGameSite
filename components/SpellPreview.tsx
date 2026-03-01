'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Droplets, Wind, Zap, Target, Shield } from 'lucide-react';

const spells = [
  {
    id: 'ignis',
    name: 'Inferno Surge',
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/50',
    description: 'Unleash a concentrated blast of core-heated plasma. High damage, moderate cast time.',
    stats: { damage: 90, range: 60, cost: 40 }
  },
  {
    id: 'aqua',
    name: 'Hydro-Blade',
    icon: Droplets,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/50',
    description: 'Pressurized liquid mana that cuts through kinetic shielding. High precision, low cost.',
    stats: { damage: 65, range: 85, cost: 20 }
  },
  {
    id: 'aero',
    name: 'Vortex Blink',
    icon: Wind,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/50',
    description: 'Instantaneous spatial repositioning using atmospheric pressure. Zero damage, high utility.',
    stats: { damage: 0, range: 100, cost: 50 }
  },
  {
    id: 'volt',
    name: 'Chain Lightning',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/50',
    description: 'Electric discharge that arcs between multiple targets. Moderate damage, high chaos.',
    stats: { damage: 75, range: 70, cost: 45 }
  }
];

export default function SpellPreview() {
  const [activeSpell, setActiveSpell] = useState(spells[0]);

  return (
    <section id="lore" className="py-24 bg-zinc-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-pixel uppercase tracking-widest text-blue-500 mb-4 block">Ability Database</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Core <span className="text-white italic">Manifestations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {spells.map((spell) => (
              <button
                key={spell.id}
                onClick={() => setActiveSpell(spell)}
                className={`p-8 border transition-all duration-300 flex flex-col items-center gap-4 group relative overflow-hidden ${
                  activeSpell.id === spell.id 
                    ? `${spell.border} ${spell.bg} scale-105 z-10` 
                    : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <spell.icon className={`w-12 h-12 ${spell.color} group-hover:scale-110 transition-transform`} />
                <span className="font-pixel text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {spell.name}
                </span>
                {activeSpell.id === spell.id && (
                  <motion.div 
                    layoutId="spell-glow"
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="bg-zinc-950/50 border border-white/5 p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpell.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <activeSpell.icon className={`w-10 h-10 ${activeSpell.color}`} />
                  <h3 className="font-pixel text-2xl font-bold uppercase italic tracking-tighter">
                    {activeSpell.name}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 italic">
                  &quot;{activeSpell.description}&quot;
                </p>

                <div className="space-y-6">
                  {Object.entries(activeSpell.stats).map(([label, value]) => (
                    <div key={label} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-pixel uppercase text-zinc-500">{label}</span>
                        <span className="text-[10px] font-pixel text-white">{value}%</span>
                      </div>
                      <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          className={`h-full ${activeSpell.color.replace('text-', 'bg-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
