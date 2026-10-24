import React, { useState } from 'react';
import { Newspaper, Sparkles, BookOpen, HeartHandshake, Users, Music2, ArrowRight, CheckCircle2 } from 'lucide-react';
import dimoCommunityMicrophone from '../assets/images/dimo_community_microphone_1792675005789.jpg';
import { TIMELINE_HISTORY, WHY_DESIMAL } from '../data/radioData.ts';

export const About: React.FC = () => {
  const [activeTimelineStep, setActiveTimelineStep] = useState(2); // default to 8 September 2025

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Newspaper':
        return <Newspaper className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'Music2':
        return <Music2 className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-50/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-amber-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700">
            <span>TENTANG DESIMAL</span>
            <span aria-hidden="true">·</span>
            <span>RADIO MALANG 89,5 FM</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 text-balance">
            Lebih dari Sekadar Radio
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            <strong className="font-semibold text-slate-900">Desimal 89,5 FM</strong> hadir dari Malang dengan semangat menyebarkan informasi, edukasi, inspirasi, dan hiburan positif melalui media radio.
          </p>
        </div>

        {/* Narrative & History Intro */}
        <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Nilai & Semangat Penyiaran
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Membawa Nilai Islam yang Ramah & Menghubungkan Masyarakat
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Desimal berangkat dari semangat menghadirkan media yang membawa nilai-nilai Islam yang ramah serta informasi positif kepada masyarakat. Kami percaya bahwa gelombang radio bukan sekadar transmisi suara, melainkan jembatan kebaikan yang menyatukan seluruh elemen keluarga, komunitas, dan generasi muda di Malang Raya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Inklusif & Merangkul Semua</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Ramah Generasi Muda & Keluarga</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">Dukungan Nyata Komunitas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-amber-400 flex items-center justify-center font-display font-black text-2xl mb-3 shadow-md">
                89,5
              </div>
              <h4 className="font-display font-bold text-slate-900 text-lg">
                PT Radio Chakra Bhuwana
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Anggota resmi PRSSNI sejak 1971 · Menjangkau Kota Malang, Kota Batu, dan Kabupaten Malang
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Timeline with DIMO mascot moving along the milestones */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              JEJAK SEJARAH PERJALANAN
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Dari Chakra Bhuwana Hingga Desimal 89,5 FM
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Klik milestone untuk melihat bagaimana DIMO menemani setiap fase perjalanan stasiun radio kebanggaan Malang ini.
            </p>
          </div>

          {/* Timeline Navigation Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {TIMELINE_HISTORY.map((step, index) => {
              const isSelected = activeTimelineStep === index;
              return (
                <div
                  key={step.year}
                  onClick={() => setActiveTimelineStep(index)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 text-white border-amber-400 shadow-xl ring-2 ring-amber-400/30'
                      : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display font-extrabold text-2xl tracking-tight ${
                        isSelected ? 'text-amber-400' : 'text-blue-700'
                      }`}
                    >
                      {step.year}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${
                        isSelected
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h4
                    className={`font-display font-bold text-lg mb-2 ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h4>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/30 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? 'text-amber-300' : 'text-blue-600'}>
                      {step.highlight}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* DIMO Walking Guide Card */}
          <div className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white border border-blue-800 shadow-lg flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-slate-900/80 border border-amber-400/50 p-1 shrink-0 overflow-hidden shadow">
              <img
                src={dimoCommunityMicrophone}
                alt="DIMO Menemani Perjalanan Sejarah"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  DIMO Walking Guide
                </span>
                <span className="text-slate-400 text-xs">· Fase {activeTimelineStep + 1} dari 3</span>
              </div>
              <p className="font-display font-bold text-lg text-white">
                {activeTimelineStep === 0 && '1971 — Berakar dari Radio Chakra Bhuwana Malang, mengudara dengan jiwa kebersamaan.'}
                {activeTimelineStep === 1 && '15 Januari 2025 — Langkah pembaharuan manajemen untuk mewadahi aspirasi zaman digital.'}
                {activeTimelineStep === 2 && '8 September 2025 — Lahir kembali sebagai Desimal 89,5 FM, Sahabat Inspirasimu bersama DIMO!'}
              </p>
              <p className="text-xs text-blue-200 italic">
                "Setiap gelombang punya cerita. Desimal menjaga nilai masa lalu untuk membangun masa depan yang cerah."
              </p>
            </div>
          </div>
        </div>

        {/* Section: "Kenapa Desimal?" - 6 Feature Cards */}
        <div className="mt-24">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              NILAI UNGGULAN
            </span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              Kenapa Memilih Desimal 89,5 FM?
            </h3>
            <p className="text-sm text-slate-600">
              Enam pilar utama yang menjadikan Desimal sahabat terpercaya bagi masyarakat Malang Raya setiap saat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_DESIMAL.map((feature) => (
              <div
                key={feature.id}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-amber-50 border border-slate-200 group-hover:border-amber-400/40 flex items-center justify-center mb-6 transition-colors shadow-sm">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    {feature.subtitle}
                  </span>
                  <h4 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-800 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-700 group-hover:text-amber-600 transition-colors">
                  <span>Selaras dengan Semangat Malang</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
