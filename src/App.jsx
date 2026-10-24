import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import KategoriPage from "./components/KategoriPage.jsx";
import { profil } from "./data.js";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const f = () => setHash(window.location.hash);
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return hash;
}

// Elemen yang muncul dengan animasi saat masuk layar.
const SELEKTOR = [
  ".hero .foto-wrap",
  ".section > .wrap > h2",
  ".filters",
  ".grid > .card",
  ".res-kiri",
  ".res-kanan",
  ".pills li",
  ".kontak > *",
  ".kat-judul",
  ".info-proyek",
  ".chips",
].join(",");

function useReveal(kunci) {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll(SELEKTOR));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("masuk");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => {
      const urutan = Array.from(el.parentElement.children).indexOf(el);
      el.style.setProperty("--d", Math.min(urutan, 6) * 80 + "ms");
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [kunci]);
}

export default function App() {
  const [theme, toggle] = useTheme();
  const hash = useHash();

  // Alamat halaman kategori: #/kategori/<kategori>/<proyek>
  const bagian = hash.replace(/^#\/?/, "").split("/");
  const rute = bagian[0] === "kategori" && bagian[1] ? { kat: bagian[1], aktif: bagian[2] } : null;
  const kunciRute = rute ? "kategori" : "beranda";
  const kunciHalaman = rute ? `k-${rute.kat}-${rute.aktif || ""}` : "beranda";

  useReveal(kunciHalaman);

  // Saat pindah antara beranda dan halaman kategori, atur posisi gulir.
  useEffect(() => {
    if (kunciRute === "kategori") return;
    const el = hash.length > 1 && document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [kunciRute]);

  return (
    <>
      <Header theme={theme} onToggle={toggle} />
      <main key={kunciHalaman} className="halaman">
        {rute ? (
          <KategoriPage katSlug={rute.kat} aktifSlug={rute.aktif} />
        ) : (
          <>
            <Hero />
            <Projects />
            <Resume />
            <Contact />
          </>
        )}
      </main>
      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} {profil.nama}. Dibuat dengan React dan Vite.</div>
      </footer>
    </>
  );
}