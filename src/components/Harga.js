import React from "react";

function Harga() {
  return (
    <section id="harga" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-5">💡 Paket Layanan Scriptiva</h2>
        <div className="row g-4">
          {/* Paket Basic */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0 rounded-4 p-4">
              <h4 className="mb-3">📚 Paket Basic</h4>
              <h3 className="fw-bold text-primary mb-3">Rp 500K</h3>
              <ul className="list-unstyled text-muted">
                <li>✔️ Bimbingan Skripsi Dasar</li>
                <li>✔️ Konsultasi 3x</li>
                <li>✔️ Laporan Kemajuan</li>
              </ul>
              <a
                href="#kontak"
                className="btn btn-outline-primary mt-3 rounded-pill"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Paket Pro - Highlight */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-primary rounded-4 p-4 position-relative">
              <span className="badge bg-primary text-white position-absolute top-0 start-50 translate-middle rounded-pill px-3 py-2">
                ⭐ Rekomendasi
              </span>
              <h4 className="mt-4">🎓 Paket Pro</h4>
              <h3 className="fw-bold text-primary mb-3">Rp 1.200K</h3>
              <ul className="list-unstyled text-muted">
                <li>✔️ Bimbingan Skripsi/Tesis</li>
                <li>✔️ Konsultasi Unlimited</li>
                <li>✔️ Olah Data Statistik</li>
                <li>✔️ Review Bab 1–5</li>
              </ul>
              <a href="#kontak" className="btn btn-primary mt-3 rounded-pill">
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Paket Premium */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0 rounded-4 p-4">
              <h4 className="mb-3">📊 Paket Premium</h4>
              <h3 className="fw-bold text-primary mb-3">Rp 2.000K</h3>
              <ul className="list-unstyled text-muted">
                <li>✔️ Pendampingan Intensif</li>
                <li>✔️ Konsultasi Tanpa Batas</li>
                <li>✔️ Analisis Data Lengkap</li>
                <li>✔️ Revisi Hingga ACC</li>
              </ul>
              <a
                href="#kontak"
                className="btn btn-outline-primary mt-3 rounded-pill"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Harga;
