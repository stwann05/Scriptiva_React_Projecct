import React from "react";

function Hero() {
  return (
    <section id="hero" className="text-center p-5 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold">Scriptiva – Konsultan Pendidikan</h1>
        <p className="lead">
          Bantu Risetmu dengan <b>CEPAT</b>, <b>TEPAT</b>, & <b>AKURAT</b>
        </p>
        <p>🎓 Konsultan Penelitian 1200+ klien</p>
        <p>📚 Bimbingan Skripsi/Tesis</p>
        <p>📊 Olah Data Statistik</p>
        <a href="#kontak" className="btn btn-primary btn-lg mt-3">
          Konsultasi Sekarang
        </a>
      </div>
    </section>
  );
}

export default Hero;
