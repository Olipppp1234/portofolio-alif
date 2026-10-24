import { useState } from "react";
import { proyek, kategori } from "../data.js";
import { slug } from "../util.js";

export function Cover({ p }) {
  const [gagal, setGagal] = useState(false);
  const ada = p.gambar && !gagal;
  return (
    <div className="cover" style={{ "--a": p.warna[0], "--b": p.warna[1] }}>
      {ada ? (
        <img src={p.gambar} alt={"Foto proyek " + p.judul} loading="lazy" onError={() => setGagal(true)} />
      ) : (
        <span aria-hidden="true">{p.judul.charAt(0)}</span>
      )}
    </div>
  );
}

export default function Projects() {
  const [aktif, setAktif] = useState("Semua");
  const [gerak, setGerak] = useState(false); // animasi hanya setelah kategori dipilih
  const daftar = proyek.filter((p) => aktif === "Semua" || p.kat === aktif);

  const pilih = (k) => {
    setAktif(k);
    setGerak(true);
  };

  return (
    <section id="proyek" className="section">
      <div className="wrap">
        <h2>Proyek terpilih</h2>
        <div className="filters" role="group" aria-label="Filter proyek">
          {kategori.map((k) => (
            <button key={k} aria-pressed={aktif === k} onClick={() => pilih(k)}>{k}</button>
          ))}
        </div>
        <div className={"grid" + (gerak ? " ganti" : "")} key={aktif}>
          {daftar.map((p, i) => (
            <a
              className="card"
              style={{ "--i": i }}
              href={`#/kategori/${slug(p.kat)}`}
              key={p.judul}
            >
              <Cover p={p} />
              <div className="card-body">
                <div className="card-meta"><span>{p.kat}</span><span>{p.tahun}</span></div>
                <h3>{p.judul}</h3>
                <p>{p.desk}</p>
                <div className="tags">{p.tag.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}