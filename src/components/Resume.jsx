import { pengalaman, pendidikan, software, keahlian, tautan } from "../data.js";

export default function Resume() {
  return (
    <section id="resume" className="section resume-sec">
      <div className="wrap">
        <div className="resume">
          <div className="res-kiri">
            <h2>Pengalaman Kerja</h2>
            {pengalaman.map((p) => (
              <div className="item" key={p.posisi}>
                <time>{p.tahun}</time>
                <strong>{p.posisi}</strong>
                <span>{p.tempat}</span>
              </div>
            ))}
            <h2>Pendidikan</h2>
            {pendidikan.map((p) => (
              <div className="item" key={p.nama}>
                <time>{p.tahun}</time>
                <strong>{p.nama}</strong>
                <span>{p.jurusan}</span>
              </div>
            ))}
          </div>
          <div className="res-kanan">
            <h2>Software</h2>
            <ul className="pills">
              {software.map((s) => (
                <li key={s.nama}>
                  {s.ikon && <img src={s.ikon} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
                  {s.nama}
                </li>
              ))}
            </ul>
            <h2>Keahlian Teknis</h2>
            <ul className="bullets">{keahlian.map((k) => <li key={k}>{k}</li>)}</ul>
            <h2>Portofolio</h2>
            <ul className="links">
              {tautan.map((t) => <li key={t.label}><a href={t.url} target="_blank" rel="noreferrer">{t.label}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
