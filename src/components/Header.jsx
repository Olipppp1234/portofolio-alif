import { useState } from "react";
import { profil } from "../data.js";

const menu = [
  ["Proyek", "#proyek"],
  ["Resume", "#resume"],
  ["Kontak", "#kontak"],
];

export default function Header({ theme, onToggle }) {
  const [buka, setBuka] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a className="logo" href="#top">{profil.nama}</a>
        <nav id="menu" aria-label="Navigasi utama" className={"nav" + (buka ? " buka" : "")}>
          {menu.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setBuka(false)}>{label}</a>
          ))}
        </nav>
        <button
          className="theme-btn"
          onClick={onToggle}
          aria-label={theme === "dark" ? "Pakai mode terang" : "Pakai mode gelap"}
        >
          {theme === "dark" ? "Terang" : "Gelap"}
        </button>
        <button
          className="burger"
          aria-label={buka ? "Tutup menu" : "Buka menu"}
          aria-expanded={buka}
          aria-controls="menu"
          onClick={() => setBuka(!buka)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}