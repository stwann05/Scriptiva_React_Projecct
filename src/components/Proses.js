import React from "react";

function Proses() {
  return (
    <section id="proses" className="p-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Bagaimana Prosesnya?</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>1️⃣ Konsultasi</h4>
              <p>
                Hubungi kami dan ceritakan kebutuhan riset atau bimbinganmu.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>2️⃣ Diskusi</h4>
              <p>
                Kami akan memberikan solusi, metode, dan rencana kerja yang
                sesuai.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>3️⃣ Eksekusi</h4>
              <p>
                Proses pengerjaan dilakukan sesuai timeline yang disepakati.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow-sm h-100">
              <h4>4️⃣ Hasil</h4>
              <p>
                Kamu menerima hasil riset/bimbingan dengan laporan yang jelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proses;
