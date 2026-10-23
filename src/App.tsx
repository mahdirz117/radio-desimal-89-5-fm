import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { LivePlayer } from './components/LivePlayer.tsx';
import { About } from './components/About.tsx';
import { Programs } from './components/Programs.tsx';
import { DimoSection } from './components/DimoSection.tsx';
import { News } from './components/News.tsx';
import { Podcast } from './components/Podcast.tsx';
import { Coverage } from './components/Coverage.tsx';
import { Advertise } from './components/Advertise.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PROGRAMS } from './data/radioData.ts';
import { Program } from './types.ts';

export default function App() {
  const [currentProgram, setCurrentProgram] = useState<Program>(PROGRAMS[1]); // Default Malang Update

  // Determine active program based on current hour in WIB
  useEffect(() => {
    const updateActiveProgram = () => {
      const now = new Date();
      // Calculate WIB time (UTC+7)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibDate = new Date(utc + 3600000 * 7);
      const hours = wibDate.getHours();
      const minutes = wibDate.getMinutes();
      const timeNum = hours * 100 + minutes;

      const active = PROGRAMS.find((p) => {
        const [startH, startM] = p.startTime.split(':').map(Number);
        const [endH, endM] = p.endTime.split(':').map(Number);
        const startNum = startH * 100 + startM;
        const endNum = endH * 100 + endM;
        return timeNum >= startNum && timeNum < endNum;
      });

      if (active) {
        setCurrentProgram(active);
      } else {
        // Fallback for late night / early morning before 05:00
        setCurrentProgram(PROGRAMS[0]);
      }
    };

    updateActiveProgram();
    const interval = setInterval(updateActiveProgram, 60000);
    return () => clearInterval(interval);
  }, []);

  const handlePlaySpecificProgram = (program: Program) => {
    setCurrentProgram(program);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero currentProgram={currentProgram} />

        <LivePlayer currentProgram={currentProgram} />

        {/* Tentang Desimal & Timeline Sejarah & Kenapa Desimal */}
        <About />

        {/* Program Siaran Desimal */}
        <Programs
          currentProgramId={currentProgram.id}
          onPlayProgram={handlePlaySpecificProgram}
        />

        {/* Kabar Desimal (News & Articles) */}
        <News />

        {/* Desimal Podcast */}
        <Podcast />

        {/* Kenalan dengan DIMO (Official Mascot) */}
        <DimoSection />

        {/* Suara Desimal Menjangkau Malang Raya (Coverage) */}
        <Coverage />

        {/* Iklan & Kerja Sama (Advertising) */}
        <Advertise />

        {/* Kontak Studio & Kolaborasi */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
