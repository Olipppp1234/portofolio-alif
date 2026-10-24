// Ubah semua isi portofolio Anda di file ini.
// Foto profil: simpan sebagai public/foto.jpg (kalau tidak ada, tampil inisial nama).
export const profil = {
  nama: "Muh Alif",
  inisial: "A",
  // Daftar foto untuk slide di bagian atas. Simpan file-nya di folder public/.
  foto: ["/foto1.PNG", "/foto2.jpg", "/foto3.jpg"],
  peran: ["Fotografer", "Desainer Grafis", "Web Developer", "Unity Developer"],
  lokasi: "Pinrang, Indonesia",
  email: "katomuhammad28@gmail.com",
  web3key: "cd7dac2f-9d5f-4f64-ba73-e490a57952da",
  cv: "/CV-Muh-Alif.pdf",
  cvNama: "CV-Muh-Alif.pdf",
  intro:
    "Saya Alif, kreator digital yang bekerja di fotografi, desain grafis, pengembangan web, dan proyek game Unity. Saya suka menggabungkan visual yang kuat dengan teknologi yang rapi, dari sesi foto komersial dan branding sampai situs web dan game interaktif.",
};


export const angka = [
  { nilai: "Fresh Graduate", label: "Masih Pemula" },
  { nilai: "15", label: "proyek selesai" },
  { nilai: "4", label: "bidang keahlian" },
];

export const kategori = ["Semua", "Fotografi", "Desain Grafis", "Web", "Unity"];

// 'gambar' = foto proyek (simpan di public/proyek/). Kalau file belum ada, tampil sampul warna.
export const proyek = [
  { judul: "Fotografi", gambar: "/proyek/photo.jpg", tahun: 2026, kat: "Fotografi", desk: "Potret, produk, dan sesi foto komersial, dari pengambilan gambar sampai color grading.", tag: ["Lightroom", "Photoshop", "Studio"], warna: ["#0f1d3d", "#8ca4ff"] },
  { judul: "Desain Grafis", gambar: "/proyek/desain.jpg", tahun: 2026, kat: "Desain Grafis", desk: "Poster, branding, dan materi visual untuk media cetak maupun digital.", tag: ["Photoshop", "Figma", "Illustrator"], warna: ["#be185d", "#fbb6d6"] },
  { judul: "Web", gambar: "/proyek/web.jpg", tahun: 2026, kat: "Web", desk: "Situs dan aplikasi web yang cepat, responsif, dan mudah dirawat.", tag: ["React", "Node.js", "Vite"], warna: ["#2b4fd8", "#9db2ff"] },
  { judul: "Unity", gambar: "/proyek/unity.jpg", tahun: 2026, kat: "Unity", desk: "Game dan simulasi interaktif, termasuk proyek Virtual Reality, dengan Unity dan C#.", tag: ["Unity", "C#", "VR"], warna: ["#0f7b6c", "#8fe3d2"] },
];

export const pengalaman = [
  { tahun: "2022 - sekarang", posisi: "Web Developer & Desainer Freelance", tempat: "Ketua Bidang Media Dan Informasi Ikatan Mahasiswa Muhammadiyah Al-Farabi Fakultas Teknik Universitas Muhammadiyah Parepare Periode 2025-2026" },
  { tahun: "2022 - 2026", posisi: "Fotografer & Editor Foto", tempat: "Anggota Organisasi Fotografi Kampus Universitas Muhammadiyah Parepare" },
  { tahun: "2026", posisi: "Pengembang Game Unity", tempat: "Penggunaan Virtual Reality Untuk Simulasi Evakuasi Gempa Bumi" },
];

export const pendidikan = [
  { tahun: "2022 - 2026", nama: "Universitas Muhammadiyah Parepare", jurusan: "Teknik Informatika" },
];

export const software = [
  { nama: "", ikon: "/ikon/affinity.png" },
  { nama: "", ikon: "/ikon/lightroom.png" },
  { nama: "", ikon: "/ikon/figma.png" },
  { nama: "", ikon: "/ikon/canva.png" },
  { nama: "", ikon: "/ikon/unity.png" },
  { nama: "", ikon: "/ikon/vscode.png" },
];

export const keahlian = [
  "Fotografi", "Desain Grafis", "Web Development", "Game Unity (C#)",
  "Color Grading", "Branding Kit", "Video Editing", "Ilustrasi",
];

export const tautan = [
  { label: "Behance", url: "https://behance.net/" },
  { label: "Pinterest", url: "https://pin.it/4x2BpQlNb" },
  { label: "GitHub", url: "https://github.com/" },
  { label: "itch.io (game)", url: "https://itch.io/" },
];

export const sosial = [
  { label: "WhatsApp", url: "https://wa.me/6281234567890" },
  { label: "Instagram", url: "https://instagram.com/" },
  { label: "TikTok", url: "https://tiktok.com/" },
  { label: "LinkedIn", url: "https://linkedin.com/" },
];

// Galeri per kategori. Simpan gambar di public/galeri/..., lalu daftarkan di sini.
// "judul" dan "tahun" boleh dihapus. Nama kategori harus sama dengan yang di daftar "kategori".
export const galeri = {
  "Desain Grafis": [
    { src: "/galeri/desain/desain.jpg", judul: "Poster HUT RI", tahun: 2025 },
    { src: "/galeri/desain/desain2.jpg", judul: "Poster Kegiatan", tahun: 2025 },
    { src: "/galeri/desain/desain3.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain4.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain5.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain6.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain7.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain8.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain9.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain10.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain11.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain12.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain13.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain14.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain15.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain16.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain17.jpg", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain18.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain19.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    { src: "/galeri/desain/desain20.png", judul: "Logo Kopi Lokal", tahun: 2026 },
    // tambahkan baris baru di sini
  ],
  "Fotografi": [
    { src: "/galeri/fotografi/poto1.jpg", judul: "Poster HUT RI", tahun: 2025 },
    { src: "/galeri/fotografi/poto2.jpg", judul: "Poster HUT RI", tahun: 2025 },
  ],
  "Web": [],
  "Unity": [],
}; // <- galeri ditutup di sini

// Penjelasan singkat tiap kategori (tampil di halaman kategori).
export const deskripsiKategori = {
  "Fotografi": "Potret, produk, dan sesi foto komersial, dari pengambilan gambar sampai color grading.",
  "Desain Grafis": "Poster, branding, kemasan, dan materi visual untuk media cetak maupun digital.",
  "Web": "Situs dan aplikasi web yang cepat, responsif, dan mudah dirawat.",
  "Unity": "Game dan simulasi interaktif yang dibangun dengan Unity dan C#.",
};