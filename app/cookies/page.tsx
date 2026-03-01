'use client';

import { motion } from 'motion/react';
import { Cookie, ArrowLeft, Terminal, Database, ShieldCheck, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function CookieDirective() {
  const sections = [
    {
      title: 'Essential Packets',
      icon: Database,
      content: 'These temporary data packets are strictly necessary for the Core to recognize your neural-link. Without them, the Site cannot maintain your session or security protocols.'
    },
    {
      title: 'Performance Logs',
      icon: Terminal,
      content: 'We utilize performance cookies to monitor how wizards interact with the Vanguard. This data allows us to optimize the neural-link speed and reduce latency anomalies.'
    },
    {
      title: 'Preference Storage',
      icon: ShieldCheck,
      content: 'These cookies remember your system preferences, such as your preferred role and UI settings, so you don’t have to recalibrate every time you synchronize.'
    },
    {
      title: 'Third-Party Factions',
      icon: EyeOff,
      content: 'OverTempo does not allow third-party tracking factions to inject cookies into your neural-link. Your data remains isolated within our secure environment.'
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-pixel font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-400 transition-colors mb-16 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Core
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-blue-600/10 border border-blue-500/20">
              <Cookie className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-pixel font-bold uppercase tracking-widest text-blue-500 block mb-2">Data Packet Directive // v1.0</span>
              <h1 className="font-display text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Cookie <span className="text-white">Directives</span>
              </h1>
            </div>
          </div>

          <p className="text-xl text-zinc-400 mb-16 leading-relaxed max-w-2xl italic">
            OverTempo uses small data packets called cookies to enhance your neural-link experience. These directives explain how we utilize them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-white/5 bg-white/[0.02] relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <section.icon className="w-8 h-8 text-blue-500 mb-6" />
                <h2 className="font-pixel text-lg font-bold uppercase tracking-tight mb-4 text-white">
                  {section.title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-12 border border-blue-500/20 bg-blue-600/5 relative overflow-hidden">
            <h3 className="font-pixel text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Packet Management</h3>
            <div className="space-y-6 text-zinc-500 text-xs leading-relaxed font-sans">
              <p>
                Most browsers allow you to control cookies through their settings, which may be adapted to reflect your consent to the use of cookies. Further, most browsers also enable you to review and erase cookies, including OverTempo cookies.
              </p>
              <p>
                Please note that if you choose to disable cookies, some parts of our Site may not function properly or as intended. For more information about cookies, including how to see what cookies have been set and how to manage and delete them, visit allaboutcookies.org.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="container mx-auto px-6 py-12 border-t border-white/5 flex justify-between items-center opacity-30">
        <span className="font-pixel text-[10px] font-bold uppercase tracking-widest">OverTempo // Legal Dept</span>
        <span className="font-pixel text-[10px] font-bold uppercase tracking-widest">Est. 2026</span>
      </div>
    </main>
  );
}
