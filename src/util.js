// Mengubah "Desain Grafis" menjadi "desain-grafis" untuk alamat halaman.
export const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");