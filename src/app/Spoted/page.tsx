'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    default: '/Rectangle 69 (5).png',
    reveal: '/Section ⏵ Link.png',
  },
  {
    default: '/Rectangle 68 (3).png',
    reveal: '/Rectangle 65.png',
  },
  {
    default: '/Rectangle 67.png',
    reveal: '/Component 15.png',
  },
  {
    default: '/image 1 (2).png',
    reveal: '/Component 13.png',
  },
];

export default function SpotedPage() {
  const [revealed, setRevealed] = useState([false, false, false, false]);

  const handleReveal = (idx: number) => {
    setRevealed((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-8 px-2 overflow-hidden">
      {/* Aesthetic blurred radial gradient background */}
      <div className="pointer-events-none select-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#A29875]/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e0cba8]/40 rounded-full blur-2xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#f5e9d6]/60 via-[#e0cba8]/40 to-[#A29875]/30 rounded-full blur-3xl opacity-50" />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#A29875] mb-8 text-center drop-shadow-lg tracking-tight">Spotted on</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-2xl aspect-square">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <div onClick={() => handleReveal(idx)} className="absolute inset-0 z-10">
              <AnimatePresence initial={false}>
                {!revealed[idx] ? (
                  <motion.div
                    key="default"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={img.default}
                      alt={`Default ${idx + 1}`}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="reveal"
                    initial={{ opacity: 0, scale: 1.08, y: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={img.reveal}
                      alt={`Revealed ${idx + 1}`}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Stylish overlay for 3D effect */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
