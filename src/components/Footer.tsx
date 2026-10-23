import React from 'react';
import { Radio, Heart, ArrowUp } from 'lucide-react';
import { STATION_INFO } from '../data/radioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNav = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Program', href: '#program' },
    { label: 'Berita', href: '#berita' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'DIMO', href: '#dimo' },
    { label: 'Iklan & Kerja Sama', href: '#iklan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/90 pt-16 pb-28 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Logo & Tagline with Official Asset */}
          <div className="space-y-3">
            <div className="h-12 px-3 py-1 bg-white rounded-xl shadow-md inline-flex items-center">
              <div className="h-8 w-36 relative overflow-hidden flex items-end">
                <img
                  src="/assets/aistudio/Logo_Desimal_1c1c7345.png"
                  alt="Logo Resmi Desimal 89.5 FM"
                  className="w-full h-[320%] object-cover object-bottom"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Radio siaran swasta Malang Raya berakar sejarah sejak 1971. Menghadirkan informasi, inspirasi, edukasi, dan hiburan yang mempererat kehangatan keluarga.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-300">
            {footerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-amber-400 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-medium text-slate-300">
              © 2026 Desimal 89,5 FM. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              {STATION_INFO.legalEntity} · Anggota PRSSNI sejak {STATION_INFO.prssniSince} · Jl. Ahmad Yani No. 5 Malang
            </p>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span className="text-amber-400 font-display font-bold italic tracking-wide">
              "{STATION_INFO.secondaryTagline}"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
