import React, { useState } from 'react';
import { Sun, Radio, Coffee, Sparkles, Moon, Headphones, Disc, Play, Info, X, Clock, Users, Music, Check, MessageSquare, Image as ImageIcon, Lightbulb, Heart, Scale, CheckCircle } from 'lucide-react';
import { Program } from '../types.ts';
import { PROGRAMS, STATION_INFO, CORE_VALUES } from '../data/radioData.ts';

interface ProgramsProps {
  currentProgramId: string;
  onPlayProgram: (program: Program) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ currentProgramId, onPlayProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);
  const [showPosterModal, setShowPosterModal] = useState<boolean>(false);

  const categories = ['Semua', 'Pagi', 'Siang', 'Sore', 'Malam', 'Religi'];

  const filteredPrograms = PROGRAMS.filter((prog) => {
    if (selectedCategory === 'Semua') return true;
    if (selectedCategory === 'Religi') return prog.category === 'Religi';
    if (selectedCategory === 'Pagi') return prog.startTime >= '05:00' && prog.startTime < '10:00';
    if (selectedCategory === 'Siang') return prog.startTime >= '10:00' && prog.startTime < '15:00';
    if (selectedCategory === 'Sore') return prog.startTime >= '14:00' && prog.startTime < '19:00';
    if (selectedCategory === 'Malam') return prog.startTime >= '19:00';
    return true;
  });

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-blue-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-indigo-500" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-violet-600" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-amber-500" />;
      default:
        return <Radio className="w-5 h-5 text-blue-600" />;
    }
  };

  const getCoreValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-4 h-4 text-amber-400" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-amber-400" />;
      case 'Scale':
        return <Scale className="w-4 h-4 text-amber-400" />;
      case 'Users':
        return <Users className="w-4 h-4 text-amber-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="program" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative radio background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
              <Radio className="w-4 h-4" />
              <span>JADWAL LENGKAP SIARAN</span>
              <span aria-hidden="true">·</span>
              <span>89,5 FM MALANG</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
              Program Desimal
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Kurasi siaran sepanjang hari yang dirancang menemani setiap ritme aktivitas warga Malang Raya dengan inspirasi, musik, dan informasi hangat.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Official Schedule Poster Button */}
            <button
              onClick={() => setShowPosterModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>Lihat Infografis Jadwal Resmi</span>
            </button>

            {/* Interactive filter tabs */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Official Core Values Strip */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-bold tracking-wider">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
              NILAI UTAMA DESIMAL:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {CORE_VALUES.map((val) => (
                <div key={val.name} className="flex items-center gap-2 text-slate-200">
                  {getCoreValueIcon(val.icon)}
                  <span className="font-display font-extrabold text-white tracking-wide">
                    {val.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => {
            const isCurrentlyOnAir = prog.id === currentProgramId;
            return (
              <div
                key={prog.id}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isCurrentlyOnAir
                    ? 'bg-gradient-to-b from-slate-800/90 to-blue-950/80 border-amber-400/80 shadow-xl shadow-amber-400/10 ring-1 ring-amber-400/50'
                    : 'bg-slate-950/70 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Header: Time & Live Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-xl border border-amber-400/20">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{prog.time} WIB</span>
                    </div>

                    {isCurrentlyOnAir ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase text-red-400 bg-red-500/15 border border-red-500/30 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                        ON AIR NOW
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400 truncate max-w-[100px]">
                        {prog.target}
                      </span>
                    )}
                  </div>

                  {/* Program Icon & Name */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-amber-400/50 transition-colors">
                      {getProgramIcon(prog.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {prog.name}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                        {prog.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {prog.description}
                  </p>

                  {/* Content Highlights List */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {prog.contents.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Lihat Detail & Dengarkan */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1 py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-400" />
                    <span>Detail</span>
                  </button>

                  <button
                    onClick={() => onPlayProgram(prog)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isCurrentlyOnAir
                        ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/20'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Putar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Request Lagu & Sapa Penyiar */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Punya Lagu Favorit atau Ingin Kirim Salam?
              </h4>
              <p className="text-xs text-slate-400">
                Sampaikan request lagu dan kirim sapaan hangatmu langsung ke ruang siar Desimal 89,5 FM melalui WhatsApp <strong className="text-amber-400 font-mono">08977 895 895</strong>.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Radio%20Desimal%2089,5%20FM,%20saya%20ingin%20request%20lagu%20dan%20kirim%20salam`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shrink-0 cursor-pointer shadow-lg"
          >
            Kirim Request via WhatsApp
          </a>
        </div>
      </div>

      {/* Official Schedule Poster Modal */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-4 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                  OFFICIAL SCHEDULE INFOGRAPHIC
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  Program Siar Radio Desimal 89.5 FM
                </h3>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src="/assets/aistudio/Radio_Desimal_Programme_Schedule_ee370a1b.png"
                alt="Infografis Resmi Jadwal Siar Radio Desimal 89.5 FM"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Siaran Resmi: 89.5 MHz Malang · Streaming: desimal.co</span>
              <button
                onClick={() => setShowPosterModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
                  {getProgramIcon(activeModalProgram.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-400 block">
                    {activeModalProgram.time} WIB
                  </span>
                  <h3 className="font-display font-black text-2xl text-white">
                    {activeModalProgram.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeModalProgram.description}
            </p>

            <div className="grid grid-cols-2 gap-4 py-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Penyiar Utama
                </span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  {activeModalProgram.host}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                  Target Pendengar
                </span>
                <span className="text-sm font-bold text-amber-400 mt-0.5 block">
                  {activeModalProgram.target}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-amber-400" />
                Segmen & Muatan Konten
              </h4>
              <div className="space-y-2">
                {activeModalProgram.contents.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onPlayProgram(activeModalProgram);
                  setActiveModalProgram(null);
                }}
                className="flex-1 py-3 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Dengarkan Siaran Ini</span>
              </button>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
