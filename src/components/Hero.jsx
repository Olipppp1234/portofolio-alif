import Slider from "./Slider.jsx";
import { profil, angka } from "../data.js";

const judul = ["Visual", "kuat,", "kode", "rapi,", "game", "hidup."];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="status"><span className="dot" aria-hidden="true" />Menerima proyek baru · {profil.lokasi}</p>
          <h1 aria-label={judul.join(" ")}>
            {judul.map((kata, i) => (
              <span className="kata" key={i} style={{ "--i": i }} aria-hidden="true">{kata} </span>
            ))}
          </h1>
          <ul className="peran">{profil.peran.map((p) => <li key={p}>{p}</li>)}</ul>
          <p className="intro">{profil.intro}</p>
          <div className="btns">
            <a className="btn utama" href="#proyek">Lihat proyek</a>
            <a className="btn" href="#kontak">Hubungi saya</a>
          </div>
        </div>
        <div className="foto-wrap">
          <Slider foto={profil.foto} alt={"Foto " + profil.nama} inisial={profil.inisial} />
          <dl className="angka">
            {angka.map((a) => (
              <div key={a.label}><dt>{a.nilai}</dt><dd>{a.label}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
