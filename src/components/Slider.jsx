import { useEffect, useRef, useState } from "react";

// Slide foto bergaya tumpukan kartu.
export default function Slider({ foto, alt, inisial }) {
  const [rusak, setRusak] = useState([]);
  const [i, setI] = useState(0); // kartu yang sedang di depan
  const [jeda, setJeda] = useState(false);
  const mulaiX = useRef(null);

  const slide = foto.filter((f) => !rusak.includes(f));
  const n = slide.length;
  const maju = () => setI((x) => (x + 1) % n);
  const mundur = () => setI((x) => (x - 1 + n) % n);

  useEffect(() => {
    if (n < 2 || jeda) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 4000);
    return () => clearInterval(t);
  }, [n, jeda]);

  useEffect(() => { if (i >= n) setI(0); }, [n, i]);

  if (n === 0) return <div className="foto"><span aria-hidden="true">{inisial}</span></div>;

  const sentuhAkhir = (e) => {
    if (mulaiX.current == null) return;
    const d = e.changedTouches[0].clientX - mulaiX.current;
    if (Math.abs(d) > 40) (d < 0 ? maju : mundur)();
    mulaiX.current = null;
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeri foto"
      onMouseEnter={() => setJeda(true)}
      onMouseLeave={() => setJeda(false)}
    >
      <div
        className="tumpuk"
        onTouchStart={(e) => { mulaiX.current = e.touches[0].clientX; }}
        onTouchEnd={sentuhAkhir}
      >
        {slide.map((f, k) => {
          const p = (k - i + n) % n; // 0 = paling depan
          return (
            <div
              key={f}
              className="kartu"
              style={{ "--p": p, zIndex: n - p, opacity: p > 3 ? 0 : 1, pointerEvents: p === 0 ? "auto" : "none" }}
              aria-hidden={p !== 0}
              onClick={maju}
            >
              <img
                src={f}
                alt={p === 0 ? alt : ""}
                draggable="false"
                onError={() => setRusak((r) => [...r, f])}
              />
            </div>
          );
        })}
      </div>
      {n > 1 && (
  <div className="kontrol">
    <div className="titik">
      {slide.map((f, k) => (
        <button key={f} className={k === i ? "aktif" : ""} aria-label={"Foto " + (k + 1)} aria-current={k === i} onClick={() => setI(k)} />
      ))}
    </div>
  </div>
)}
    </div>
  );
}