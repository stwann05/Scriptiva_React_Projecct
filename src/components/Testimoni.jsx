import React from "react";
import Slider from "react-slick";

function Testimoni() {
  const dataTestimoni = [
    {
      nama: "Rina - Mahasiswa S2",
      teks: "Scriptiva sangat membantu saya menyelesaikan tesis tepat waktu. Konsultasinya jelas dan mudah dipahami.",
      foto: process.env.PUBLIC_URL + "/assets/profile/rina.jpg",
    },
    {
      nama: "Andi - Mahasiswa S1",
      teks: "Bimbingan skripsi jadi lebih terarah, dan olah data statistiknya sangat profesional. Recommended!",
      foto: process.env.PUBLIC_URL + "/assets/profile/andi.jpg",
    },
    {
      nama: "Viera - Mahasiswa Akuntansi",
      teks: "Awalnya bingung mulai dari mana, tapi dengan Scriptiva saya bisa lebih percaya diri menghadapi sidang.",
      foto: process.env.PUBLIC_URL + "/assets/profile/viera.jpg",
    },
  ];

  // Konfigurasi slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section id="testimoni" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-5">Apa Kata Klien Kami?</h2>
        <Slider {...settings}>
          {dataTestimoni.map((item, index) => (
            <div key={index} className="px-4">
              <div
                className="card-testimoni shadow p-4 rounded-3 bg-white mx-auto"
                style={{ maxWidth: "600px" }}
              >
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
                <p className="fst-italic">“{item.teks}”</p>
                <h6 className="fw-bold mt-3">— {item.nama}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimoni;
