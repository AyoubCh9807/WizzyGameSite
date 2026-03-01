'use client';

import { motion } from 'motion/react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const newsItems = [
  {
    date: '2026-03-01',
    category: 'Event',
    title: 'Core Overload: Double XP Weekend',
    description: 'The central energy core is reaching critical levels. Harness the excess power for 2x progression across all multiplayer modes.',
    status: 'Active'
  },
  {
    date: '2026-02-28',
    category: 'Update',
    title: 'Patch 1.0.4: Neural-Link Stability',
    description: 'Improved synchronization for high-latency connections. Cypher\'s "Void Rift" ability has been recalibrated for competitive balance.',
    status: 'Deployed'
  },
  {
    date: '2026-02-25',
    category: 'Community',
    title: 'Vanguard Tournament Series',
    description: 'Registration is now open for the first official OverTempo global tournament. Compete for the "Core Master" title and exclusive rewards.',
    status: 'Upcoming'
  }
];

export default function News() {
  return (
    <section id="intel" className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-pixel uppercase tracking-widest text-blue-500">Live Intel Feed</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Current <span className="text-white italic">Events</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[10px] font-pixel uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group">
            View All Archives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-[180px_1fr_120px] items-center gap-6 p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-pointer relative"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              
              <div className="flex flex-col">
                <span className="text-[10px] font-pixel text-zinc-500 mb-1">{item.date}</span>
                <span className="text-[10px] font-pixel text-blue-500 uppercase tracking-tighter">{item.category}</span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl line-clamp-1 md:line-clamp-none">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end">
                <span className={`text-[10px] font-pixel px-3 py-1 border ${
                  item.status === 'Active' ? 'border-green-500/50 text-green-400' : 
                  item.status === 'Deployed' ? 'border-zinc-700 text-zinc-500' : 
                  'border-yellow-500/50 text-yellow-400'
                }`}>
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-4 border border-white/10 text-[10px] font-pixel uppercase tracking-widest text-zinc-400">
          View All Archives
        </button>
      </div>
    </section>
  );
}
