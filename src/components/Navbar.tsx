import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STATION_INFO } from '../data/radioData.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'TENTANG', href: '#tentang' },
    { label: 'PROGRAM', href: '#program' },
    { label: 'BERITA', href: '#berita' },
    { label: 'PODCAST', href: '#podcast' },
    { label: 'DIMO', href: '#dimo' },
    { label: 'IKLAN & KERJA SAMA', href: '#iklan' },
    { label: 'KONTAK', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Logo with Official Desimal Logo Asset */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
            aria-label="Desimal 89,5 FM Home"
          >
            <div className="h-11 px-3 py-1 bg-white rounded-xl shadow-md border border-slate-200/50 flex items-center justify-center">
              <div className="h-8 w-32 relative overflow-hidden flex items-end">
                <img
                  src="/assets/aistudio/Logo_Desimal_1c1c7345.png"
                  alt="Logo Resmi Desimal 89.5 FM"
                  className="w-full h-[320%] object-cover object-bottom"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-400 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#live-player"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer bg-red-600 text-white hover:bg-red-500"
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="whitespace-nowrap uppercase tracking-wider">
                🔴 Dengarkan Live
              </span>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <a
              href="#live-player"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>🔴</span>
              <span>DENGARKAN LIVE STREAMING 89,5 FM</span>
            </a>
            <div className="mt-2 text-center text-[11px] text-slate-400">
              {STATION_INFO.secondaryTagline}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
