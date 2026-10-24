import { useState } from "react";
import { profil, sosial } from "../data.js";

const awal = { nama: "", email: "", pesan: "" };

export default function Contact() {
  const [f, setF] = useState(awal);
  const [status, setStatus] = useState("diam"); // diam | kirim | sukses | gagal
  const ubah = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const kirim = async (e) => {
    e.preventDefault();
    if (!profil.web3key) { setStatus("gagal"); return; }
    setStatus("kirim");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profil.web3key,
          subject: `Pesan baru dari ${f.nama} (portofolio)`,
          from_name: f.nama,
          name: f.nama,
          email: f.email,
          message: f.pesan,
        }),
      });
      const hasil = await res.json();
      if (hasil.success) {
        setStatus("sukses");
        setF(awal);
      } else {
        setStatus("gagal");
      }
    } catch {
      setStatus("gagal");
    }
  };

  return (
    <section id="kontak" className="section">
      <div className="wrap kontak">
        <div>
          <h2>Punya proyek? Ceritakan ke saya.</h2>
          <p className="muted">Saya biasanya membalas dalam satu hari kerja.</p>
          <ul className="sosial">
            {sosial.map((s) => (
              <li key={s.label}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
        <form onSubmit={kirim}>
          <label>Nama
            <input name="nama" value={f.nama} onChange={ubah} required autoComplete="name" />
          </label>
          <label>Email Anda
            <input type="email" name="email" value={f.email} onChange={ubah} required autoComplete="email" />
          </label>
          <label>Pesan
            <textarea name="pesan" rows="5" value={f.pesan} onChange={ubah} required />
          </label>
          <button className="btn utama" type="submit" disabled={status === "kirim"}>
            {status === "kirim" ? "Mengirim..." : "Kirim pesan"}
          </button>
          <p className={"status-form " + status} role="status" aria-live="polite">
            {status === "sukses" && "Terima kasih! Pesan Anda sudah terkirim."}
            {status === "gagal" && (
              <>Pesan belum terkirim. Coba lagi, atau kirim langsung ke <a href={`mailto:${profil.email}`}>{profil.email}</a>.</>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}