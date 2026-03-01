'use client';

import { motion } from 'motion/react';
import { Scale, ArrowLeft, Terminal, ShieldAlert, Gavel, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const sections = [
    {
      title: 'Neural-Link Usage',
      icon: Terminal,
      content: 'By accessing the OverTempo Core, you agree to maintain the integrity of the neural-link. Any attempt to bypass security protocols or exploit core-vulnerabilities will result in immediate termination of your access.'
    },
    {
      title: 'Vanguard Conduct',
      icon: ShieldAlert,
      content: 'Operatives must maintain professional conduct within the multiplayer arena. Harassment, unauthorized data-mining, or disruptive behavior towards other wizards is strictly prohibited.'
    },
    {
      title: 'Virtual Assets',
      icon: FileCheck,
      content: 'All core-skins, spells, and virtual rewards remain the property of OverTempo Studios. Users are granted a non-transferable license to utilize these assets within the operational environment.'
    },
    {
      title: 'Termination Protocol',
      icon: Gavel,
      content: 'OverTempo Studios reserves the right to terminate any neural-link connection at its sole discretion, especially in cases of protocol violation or security breaches.'
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
              <Scale className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-pixel font-bold uppercase tracking-widest text-blue-500 block mb-2">Vanguard Protocols // v1.4</span>
              <h1 className="font-display text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Terms of <span className="text-white">Service</span>
              </h1>
            </div>
          </div>

          <p className="text-xl text-zinc-400 mb-16 leading-relaxed max-w-2xl italic">
            These protocols govern your interaction with the OverTempo environment. By synchronizing with the Core, you accept these operational directives.
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
            <h3 className="font-pixel text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Operational Agreement</h3>
            <div className="space-y-6 text-zinc-500 text-xs leading-relaxed font-sans">
              <p>
                Welcome to OverTempo. These Terms of Service (“Terms”) govern your access to and use of our website, games, and services.
              </p>
              <p>
                By using our Services, you agree to be bound by these Terms. If you don’t agree to these Terms, do not use the Services. If you are using the Services on behalf of an organization (like your employer), you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms. In that case, “you” and “your” will refer to that organization.
              </p>
              <p>
                We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.
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
