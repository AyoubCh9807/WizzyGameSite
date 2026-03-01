'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const characters = [
  {
    name: 'Volt-X',
    role: 'Kinetic Specialist',
    image: 'https://picsum.photos/seed/volt/600/800',
    bio: 'A master of electrical manipulation, Volt-X thrives in the eye of the storm.',
    stats: { speed: 95, power: 70, tech: 85 }
  },
  {
    name: 'Cypher',
    role: 'Void Weaver',
    image: 'https://picsum.photos/seed/cypher/600/800',
    bio: 'Utilizing forbidden core tech, Cypher bends reality to trap opponents.',
    stats: { speed: 75, power: 90, tech: 95 }
  },
  {
    name: 'Nova',
    role: 'Heavy Artillery',
    image: 'https://picsum.photos/seed/nova/600/800',
    bio: 'When diplomacy fails, Nova brings the heat with concentrated core blasts.',
    stats: { speed: 60, power: 100, tech: 65 }
  }
];

export default function Characters() {
  return (
    <section id="characters" className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
              The <span className="text-green-400">Vanguard</span>
            </h2>
            <p className="text-zinc-400 max-w-md">Select your operative. Each wizard is calibrated for specific core-interaction protocols.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-green-400" />
            <div className="w-4 h-1 bg-zinc-700" />
            <div className="w-4 h-1 bg-zinc-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {characters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[10px] font-pixel font-bold uppercase tracking-[0.2em] text-green-400 mb-2 block">{char.role}</span>
                  <h3 className="font-pixel text-2xl font-bold uppercase italic mb-4">{char.name}</h3>
                  
                  <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Object.entries(char.stats).map(([label, value]) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className="text-[10px] font-pixel font-bold uppercase w-12 text-zinc-500">{label}</span>
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            className="h-full bg-green-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 border-l-2 border-zinc-800 group-hover:border-green-400 transition-colors">
                <p className="text-sm text-zinc-400 italic leading-relaxed">&quot;{char.bio}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
