import React from "react";

function Keunggulan() {
  return (
    <section id="keunggulan" className="p-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Kenapa Pilih Scriptiva?</h2>
        <h5 className="mb-5 text-muted">
          Sebagai konsultan penelitian terdepan, Scriptiva telah membuktikan
          kualitas layanannya dengan 1.200+ proyek penelitian yang berhasil kami
          bantu. Kami berkomitmen menjembatani mahasiswa, akademisi, dan
          profesional dari tantangan penelitian menuju kesuksesan akademik
          maupun bisnis
        </h5>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>🎓 Berpengalaman</h4>
              <p>
                Kami sudah membantu 1200+ mahasiswa dalam riset & bimbingan.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>📊 Data Akurat</h4>
              <p>Kami menggunakan metode analisis yang valid dan terpercaya.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>⏳ Tepat Waktu</h4>
              <p>Bimbingan dilakukan sesuai timeline yang sudah disepakati.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keunggulan;
