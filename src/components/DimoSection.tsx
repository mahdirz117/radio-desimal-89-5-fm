import React, { useState } from 'react';
import { Sparkles, MessageCircle, Mic2, GraduationCap, HeartHandshake, Activity, Store, HandHeart, Music, Newspaper, Volume2, Image as ImageIcon, X, Mic, Headphones, Palette, Heart, CheckCircle2 } from 'lucide-react';
import { DIMO_ROLES, DIMO_GUIDE, STATION_INFO } from '../data/radioData.ts';
import { DimoRole } from '../types.ts';

export const DimoSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<DimoRole>(DIMO_ROLES[0]);
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);
  const [showMascotGuideModal, setShowMascotGuideModal] = useState(false);

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mic2':
        return <Mic2 className="w-5 h-5 text-amber-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-500" />;
      case 'Store':
        return <Store className="w-5 h-5 text-amber-600" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-cyan-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-violet-600" />;
      case 'Newspaper':
        return <Newspaper className="w-5 h-5 text-blue-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  const handleSimulateVoice = (speechText: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = 'id-ID';
      utterance.pitch = 1.35; // friendly robot pitch
      utterance.rate = 1.05;
      utterance.onstart = () => setIsPlayingSpeech(true);
      utterance.onend = () => setIsPlayingSpeech(false);
      utterance.onerror = () => setIsPlayingSpeech(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingSpeech(true);
      setTimeout(() => setIsPlayingSpeech(false), 3000);
    }
  };

  return (
    <section id="dimo" className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>PANDUAN MASKOT RESMI DESIMAL</span>
            <span aria-hidden="true">·</span>
            <span>RADIO 89,5 FM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            DiMO — Si Sahabat Desimal
          </h2>
          <p className="font-display font-bold text-xl sm:text-2xl text-amber-600">
            "{DIMO_GUIDE.slogan}"
          </p>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {DIMO_GUIDE.description}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowMascotGuideModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>Buka Panduan Maskot Resmi (Character Sheet)</span>
            </button>
          </div>
        </div>

        {/* Official Mascot Identity Cards (4 Key Elements) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">Bentuk Mic</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Melambangkan suara, komunikasi & inspirasi yang dekat dengan warga.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">Headphone</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Melambangkan mendengarkan dan memahami setiap cerita Sahabat Desimal.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">Biru & Kuning</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Identitas resmi warna Radio Desimal: ramah, modern, dan hangat.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">Karakter Positif</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Selalu positif, santun, ramah, dan merangkul semua generasi.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Main Spotlight & Mascot Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Official Mascot Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-slate-950 p-3 shadow-2xl border-4 border-amber-400/40 group">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 relative">
                <img
                  src={STATION_INFO.assets.mascotGuide}
                  alt="Panduan Resmi Maskot DIMO Radio Desimal 89,5 FM"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Maskot Resmi Desimal
                    </span>
                    <h4 className="font-display font-black text-xl">DiMO si Sahabat Desimal</h4>
                  </div>
                  <button
                    onClick={() => setShowMascotGuideModal(true)}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Buka Poster
                  </button>
                </div>
              </div>

              {/* Floating voice callout */}
              <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-xl text-xs font-extrabold shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Ada DIMO, Ada Cerita. 😊</span>
              </div>
            </div>
          </div>

          {/* Right: Active Role Interactive Speech Bubble & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300/60 flex items-center justify-center">
                    {getRoleIcon(selectedRole.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      {selectedRole.badge}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900">
                      DIMO di Bidang {selectedRole.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => handleSimulateVoice(selectedRole.speech)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isPlayingSpeech
                      ? 'bg-amber-400 text-slate-950 animate-pulse'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  aria-label="Dengarkan suara DIMO"
                >
                  <Volume2 className="w-4 h-4 text-blue-700" />
                  <span>{isPlayingSpeech ? 'DIMO Berbicara...' : 'Dengar Suara DIMO'}</span>
                </button>
              </div>

              {/* Speech Bubble from DIMO */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white relative mb-4 shadow-inner">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base italic font-medium leading-relaxed text-amber-200">
                    {selectedRole.speech}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {selectedRole.description}
              </p>

              {/* 6 Official Pillars Bar */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  DIMO Selalu Ada Untuk:
                </span>
                <div className="flex flex-wrap gap-2">
                  {DIMO_GUIDE.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIMO dalam Berbagai Aksi Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-extrabold text-xl text-slate-900">
              DIMO Dalam Berbagai Aksi
            </h3>
            <span className="text-xs text-slate-500">Klik aksi untuk berinteraksi dengan DIMO</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {DIMO_ROLES.map((role) => {
              const isSelected = selectedRole.id === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${
                    isSelected
                      ? 'bg-slate-900 text-white border-amber-400 shadow-lg scale-102 ring-2 ring-amber-400/40'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200/90 shadow-sm'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                      isSelected
                        ? 'bg-amber-400/20 border border-amber-400/40'
                        : 'bg-slate-100 group-hover:bg-amber-50 border border-slate-200'
                    }`}
                  >
                    {getRoleIcon(role.icon)}
                  </div>
                  <h4
                    className={`font-display font-bold text-sm mb-1 ${
                      isSelected ? 'text-amber-300' : 'text-slate-900 group-hover:text-blue-700'
                    }`}
                  >
                    {role.title}
                  </h4>
                  <p
                    className={`text-[10px] leading-tight line-clamp-2 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {role.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Official Mascot Guide Modal */}
      {showMascotGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-4 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                  OFFICIAL MASCOT GUIDE
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  DiMO — Si Sahabat Desimal
                </h3>
              </div>
              <button
                onClick={() => setShowMascotGuideModal(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={STATION_INFO.assets.mascotGuide}
                alt="Lembar Panduan Karakter Maskot DIMO Resmi"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span className="italic">"Ada DIMO, ada cerita. 😊" — Radio Desimal 89,5 FM</span>
              <button
                onClick={() => setShowMascotGuideModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors cursor-pointer"
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
