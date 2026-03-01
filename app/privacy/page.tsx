'use client';

import { motion } from 'motion/react';
import { Shield, ArrowLeft, Terminal, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Neural Signature Data',
      icon: Lock,
      content: 'We collect your neural signature (email address) only when you voluntarily synchronize with the Vanguard. This data is encrypted using core-level protocols and is never shared with third-party factions.'
    },
    {
      title: 'Operational Analytics',
      icon: Eye,
      content: 'To optimize the neural-link stability, we monitor anonymized gameplay metrics. This includes spell-cast frequencies, core-interaction times, and spatial repositioning patterns.'
    },
    {
      title: 'Cookie Directives',
      icon: Terminal,
      content: 'Our system uses essential cookies to maintain your session integrity. These are temporary data packets that expire once your connection to the Core is terminated.'
    },
    {
      title: 'Data Sovereignty',
      icon: Shield,
      content: 'You retain full sovereignty over your data. At any time, you may request a full purge of your neural records from our central database.'
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
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-pixel font-bold uppercase tracking-widest text-blue-500 block mb-2">Security Protocol // v2.0</span>
              <h1 className="font-display text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Privacy <span className="text-white">Directives</span>
              </h1>
            </div>
          </div>

          <p className="text-xl text-zinc-400 mb-16 leading-relaxed max-w-2xl italic">
            At OverTempo Studios, we prioritize the integrity of your neural data. These directives outline how we protect your signature while you interface with the Core.
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
            <div className="absolute top-0 right-0 p-4">
              <FileText className="w-12 h-12 text-blue-500/20" />
            </div>
            <h3 className="font-pixel text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Full Legal Disclosure</h3>
            <div className="space-y-6 text-zinc-500 text-xs leading-relaxed font-sans">
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from OverTempo (the “Site”).
              </p>
              <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
              </p>
              <p>
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
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
