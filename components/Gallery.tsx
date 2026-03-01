'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Maximize2, Camera } from 'lucide-react';

const images = [
  { src: 'https://picsum.photos/seed/wizzy1/1200/800', title: 'The Core Chamber' },
  { src: 'https://picsum.photos/seed/wizzy2/1200/800', title: 'Neon District Duel' },
  { src: 'https://picsum.photos/seed/wizzy3/1200/800', title: 'Neural Link Interface' },
  { src: 'https://picsum.photos/seed/wizzy4/1200/800', title: 'Vanguard Training Grounds' },
  { src: 'https://picsum.photos/seed/wizzy5/1200/800', title: 'Void Rift Anomaly' },
  { src: 'https://picsum.photos/seed/wizzy6/1200/800', title: 'Kinetic Shielding Test' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-600/10 border border-blue-500/20">
            <Camera className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <span className="text-[10px] font-pixel uppercase tracking-widest text-blue-500 block">Classified Transmissions</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">Visual <span className="text-white italic">Intel</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video overflow-hidden border border-white/5 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-pixel uppercase text-blue-400 mb-1 block">Transmission #{index + 104}</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">{img.title}</h3>
              </div>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
