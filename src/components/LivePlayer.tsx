import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Radio, Share2 } from 'lucide-react';
import { Program } from '../types.ts';
import { STATION_INFO } from '../data/radioData.ts';

interface LivePlayerProps {
  currentProgram: Program;
}

export const LivePlayer: React.FC<LivePlayerProps> = ({ currentProgram }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [widgetLoadError, setWidgetLoadError] = useState(false);
  const embedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedContainerRef.current) return;

    const scriptUrl = 'https://cdn.cloud.caster.fm/widgets/embed.js';
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.onerror = () => setWidgetLoadError(true);
    document.body.appendChild(script);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Desimal 89,5 FM — Sahabat Inspirasimu',
      text: `Sedang mendengarkan siaran live Desimal 89,5 FM Malang: ${currentProgram.name}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Gagal membagikan siaran:', error);
        }
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Gagal menyalin tautan siaran:', error);
    }
  };

  return (
    <section id="live-player" className="scroll-mt-24 bg-slate-950 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Radio className="w-4 h-4" />
              Siaran langsung
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl">
              Dengarkan Desimal 89,5 FM
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Putar siaran langsung melalui player resmi Caster.fm. Setelah diputar, Anda tetap dapat menjelajahi seluruh halaman ini.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Program saat ini
              </p>
              <h3 className="mt-1 font-display font-bold text-xl">{currentProgram.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {currentProgram.host} · {currentProgram.time} WIB
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked((liked) => !liked)}
                className={`p-2.5 rounded-xl border transition-colors ${
                  isLiked
                    ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                }`}
                aria-label="Suka siaran ini"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Bagikan siaran"
              >
                <Share2 className="w-4 h-4" />
              </button>
              {copied && <span className="text-xs text-amber-400">Link tersalin!</span>}
              <a
                href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Radio%20Desimal%2089,5%20FM,%20saya%20sedang%20mendengarkan%20siaran%20${encodeURIComponent(currentProgram.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 p-2.5 rounded-xl bg-emerald-700/30 border border-emerald-600/50 text-emerald-400 hover:bg-emerald-700/50 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span className="font-bold">Caster.fm Official Streaming Player</span>
              <span className="text-rose-600 font-mono text-xs">89,5 FM</span>
            </div>
            <div
              ref={embedContainerRef}
              className="caster-embed-wrapper flex min-h-[280px] items-center justify-center py-3"
              dangerouslySetInnerHTML={{
                __html: `<div data-type="newStreamPlayer" data-publicToken="89e83174-4826-4509-b990-dbda2d1e4be1" data-theme="light" data-color="e81e4d" data-channelId="a111c300-60df-42e7-baf5-0a0664a6f45f" data-rendered="false" class="cstrEmbed"><a href="https://www.caster.fm">Shoutcast Hosting</a><a href="https://www.caster.fm">Stream Hosting</a><a href="https://www.caster.fm">Radio Server Hosting</a></div>`,
              }}
            />
            {widgetLoadError && (
              <p role="alert" className="text-center text-sm text-rose-700">
                Player Caster.fm gagal dimuat. Periksa koneksi internet lalu muat ulang halaman.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
