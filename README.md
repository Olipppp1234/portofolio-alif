# Portofolio Alif

Portofolio dibuat dengan React 18 dan Vite.

## Menjalankan

Pastikan Node.js 18 atau lebih baru sudah terpasang.

```bash
npm install
npm run dev      # buka alamat yang tampil di terminal (biasanya http://localhost:5173)
npm run build    # hasil produksi ada di folder dist
```

## Melihat di HP

Cara tercepat: hubungkan HP dan komputer ke Wi-Fi yang sama, lalu jalankan

```bash
npm run dev:hp
```

Buka alamat `Network` yang tampil di terminal (contoh `http://192.168.1.10:5173`) di browser HP.
Jika tidak terbuka, izinkan Node.js di firewall komputer.

Untuk tautan yang bisa dibuka dari mana saja, jalankan `npm run build` lalu unggah folder `dist`
ke Netlify, Vercel, atau Cloudflare Pages.

## Mengubah isi

Semua teks (nama, proyek, keahlian, pengalaman, tautan sosial) ada di `src/data.js`.
Warna dan font diatur lewat variabel di bagian atas `src/styles.css`.

## Foto profil (slide)

Simpan foto-foto Anda di folder `public/` (misalnya `foto.jpg`, `foto2.jpg`, `foto3.jpg`), lalu atur daftarnya di `src/data.js` pada `profil.foto`.
Foto yang tidak ditemukan dilewati otomatis; jika semuanya tidak ada, tampil inisial nama. Kode slide ada di `src/components/Slider.jsx`.
Untuk foto di kartu proyek, taruh gambar di `public/` lalu tambahkan `gambar: "/nama-file.jpg"` pada proyek di `src/data.js`.

## Struktur

```
src/
  App.jsx            susunan halaman dan mode terang/gelap
  data.js            isi portofolio
  styles.css         seluruh gaya
  components/        Header, Hero, Projects, Resume, Contact
```
