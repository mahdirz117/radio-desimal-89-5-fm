import React, { useState } from 'react';
import { Radio, MapPin, Signal, Wifi, Zap, Users, Compass } from 'lucide-react';
import { STATION_INFO } from '../data/radioData.ts';

export const Coverage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>('Kota Malang');

  const regions = [
    {
      name: 'Kota Malang',
      type: 'Pusat Studio & Pemancar',
      description: 'Cakupan prima di seluruh 5 kecamatan (Klojen, Lowokwaru, Blimbing, Sukun, Kedungkandang) dengan sinyal jernih tanpa interferensi.',
      residents: '~870.000 Jiwa',
      strength: '100% Signal Full HD',
      coordinates: '7.9797° S, 112.6304° E',
    },
    {
      name: 'Kota Batu',
      type: 'Kawasan Wisata & Pegunungan',
      description: 'Menjangkau sentra wisata, perhotelan, agrowisata, dan pemukiman lereng Gunung Panderman dengan penerimaan gelombang stabil.',
      residents: '~215.000 Jiwa',
      strength: '95% Signal Strong',
      coordinates: '7.8712° S, 112.5273° E',
    },
    {
      name: 'Kabupaten Malang',
      type: 'Wilayah Agropolitan & Pesisir',
      description: 'Melayani 33 kecamatan dari kawasan utara Lawang/Singosari, Kepanjen sentra pemerintahan, hingga Malang Selatan dan Dampit.',
      residents: '~2.650.000 Jiwa',
      strength: '90% Signal Broad Coverage',
      coordinates: '8.1670° S, 112.5700° E',
    },
  ];

  const selectedData = regions.find((r) => r.name === activeRegion) || regions[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700">
            <Signal className="w-4 h-4 text-amber-500" />
            <span>WILAYAH SIARAN & JANGKAUAN</span>
            <span aria-hidden="true">·</span>
            <span>89,5 MHZ FM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Suara Desimal Menjangkau Malang Raya
          </h2>
          <p className="font-display font-bold text-xl text-amber-600">
            "Dari Malang, menemani lebih banyak cerita."
          </p>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Dipancarkan dari Jl. Ahmad Yani No. 5 Malang dengan pemancar modern berkekuatan optimal, gelombang Desimal 89,5 FM hadir jernih menemani aktivitas rumah, kendaraan, dan ruang usaha di seluruh Malang Raya.
          </p>
        </div>

        {/* Coverage Interactive Visualization Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Modern Vector Radar / Wave Map Visual (7 cols) */}
          <div className="lg:col-span-7 relative bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl overflow-hidden min-h-[420px] flex items-center justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:28px_28px]" />

            {/* Radar Concentric Circles (Simulating Radio Transmission Waves) */}
            <div className="absolute w-[460px] h-[460px] rounded-full border border-blue-500/15 pointer-events-none" />
            <div className="absolute w-[340px] h-[340px] rounded-full border border-blue-500/20 pointer-events-none" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-amber-400/25 pointer-events-none" />

            {/* Animated Radiating Pulse Waves */}
            <div className="absolute w-28 h-28 rounded-full border-2 border-amber-400/80 animate-radio-wave-1 pointer-events-none" />
            <div className="absolute w-28 h-28 rounded-full border-2 border-blue-400/60 animate-radio-wave-2 pointer-events-none" />
            <div className="absolute w-28 h-28 rounded-full border-2 border-amber-300/40 animate-radio-wave-3 pointer-events-none" />

            {/* Center: Desimal Studio Tower Point */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/30 ring-4 ring-slate-900 border-2 border-white cursor-pointer group">
                <Radio className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="mt-2 px-3 py-1 bg-slate-900/90 border border-amber-400/50 rounded-xl text-center shadow-md">
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  STUDIO TRANSMISI
                </span>
                <span className="text-xs font-bold text-white">Desimal 89,5 FM</span>
              </div>
            </div>

            {/* Node 1: Kota Malang */}
            <button
              onClick={() => setActiveRegion('Kota Malang')}
              className={`absolute top-16 right-16 sm:right-24 z-20 px-3.5 py-2 rounded-2xl border transition-all text-left cursor-pointer ${
                activeRegion === 'Kota Malang'
                  ? 'bg-blue-600 text-white border-amber-400 shadow-lg ring-2 ring-amber-400/40'
                  : 'bg-slate-900/85 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Kota Malang</span>
              </div>
              <span className="text-[10px] text-slate-300 block">Zona Inti Penyiaran</span>
            </button>

            {/* Node 2: Kota Batu */}
            <button
              onClick={() => setActiveRegion('Kota Batu')}
              className={`absolute top-20 left-10 sm:left-16 z-20 px-3.5 py-2 rounded-2xl border transition-all text-left cursor-pointer ${
                activeRegion === 'Kota Batu'
                  ? 'bg-blue-600 text-white border-amber-400 shadow-lg ring-2 ring-amber-400/40'
                  : 'bg-slate-900/85 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Kota Batu</span>
              </div>
              <span className="text-[10px] text-slate-300 block">Lereng Panderman</span>
            </button>

            {/* Node 3: Kabupaten Malang */}
            <button
              onClick={() => setActiveRegion('Kabupaten Malang')}
              className={`absolute bottom-12 right-12 sm:right-20 z-20 px-3.5 py-2 rounded-2xl border transition-all text-left cursor-pointer ${
                activeRegion === 'Kabupaten Malang'
                  ? 'bg-blue-600 text-white border-amber-400 shadow-lg ring-2 ring-amber-400/40'
                  : 'bg-slate-900/85 hover:bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Kab. Malang</span>
              </div>
              <span className="text-[10px] text-slate-300 block">Kepanjen & 33 Kecamatan</span>
            </button>
          </div>

          {/* Right: Technical Details & Coverage Statistics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                DETAIL WILAYAH TERPILIH
              </span>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                {selectedData.name}
              </h3>
              <p className="text-xs font-semibold text-amber-600 mt-0.5 mb-3">
                {selectedData.type}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedData.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Estimasi Penduduk
                  </span>
                  <span className="text-sm font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    {selectedData.residents}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Kekuatan Sinyal
                  </span>
                  <span className="text-sm font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <Signal className="w-3.5 h-3.5 text-emerald-500" />
                    {selectedData.strength}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Specifications Bar */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800">
              <h4 className="font-display font-bold text-base text-amber-400 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Spesifikasi Transmisi Broadcast
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Frekuensi Resmi:</span>
                  <span className="font-mono font-bold text-white">89.5 MHz FM</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Lokasi Studio:</span>
                  <span className="font-semibold text-white">Jl. Ahmad Yani No. 5 Malang</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Radius Jangkauan:</span>
                  <span className="font-semibold text-amber-400">&gt; 45 KM Malang Raya</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Live Streaming Global:</span>
                  <span className="font-semibold text-emerald-400">Tersedia 24/7 (Caster.fm HD)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
