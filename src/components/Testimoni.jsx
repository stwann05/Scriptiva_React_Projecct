import React, { useState } from "react";

function Testimoni() {
  const [active, setActive] = useState(null);

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
        <h2 className="fw-bold mb-4">Apa Kata Klien Kami?</h2>
        <div className="row g-4">
          {dataTestimoni.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                className={`card-testimoni h-100 p-4 ${
                  active === index ? "is-active" : ""
                }`}
                // Fallback mobile: tap untuk toggle efek “hover”
                onTouchStart={() => setActive(active === index ? null : index)}
                // Aksesibilitas: bisa toggle via keyboard juga
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActive(active === index ? null : index);
                  }
                }}
              >
                <p className="teks-testimoni">“{item.teks}”</p>
                <h6 className="nama-testimoni">— {item.nama}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
