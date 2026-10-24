import { useEffect, useState } from "react";
import * as data from "../data.js";
import { slug } from "../util.js";

const { proyek, kategori } = data;

export default function KategoriPage({ katSlug, aktifSlug }) {
  const semuaKat = kategori.filter((k) => k !== "Semua");
  const kat = semuaKat.find((k) => slug(k) === katSlug);
  const aktif = proyek.find((p) => p.kat === kat && slug(p.judul) === aktifSlug);

  const [rusak, setRusak] = useState([]);
  const [buka, setBuka] = useState(null); // nomor gambar yang dibuka besar

  // Sumber galeri: daftar "galeri" di data.js, atau foto proyek jika kosong.
  const daftarGaleri = data.galeri && kat ? data.galeri[kat] : null;
  const sumber =
    daftarGaleri && daftarGaleri.length
      ? daftarGaleri
      : proyek.filter((p) => p.kat === kat && p.gambar).map((p) => ({ src: p.gambar, judul: p.judul, tahun: p.tahun }));
  const tampil = sumber.filter((g) => !rusak.includes(g.src));
  const tagKat = [...new Set(proyek.filter((p) => p.kat === kat).flatMap((p) => p.tag))];

  useEffect(() => {
    setBuka(null);
    window.scrollTo(0, 0);
  }, [katSlug, aktifSlug]);

  useEffect(() => {
    if (buka === null) return;
    const f = (e) => {
      if (e.key === "Escape") setBuka(null);
      if (e.key === "ArrowRight") setBuka((x) => (x + 1) % tampil.length);
      if (e.key === "ArrowLeft") setBuka((x) => (x - 1 + tampil.length) % tampil.length);
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [buka, tampil.length]);

  if (!kat) {
    return (
      <section className="section kat-page">
        <div className="wrap">
          <h2>Kategori tidak ditemukan</h2>
          <a className="kembali" href="#proyek">← Kembali ke semua proyek</a>
        </div>
      </section>
    );
  }

  const item = buka !== null ? tampil[buka] : null;

  return (
    <section className="section kat-page">
      <div className="wrap">
        <a className="kembali" href="#proyek">← Kembali ke semua proyek</a>
        <h1 className="kat-judul">{kat}</h1>

        <div className={"info-proyek" + (aktif ? "" : " kategori")}>
          <span className="label">{aktif ? "Proyek dipilih" : "Tentang kategori"}</span>
          {aktif ? (
            <>
              <h2>{aktif.judul}</h2>
              <p>{aktif.desk}</p>
              <div className="tags">{aktif.tag.map((t) => <span key={t}>{t}</span>)}</div>
              {aktif.url && aktif.url !== "#" && (
                <a className="lihat" href={aktif.url} target="_blank" rel="noreferrer">Buka proyek →</a>
              )}
            </>
          ) : (
            <>
              <h2>{kat}</h2>
              <p>
                {(data.deskripsiKategori && data.deskripsiKategori[kat]) ||
                  "Kumpulan karya " + kat + " yang pernah saya kerjakan."}
              </p>
              <div className="tags">{tagKat.map((t) => <span key={t}>{t}</span>)}</div>
            </>
          )}
        </div>

        <nav className="chips" aria-label="Kategori proyek">
          {semuaKat.map((k) => (
            <a key={k} href={`#/kategori/${slug(k)}`} aria-current={k === kat ? "page" : undefined}>{k}</a>
          ))}
        </nav>

        <h2 className="galeri-judul">Semua karya {kat} <span>{tampil.length}</span></h2>

        {tampil.length === 0 ? (
          <p className="kat-desk">Belum ada karya di kategori ini. Tambahkan gambarnya di <code>src/data.js</code> pada bagian <code>galeri</code>.</p>
        ) : (
          <div className="galeri">
            {tampil.map((g, k) => (
              <button className="tile" key={g.src} onClick={() => setBuka(k)} aria-label={"Buka " + (g.judul || "gambar")}>
                <img src={g.src} alt={g.judul || ""} loading="lazy" onError={() => setRusak((r) => [...r, g.src])} />
                {g.judul && <span className="cap">{g.judul}</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Pratinjau gambar" onClick={() => setBuka(null)}>
          <button className="lb-tutup" onClick={() => setBuka(null)} aria-label="Tutup">×</button>
          {tampil.length > 1 && (
            <button className="lb-nav kiri" onClick={(e) => { e.stopPropagation(); setBuka((buka - 1 + tampil.length) % tampil.length); }} aria-label="Sebelumnya">‹</button>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.judul || ""} />
            <figcaption>{item.judul}{item.tahun ? " · " + item.tahun : ""} <span>{buka + 1} / {tampil.length}</span></figcaption>
          </figure>
          {tampil.length > 1 && (
            <button className="lb-nav kanan" onClick={(e) => { e.stopPropagation(); setBuka((buka + 1) % tampil.length); }} aria-label="Berikutnya">›</button>
          )}
        </div>
      )}
    </section>
  );
}