import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, MessageSquare, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';
import { STATION_INFO } from '../data/radioData.ts';

export const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Request Lagu & Salam',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: '',
        phone: '',
        category: 'Request Lagu & Salam',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="kontak" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            <span>HUBUNGI KAMI</span>
            <span aria-hidden="true">·</span>
            <span>RADIO DESIMAL 89,5 FM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Mari Berkolaborasi
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Pintu studio kami di Malang senantiasa terbuka untuk menjalin kebaikan, liputan komunitas, kemitraan promosi, dan sapaan Sahabat Desimal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards, Studio Info, Quick Action Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Buttons Row */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={`https://wa.me/${STATION_INFO.whatsapp}?text=Halo%20Radio%20Desimal%2089,5%20FM`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center transition-colors flex flex-col items-center justify-center gap-1 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-900 mt-1">WhatsApp</span>
                <span className="text-[10px] text-emerald-700">Chat Siaran</span>
              </a>

              <a
                href={`mailto:${STATION_INFO.email}`}
                className="p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-center transition-colors flex flex-col items-center justify-center gap-1 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-blue-900 mt-1">Email</span>
                <span className="text-[10px] text-blue-700">Resmi Desimal</span>
              </a>

              <a
                href="https://maps.google.com/?q=Jl.+Ahmad+Yani+No.+5,+Malang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-center transition-colors flex flex-col items-center justify-center gap-1 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-amber-950 mt-1">Google Maps</span>
                <span className="text-[10px] text-amber-700">Petunjuk Rute</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Alamat Studio Siaran
                  </span>
                  <p className="font-display font-bold text-slate-900 text-base mt-0.5">
                    {STATION_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    PT Radio Chakra Bhuwana (Desimal 89,5 FM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Saluran Telepon & WhatsApp
                  </span>
                  <div className="space-y-0.5 mt-0.5">
                    {STATION_INFO.phones.map((p, i) => (
                      <p key={i} className="font-mono font-bold text-slate-800 text-sm">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shrink-0 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Website Resmi
                  </span>
                  <a
                    href={`https://${STATION_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-700 hover:text-amber-600 text-sm mt-0.5 block transition-colors"
                  >
                    {STATION_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            {/* DIMO Greeting Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex items-center gap-3 border border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-slate-900 p-0.5 shrink-0 overflow-hidden border border-amber-400">
                <img
                  src="/src/assets/images/dimo_hero_mascot_1792675003351.jpg"
                  alt="DIMO Menyapa"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-300">
                  "Ada DIMO, Ada Cerita."
                </p>
                <p className="text-[11px] text-blue-200">
                  Sampai jumpa di gelombang 89,5 FM setiap hari!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message / Song Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                Kirim Pesan / Request Siaran
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Sampaikan kritik, saran, permohonan liputan kegiatan, atau titip salam untuk kerabat di Malang Raya.
              </p>

              {formSent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-display font-bold text-xl text-emerald-900">
                    Pesan Anda Telah Diterima!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Terima kasih telah berbagi cerita bersama Desimal 89,5 FM. Pesan Anda akan dibaca oleh tim siar dan penyiar on-duty kami.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Nomor WhatsApp / HP
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Keperluan Pesan
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                      >
                        <option value="Request Lagu & Salam">Request Lagu & Kirim Salam</option>
                        <option value="Liputan Kegiatan Komunitas">Liputan Kegiatan Komunitas</option>
                        <option value="Kemitraan Iklan / Sponsor">Kemitraan Iklan / Sponsor</option>
                        <option value="Kritik & Saran Siaran">Kritik & Saran Siaran</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Isi Pesan / Request
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pesanmu untuk ruang siar Desimal di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim ke Ruang Siar Desimal</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
