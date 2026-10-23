import React, { useState } from 'react';
import { Megaphone, Check, ArrowRight, Download, MessageSquare, X, Send, Sparkles, Building2, PhoneCall } from 'lucide-react';
import { AD_PACKAGES, STATION_INFO } from '../data/radioData.ts';
import { AdPackage } from '../types.ts';

export const Advertise: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<AdPackage | null>(null);
  const [isMediaKitOpen, setIsMediaKitOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    picName: '',
    phone: '',
    email: '',
    packageType: 'ADLIBS',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedPackage(null);
    }, 3000);
  };

  return (
    <section id="iklan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Megaphone className="w-4 h-4" />
            <span>KEMITRAAN & MEDIA PROMOSI</span>
            <span aria-hidden="true">·</span>
            <span>RADIO DESIMAL 89,5 FM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance">
            Jadikan Desimal Bagian dari Cerita Brand Anda
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Jangkau audiens Anda melalui radio yang hadir dekat dengan masyarakat Malang dan sekitarnya. Sentuh hati pendengar dengan pesan yang hangat, terpercaya, dan berdampak.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsMediaKitOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>LIHAT MEDIA KIT</span>
            </button>
            <a
              href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Tim%20Marketing%20Desimal%2089,5%20FM,%20saya%20ingin%20konsultasi%20paket%20iklan`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-display font-semibold text-sm border border-white/20 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>HUBUNGI TIM MARKETING</span>
            </a>
          </div>
        </div>

        {/* 5 Advertising Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AD_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative group ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-800 to-blue-950/70 border-amber-400 shadow-xl ring-1 ring-amber-400/30'
                  : 'bg-slate-950/80 hover:bg-slate-850 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {pkg.popular && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Pilihan Favorit Pengiklan
                  </div>
                )}

                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {pkg.subtitle}
                </span>

                <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-amber-300 transition-colors mb-3">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-6">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 mb-4">
                  <strong className="text-slate-300 block mb-0.5">Cocok Untuk:</strong>
                  <span>{pkg.suitableFor}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setFormData({ ...formData, packageType: pkg.name });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-amber-400 text-white hover:text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Konsultasi Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Collaboration Card */}
          <div className="p-8 rounded-3xl bg-slate-950/60 border border-dashed border-slate-700 flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                Kustom & Fleksibel
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white mb-3">
                KEMITRAAN KHUSUS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Memiliki konsep aktivasi khusus, roadshow kampus, CSR yayasan, atau kolaborasi sponsorship program berkala? Kami siap merancang proposal yang tepat sasaran.
              </p>
            </div>

            <a
              href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Marketing%20Desimal%20FM,%20saya%20ingin%20berdiskusi%20kemitraan%20khusus`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-display font-bold text-xs uppercase tracking-wider text-center transition-colors block cursor-pointer"
            >
              Diskusikan Kebutuhan Brand
            </a>
          </div>
        </div>
      </div>

      {/* Media Kit Modal */}
      {isMediaKitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-display font-black text-2xl text-white">
                  Media Kit Desimal 89,5 FM
                </h3>
                <p className="text-xs text-amber-400">Ringkasan Profil Pendengar & Format Siaran</p>
              </div>
              <button
                onClick={() => setIsMediaKitOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-sm text-white mb-2">Demografi Pendengar Malang Raya:</h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                  <li>Usia Utama: 18 – 45 Tahun (Generasi Muda, Keluarga Muda, Profesional & Mahasiswa)</li>
                  <li>Wilayah Siar: Kota Malang, Kota Batu, Kabupaten Malang</li>
                  <li>SES: Kelas B, C+, C (Daya beli aktif untuk kebutuhan harian, edukasi, & kuliner)</li>
                  <li>Karakter: Positif, menyukai hiburan hangat, menghargai nilai-nilai Islami inklusif</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-sm text-white mb-2">Keunggulan Kemitraan:</h4>
                <p className="text-slate-400">
                  Desimal 89,5 FM mengintegrasikan penyiaran terestrial FM dengan siaran live streaming berdefinisi tinggi, amplifikasi media sosial, dan karakter maskot DIMO yang dicintai audiens.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Hubungi marketing untuk rate card resmi.</span>
              <a
                href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Marketing%20Desimal%20FM,%20mohon%20kirimkan%20dokumen%20Rate%20Card%20dan%20Media%20Kit%20lengkap`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Minta Rate Card PDF via WA</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Package Consultation Inquiry Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Konsultasi Paket Iklan
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  {selectedPackage.name}
                </h3>
                <p className="text-xs text-slate-400">{selectedPackage.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedPackage(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-center space-y-2">
                <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-lg text-emerald-300">
                  Permintaan Berhasil Terkirim!
                </h4>
                <p className="text-xs text-slate-300">
                  Tim Marketing Radio Desimal 89,5 FM akan segera menghubungi WhatsApp/Email Anda dalam 1x24 jam kerja.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nama Brand / Perusahaan</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kopi Malangan Lestari"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nama Kontak PIC</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Catatan Tambahan / Target Tayang</label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Rencana penayangan awal bulan depan untuk promo grand opening toko cabang baru."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pengajuan Penawaran</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
