'use client';

import { motion } from 'motion/react';
import { Zap, Shield, Cpu, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'High-Velocity Combat',
    description: 'Blink-and-you-miss-it magical duels where every millisecond counts.',
    color: 'text-yellow-400'
  },
  {
    icon: Users,
    title: 'Multiplayer Chaos',
    description: '8-player arena battles with seamless low-latency netcode.',
    color: 'text-cyan-400'
  },
  {
    icon: Cpu,
    title: 'Core Synergy',
    description: 'Harness the central energy core to amplify your spells and dominate.',
    color: 'text-violet-400'
  },
  {
    icon: Shield,
    title: 'Tactical Defense',
    description: 'Master the art of kinetic shielding and spell redirection.',
    color: 'text-rose-400'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            System <span className="text-blue-500 italic">Capabilities</span>
          </h2>
          <div className="h-1 w-24 bg-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-blue-500 transition-all duration-300" />
              <feature.icon className={`w-12 h-12 mb-6 ${feature.color}`} />
              <h3 className="font-pixel text-lg font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
