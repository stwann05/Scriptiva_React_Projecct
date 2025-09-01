import React from "react";

function Testimoni() {
  const dataTestimoni = [
    {
      nama: "Rina - Mahasiswa S2",
      teks: "Scriptiva sangat membantu saya menyelesaikan tesis tepat waktu. Konsultasinya jelas dan mudah dipahami.",
    },
    {
      nama: "Andi - Mahasiswa S1",
      teks: "Bimbingan skripsi jadi lebih terarah, dan olah data statistiknya sangat profesional. Recommended!",
    },
    {
      nama: "Siti - Mahasiswa Akuntansi",
      teks: "Awalnya bingung mulai dari mana, tapi dengan Scriptiva saya bisa lebih percaya diri menghadapi sidang.",
    },
  ];

  return (
    <section id="testimoni" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Apa Kata Klien Kami?</h2>
        <div className="row g-4">
          {dataTestimoni.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card h-100 p-4 shadow-sm border-0"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <p
                  className="fst-italic text-muted"
                  style={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  “{item.teks}”
                </p>
                <h6 className="mt-3 fw-bold text-primary">— {item.nama}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
