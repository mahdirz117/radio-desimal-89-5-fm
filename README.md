# Radio Desimal 89,5 FM

Website resmi Radio Desimal 89,5 FM Malang — **Sahabat Inspirasimu**. Aplikasi ini menampilkan informasi stasiun, jadwal program, berita, podcast, maskot DIMO, jangkauan siaran, paket iklan, kontak, dan pemutar siaran langsung Caster.fm.

Website dibangun sebagai aplikasi satu halaman (SPA) menggunakan React, TypeScript, dan Vite. Konten situs saat ini bersumber dari data statis di dalam repository; siaran langsung disediakan oleh widget pihak ketiga Caster.fm.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Persyaratan](#persyaratan)
- [Menjalankan secara lokal](#menjalankan-secara-lokal)
- [Perintah yang tersedia](#perintah-yang-tersedia)
- [Struktur proyek](#struktur-proyek)
- [Cara kerja aplikasi](#cara-kerja-aplikasi)
- [Pemutar siaran langsung](#pemutar-siaran-langsung)
- [Mengelola konten](#mengelola-konten)
- [Gaya dan aset](#gaya-dan-aset)
- [Build dan deployment](#build-dan-deployment)
- [Pemecahan masalah](#pemecahan-masalah)
- [Batasan yang diketahui](#batasan-yang-diketahui)

## Fitur

- Landing page responsif untuk Radio Desimal 89,5 FM.
- Informasi profil, sejarah, nilai utama, dan cakupan siaran Malang Raya.
- Jadwal program berdasarkan data program yang didefinisikan di aplikasi.
- Bagian berita, podcast, maskot DIMO, iklan/kerja sama, dan kontak.
- Player resmi Caster.fm ditampilkan langsung di halaman (bukan popup), sehingga halaman lain tetap dapat diakses selama radio diputar.
- Tombol navigasi menuju bagian-bagian situs menggunakan tautan anchor.
- Metadata halaman untuk mesin pencari dan media sosial, serta structured data `RadioStation`.

## Teknologi

- React 19 dan TypeScript
- Vite 8
- Tailwind CSS 4 melalui plugin Vite
- Lucide React untuk ikon
- Motion tersedia sebagai dependency untuk animasi

## Persyaratan

- Node.js versi yang didukung Vite 8. Gunakan Node.js LTS yang masih didukung; Vite 8 memerlukan versi Node yang kompatibel (minimal Node 20.19+ atau 22.12+).
- npm (disertakan bersama Node.js).
- Koneksi internet untuk memuat font Google Fonts, widget Caster.fm, dan siaran radio.

## Menjalankan secara lokal

Dari direktori utama proyek:

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite; secara default server proyek berjalan pada:

```text
http://localhost:3000
```

Perintah `dev` mengikat server ke `0.0.0.0`, sehingga bisa diakses dari perangkat lain pada jaringan lokal melalui alamat IP komputer pengembang, jika firewall dan jaringan mengizinkan.

### Variabel lingkungan

Website frontend saat ini tidak memerlukan API key untuk berjalan. `vite.config.ts` menggunakan `DISABLE_HMR` untuk mengontrol Hot Module Replacement:

- Nilai selain `true` (default): HMR aktif.
- `true`: HMR dan file watching dinonaktifkan.

Contoh PowerShell untuk satu sesi:

```powershell
$env:DISABLE_HMR = "true"
npm run dev
```

File `.env.example` berisi contoh `GEMINI_API_KEY` dari scaffold awal, tetapi kode aplikasi saat ini tidak membaca key tersebut. Jangan menambahkan key rahasia ke kode frontend atau ke repository.

## Perintah yang tersedia

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Vite pada port 3000. |
| `npm run build` | Membangun bundle produksi ke direktori `dist/`. |
| `npm run preview` | Menyajikan hasil build `dist/` secara lokal untuk pemeriksaan sebelum deployment. Jalankan `npm run build` terlebih dahulu. |
| `npm run lint` | Menjalankan `tsc --noEmit` untuk validasi tipe TypeScript; ini bukan ESLint. |
| `npm run clean` | Menghapus `dist` dan `server.js` menggunakan perintah POSIX `rm -rf`; script ini ditujukan untuk shell yang menyediakan perintah tersebut. |

Belum ada script test otomatis yang didefinisikan di `package.json`.

## Struktur proyek

```text
.
├── index.html                  # HTML awal, metadata SEO, dan JSON-LD
├── package.json                # Dependency dan script npm
├── tsconfig.json               # Konfigurasi TypeScript
├── vite.config.ts              # Plugin, alias @, dan opsi HMR
├── public/
│   └── assets/
│       └── aistudio/           # Logo, panduan maskot, poster jadwal
└── src/
    ├── main.tsx                # Mount React dan import CSS
    ├── App.tsx                 # Komposisi halaman dan jadwal program aktif
    ├── index.css               # Tailwind, font, dan animasi global
    ├── types.ts                # Tipe data aplikasi
    ├── data/
    │   └── radioData.ts        # Data stasiun, program, berita, podcast, dll.
    ├── assets/
    │   └── images/             # Foto yang diproses sebagai aset source
    └── components/             # Komponen-komponen halaman
```

### Komponen halaman

| Komponen | Fungsi |
| --- | --- |
| `Navbar.tsx` | Navigasi utama, menu mobile, dan tautan menuju player. |
| `Hero.tsx` | Bagian pembuka/branding dan tombol menuju player serta jadwal. |
| `LivePlayer.tsx` | Bagian player Caster.fm, informasi program saat ini, tombol suka/bagikan, dan tautan WhatsApp. |
| `About.tsx` | Informasi tentang, sejarah, dan alasan memilih Desimal. |
| `Programs.tsx` | Kartu program, filter kategori, dan tampilan poster jadwal. |
| `News.tsx` | Daftar dan tampilan detail berita. |
| `Podcast.tsx` | Daftar episode dan antarmuka podcast. |
| `DimoSection.tsx` | Informasi maskot DIMO dan perannya. |
| `Coverage.tsx` | Informasi jangkauan siaran. |
| `Advertise.tsx` | Paket iklan dan informasi kerja sama. |
| `Contact.tsx` | Informasi kontak dan ajakan menghubungi stasiun. |
| `Footer.tsx` | Bagian penutup halaman. |
| `DesimalLogo.tsx` | Komponen logo yang dapat digunakan ulang. |

## Cara kerja aplikasi

1. `index.html` menyediakan elemen `#root`, metadata halaman, font eksternal, dan JSON-LD.
2. `src/main.tsx` membuat root React, mengimpor `index.css`, lalu merender `App`.
3. `App.tsx` menyusun komponen dari atas ke bawah: Navbar, Hero, player, About, Programs, News, Podcast, DIMO, Coverage, Advertise, Contact, dan Footer.
4. Data halaman berasal dari konstanta pada `src/data/radioData.ts`; tipe objek didefinisikan pada `src/types.ts`.
5. Bagian navigasi menggunakan ID HTML sebagai anchor. Tautan **Dengarkan Live** mengarah ke `#live-player`.

### Program yang sedang ditampilkan

`App.tsx` menentukan program aktif dari jam lokal WIB dan membandingkannya dengan `startTime` serta `endTime` masing-masing item di `PROGRAMS`. Perhitungan diperbarui setiap menit. Jika tidak ada program yang cocok (misalnya sebelum jadwal pertama), program pertama digunakan sebagai fallback.

Memilih program dari jadwal memperbarui program yang ditampilkan sebagai program terpilih. Hal ini tidak mengganti stream Caster.fm; Caster.fm tetap menyiarkan kanal radio langsung.

## Pemutar siaran langsung

Player berada di `src/components/LivePlayer.tsx` dan dirender di alur halaman biasa. Widget dimuat melalui script:

```text
https://cdn.cloud.caster.fm/widgets/embed.js
```

Elemen embed menggunakan konfigurasi berikut:

- `data-type`: `newStreamPlayer`
- `data-publicToken`: token publik Caster.fm stasiun
- `data-channelId`: ID channel Caster.fm stasiun
- `data-theme`: `light`
- `data-color`: `e81e4d`

Script widget ditambahkan oleh React setelah elemen embed berada di DOM. Tombol di Hero dan Navbar hanya menggulir ke bagian player; pemutaran dan jeda audio dilakukan melalui kontrol resmi di widget Caster.fm.

### Mengganti konfigurasi Caster.fm

Jika token atau channel berubah:

1. Dapatkan kode embed terbaru dari panel Caster.fm.
2. Perbarui atribut embed `data-publicToken`, `data-channelId`, tema, warna, dan `data-type` di `src/components/LivePlayer.tsx`.
3. Jika token yang digunakan juga ditampilkan atau dipakai oleh bagian lain, sinkronkan nilai `streamingPublicToken` di `STATION_INFO` pada `src/data/radioData.ts`.
4. Pastikan script `embed.js` tetap hanya dimuat satu kali dan tidak dipindahkan kembali ke `index.html`. Widget perlu berada di DOM sebelum script memproses embed.
5. Jalankan `npm run lint` dan `npm run build`, kemudian uji player di browser dengan koneksi internet.

Widget dan stream adalah layanan eksternal. Ketersediaan, autoplay, codec, dan perilaku kontrol audionya ditentukan oleh Caster.fm serta kebijakan browser. Umumnya browser mewajibkan tindakan pengguna sebelum audio dapat mulai.

## Mengelola konten

Sebagian besar konten situs tersimpan sebagai data TypeScript di `src/data/radioData.ts`:

| Konstanta | Konten |
| --- | --- |
| `STATION_INFO` | Identitas, kontak, tautan/aset, token publik stream, dan cakupan stasiun. |
| `CORE_VALUES` | Nilai-nilai utama Desimal. |
| `PROGRAMS` | Jadwal dan deskripsi program. |
| `TIMELINE_HISTORY` | Riwayat stasiun. |
| `WHY_DESIMAL` | Alasan/nilai pembeda stasiun. |
| `DIMO_GUIDE` dan `DIMO_ROLES` | Informasi maskot dan peran DIMO. |
| `ARTICLES` | Artikel berita. |
| `PODCASTS` | Metadata episode podcast. |
| `AD_PACKAGES` | Paket iklan dan kerja sama. |

### Menambah atau mengubah program

Setiap entri `PROGRAMS` mengikuti tipe `Program` di `src/types.ts`. Pertahankan format jam 24 jam `HH:mm` pada `startTime` dan `endTime`, karena nilai tersebut dipakai untuk menentukan program aktif. `time` adalah teks jadwal yang ditampilkan ke pengunjung; sesuaikan juga nilainya saat jam siaran berubah.

Jika memperluas tipe konten, perbarui tipe terkait di `src/types.ts` dan komponen yang membaca data tersebut. Hindari mengubah nilai enum kategori tanpa memperbarui filter atau tampilan yang bergantung padanya.

### Artikel, podcast, dan paket iklan

Tipe `Article`, `PodcastEpisode`, `DimoRole`, dan `AdPackage` juga didefinisikan di `src/types.ts`. Untuk podcast, `PodcastEpisode` menyediakan properti opsional `audioUrl`; keberadaan properti ini sendiri tidak menjamin pemutaran audio karena player episode perlu diimplementasikan secara terpisah.

## Gaya dan aset

- Styling komponen menggunakan utility class Tailwind.
- `src/index.css` memuat Tailwind, definisi font, serta keyframe animasi global.
- Font Plus Jakarta Sans dan Outfit dimuat dari Google Fonts di `index.html`; font lokal/fallback akan digunakan jika layanan tidak tersedia.
- Aset di `public/assets/` diakses menggunakan URL dari root situs, misalnya `/assets/aistudio/...`.
- Aset pada `src/assets/` dikelola sebagai bagian dari source aplikasi dan dapat diproses oleh toolchain build.

Saat menambahkan aset, pilih lokasi sesuai cara penggunaannya: file yang harus disajikan dengan nama/path publik tetap cocok ditempatkan di `public/`, sedangkan aset yang diimpor langsung oleh komponen dapat ditempatkan di `src/assets/`.

## Build dan deployment

Buat build produksi:

```bash
npm run build
```

Hasil build berada di `dist/`. Untuk melihat hasil tersebut secara lokal:

```bash
npm run preview
```

Deploy seluruh isi `dist/` ke hosting static yang mendukung SPA. Pastikan:

- `index.html` disajikan sebagai entry point.
- Hosting dikonfigurasi untuk mengirim ulang URL yang tidak cocok dengan file statis ke `index.html` jika aplikasi kelak memiliki route selain anchor.
- HTTPS digunakan di production, terutama agar API berbagi clipboard dan layanan eksternal dapat bekerja sesuai kebijakan browser.
- Koneksi ke Google Fonts dan domain Caster.fm tidak diblokir oleh jaringan, CSP, extension, atau firewall.

Jika aplikasi akan dihosting pada subpath (bukan root domain), atur `base` Vite sesuai path deployment dan pastikan semua referensi aset publik mendukung subpath tersebut sebelum merilisnya.

## Pemecahan masalah

### Player tidak muncul atau tetap menampilkan tautan Caster.fm

1. Periksa koneksi ke `cdn.cloud.caster.fm`.
2. Pastikan `data-publicToken` dan `data-channelId` benar dan masih aktif di akun Caster.fm.
3. Buka Developer Tools → Console dan Network, lalu periksa kegagalan pemuatan `embed.js` atau resource player.
4. Periksa apakah pemblokir konten, kebijakan CSP, proxy, atau firewall memblokir domain Caster.fm.
5. Muat ulang halaman setelah memperbaiki koneksi atau konfigurasi.

### Widget tampil tetapi tombol play tidak memutar audio

- Tekan tombol play pada widget Caster.fm; tombol **Dengarkan Live** di situs hanya berpindah ke bagian player.
- Periksa apakah stream sedang aktif dan dapat diakses pada dashboard/halaman Caster.fm.
- Periksa volume perangkat, tab browser, dan keluaran audio.
- Coba browser terbaru dan izinkan audio setelah interaksi langsung pengguna. Browser dapat membatasi autoplay.

### Tidak bisa menjalankan perintah npm

- Pastikan Node.js dan npm tersedia: `node --version` dan `npm --version`.
- Gunakan versi Node yang kompatibel dengan Vite 8.
- Jika dependency belum terpasang, jalankan `npm install`, lalu ulangi perintah.

### Build berhasil, tetapi gambar atau font tidak muncul

- Periksa URL dan kapitalisasi nama file aset. Perbedaan huruf besar/kecil dapat terlihat setelah deploy ke Linux.
- Pastikan file publik ikut disalin ke `dist/` oleh Vite.
- Periksa request eksternal di tab Network; layanan font eksternal memerlukan koneksi internet.

## Batasan yang diketahui

- Data jadwal, artikel, podcast, paket iklan, dan informasi stasiun saat ini ditulis statis di repository; tidak ada CMS atau API konten yang terhubung.
- Stream live dipasok langsung oleh Caster.fm dan tidak dikendalikan oleh tombol audio buatan situs.
- Kontrol podcast saat ini mengelola status antarmuka; belum terhubung ke pemutar audio HTML atau layanan streaming episode.
- `npm run lint` hanya menjalankan pemeriksaan tipe TypeScript. Belum tersedia konfigurasi ESLint atau test suite otomatis di script npm.
- Script `npm run clean` menggunakan `rm -rf` dan mungkin tidak berjalan langsung di PowerShell Windows.
