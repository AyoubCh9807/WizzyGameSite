import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Characters from '@/components/Characters';
import SpellPreview from '@/components/SpellPreview';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Newsletter from '@/components/Newsletter';
import ServerStatus from '@/components/ServerStatus';

import Link from 'next/link';
import { Twitter, Youtube, Twitch, MessageSquare, ExternalLink } from 'lucide-react';

const socials = [
  { name: 'Discord', icon: MessageSquare, href: 'https://discord.gg/wizzygame', color: 'hover:text-[#5865F2]' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/wizzygame', color: 'hover:text-[#1DA1F2]' },
  { name: 'Twitch', icon: Twitch, href: 'https://twitch.tv/wizzygame', color: 'hover:text-[#9146FF]' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/wizzygame', color: 'hover:text-[#FF0000]' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Characters />
      <SpellPreview />
      <Gallery />
      <News />
      <Newsletter />
      <ServerStatus />
      
      {/* Footer / CTA Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase italic mb-8 tracking-tighter">
              The Core <span className="text-blue-500 text-glow">Awaits</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-lg">
              Join the elite ranks of the Wizzy Vanguard. Pre-order now to secure exclusive core-skins and early access to the neural-link beta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <button className="w-full sm:w-auto px-12 py-6 bg-green-500 text-zinc-950 font-pixel font-bold uppercase italic tracking-tighter hover:bg-white transition-colors skew-x-[-12deg] cursor-pointer">
                <span className="skew-x-[12deg] block">Secure Your Core</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center justify-center gap-4 p-8 border border-white/5 bg-white/[0.02] transition-all duration-500 ${social.color} hover:border-current hover:bg-white/[0.05] overflow-hidden`}
                >
                  <social.icon className="w-6 h-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
                  <div className="flex flex-col items-center gap-2 transition-all duration-500 group-hover:-translate-y-1">
                    <span className="text-[10px] font-pixel font-bold uppercase tracking-[0.2em] text-center leading-none">
                      {social.name}
                    </span>
                    <div className="h-px w-0 bg-current transition-all duration-500 group-hover:w-8" />
                  </div>
                  <ExternalLink className="absolute top-4 right-4 w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </div>
            
            <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[10px] font-pixel text-zinc-600 uppercase tracking-widest">
                © 2026 OverTempo Studios // All Rights Reserved
              </p>
              <div className="flex gap-8">
                <Link href="/privacy" className="text-[10px] font-pixel text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[10px] font-pixel text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-[10px] font-pixel text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">
                  Cookie Directive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
