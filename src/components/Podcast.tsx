import React, { useState } from 'react';
import { Play, Pause, Headphones, Clock, Calendar, User, Sparkles, Volume2 } from 'lucide-react';
import { PODCASTS } from '../data/radioData.ts';
import { PodcastEpisode } from '../types.ts';

export const Podcast: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activePodcast, setActivePodcast] = useState<PodcastEpisode | null>(PODCASTS[0]);
  const [isPlayingPodcast, setIsPlayingPodcast] = useState<boolean>(false);

  const filters = ['All', 'Inspirasi', 'Religi', 'UMKM', 'Lifestyle', 'Community'];

  const filteredPodcasts = PODCASTS.filter((pod) => {
    if (selectedFilter === 'All') return true;
    return pod.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  const handleTogglePodcast = (episode: PodcastEpisode) => {
    if (activePodcast?.id === episode.id) {
      setIsPlayingPodcast(!isPlayingPodcast);
    } else {
      setActivePodcast(episode);
      setIsPlayingPodcast(true);
    }
  };

  return (
    <section id="podcast" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
              <Headphones className="w-4 h-4" />
              <span>ON-DEMAND AUDIO</span>
              <span aria-hidden="true">·</span>
              <span>DESIMAL PODCAST</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Desimal Podcast
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Dengarkan obrolan mendalam, kisah inspiratif pegiat lokal Malang, hingga siraman rohani kapan pun dan di mana pun.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto max-w-full">
            {filters.map((fil) => (
              <button
                key={fil}
                onClick={() => setSelectedFilter(fil)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === fil
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Active Player Bar if activePodcast exists */}
        {activePodcast && (
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-amber-400/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3 aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-white/10 max-w-[200px] mx-auto lg:mx-0">
                <img
                  src={activePodcast.thumbnail}
                  alt={activePodcast.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                  <span>EPS #{activePodcast.episodeNumber}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activePodcast.series}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-blue-300">{activePodcast.category}</span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  {activePodcast.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  {activePodcast.description}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    Host: {activePodcast.host}
                  </span>
                  {activePodcast.guest && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>Narasumber: {activePodcast.guest}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => setIsPlayingPodcast(!isPlayingPodcast)}
                  className="w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/20 active:scale-95 transition-transform cursor-pointer"
                  aria-label={isPlayingPodcast ? 'Pause podcast' : 'Play podcast'}
                >
                  {isPlayingPodcast ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  )}
                </button>
                <div className="text-center">
                  <span className="text-xs font-mono font-bold text-slate-300 block">
                    {isPlayingPodcast ? 'Memutar Audio' : 'Siap Diputar'}
                  </span>
                  <span className="text-[11px] text-slate-500">{activePodcast.duration}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Podcast Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map((episode) => {
            const isThisPlaying = activePodcast?.id === episode.id && isPlayingPodcast;
            return (
              <div
                key={episode.id}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  activePodcast?.id === episode.id
                    ? 'bg-slate-900 border-amber-400/60 shadow-lg'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Thumbnail & Episode Tag */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-950">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      EP #{episode.episodeNumber}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-sm text-slate-300 text-[11px] font-mono flex items-center gap-1 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {episode.duration}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
                    <span className="text-amber-400">{episode.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{episode.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    {episode.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {episode.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[170px]">
                    {episode.host}
                  </span>
                  <button
                    onClick={() => handleTogglePodcast(episode)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isThisPlaying
                        ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Jeda</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Putar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
