import React from 'react';
import { Play, Calendar, Sparkles, Mic, Clock, MapPin } from 'lucide-react';
import { Program } from '../types.ts';

interface HeroProps {
  currentProgram: Program;
}

export const Hero: React.FC<HeroProps> = ({ currentProgram }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Studio Photography with Dark Scrim & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/radio_studio_hero_1792675005224.jpg"
          alt="Desimal 89,5 FM Broadcast Studio Malang"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          referrerPolicy="no-referrer"
        />
        {/* Navy to slate gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        {/* Ambient yellow/gold glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Branding, Typography, CTAs, Now Playing Widget (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top kicker: unboxed metadata discipline */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
                Malang, Jawa Timur
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Frekuensi 89,5 MHz FM</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Inspiratif & Ramah
              </span>
            </div>

            {/* Official Logo Badge & Headline Block */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 p-2 pr-4 bg-white rounded-2xl shadow-lg border border-white/20">
                <div className="h-8 w-32 relative overflow-hidden flex items-end">
                  <img
                    src="/assets/aistudio/Logo_Desimal_1c1c7345.png"
                    alt="Logo Resmi Desimal 89.5 FM"
                    className="w-full h-[320%] object-cover object-bottom"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-800 tracking-wide border-l border-slate-200 pl-3">
                  Radio Resmi Malang
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
                DESIMAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">89,5 FM</span>
              </h1>
              <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-blue-200 tracking-tight">
                Sahabat Inspirasimu
              </p>
            </div>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Informasi, inspirasi, edukasi, dan hiburan yang menemani setiap cerita. Menghadirkan kesejukan nilai kebajikan untuk masyarakat Malang Raya.
            </p>

            {/* Animated Audio Waveform Graphic */}
            <div className="py-2 flex items-center gap-1.5 h-8">
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mr-2">Signal Wave</span>
              {[4, 12, 22, 10, 18, 28, 14, 24, 8, 16, 26, 12, 20, 15, 7, 25, 18, 10, 22, 30, 16, 9].map((height, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-slate-700 transition-all duration-300"
                  style={{ height: `${Math.max(4, height * 0.4)}px` }}
                />
              ))}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#live-player"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-display font-bold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="tracking-wide">
                  ▶ DENGARKAN LIVE
                </span>
              </a>

              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-display font-semibold text-base border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>LIHAT PROGRAM</span>
              </a>
            </div>

            {/* Current Broadcast Information Box */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md max-w-xl">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="flex items-center gap-2 font-bold tracking-wider text-amber-400 uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  ON AIR SEKARANG
                </span>
                <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {currentProgram.time} WIB
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {currentProgram.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Penyiar: {currentProgram.host}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-medium text-slate-400 block">Kategori</span>
                  <span className="text-xs font-semibold text-blue-300">{currentProgram.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: DIMO Mascot 3D Visual with Floating Accents (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Mascot Container */}
            <div className="relative group w-full max-w-md mx-auto">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-blue-600/30 to-yellow-400/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl">
                <img
                  src="/src/assets/images/dimo_hero_mascot_1792675003351.jpg"
                  alt="DIMO Robot Maskot Resmi Radio Desimal 89,5 FM"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim gradient over bottom of image */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-amber-400 block">
                      Maskot Resmi Desimal
                    </span>
                    <h3 className="font-display font-black text-2xl text-white">
                      DIMO
                    </h3>
                    <p className="text-xs text-slate-300 italic">
                      "Ada DIMO, Ada Cerita."
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex flex-col items-center justify-center font-bold shadow-lg">
                    <span className="text-[9px] uppercase tracking-tighter">FM</span>
                    <span className="text-sm font-black -mt-1">89,5</span>
                  </div>
                </div>
              </div>

              {/* Floating feature speech badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/95 border border-amber-400/40 text-slate-100 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 max-w-[280px]">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-amber-300 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">"Dengerin, Dapetin Inspirasinya!"</p>
                  <p className="text-[10px] text-amber-400">Suara Kebaikan Malang Raya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
