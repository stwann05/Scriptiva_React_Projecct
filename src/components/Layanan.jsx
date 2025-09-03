import React from "react";
import {
  FaDatabase,
  FaBook,
  FaLightbulb,
  FaFileAlt,
  FaComments,
  FaGraduationCap,
  FaPenFancy,
} from "react-icons/fa";

function Layanan() {
  const layanan = [
    {
      nama: "Data Solve",
      icon: <FaDatabase size={60} color="#233657" />,
      paket: [
        {
          tipe: "Reguler",
          fitur: [
            "Output & Input Software Statistik",
            "Interpretasi Data",
            "Rekording Olah Data",
          ],
        },
        {
          tipe: "Premium",
          fitur: [
            "Output & Input Software Statistik",
            "Interpretasi Data",
            "Rekording Olah Data",
            "Pelatihan Online Proses Olah Data (120 menit)",
            "Diskusi Eksklusif membaca dan memahami data",
          ],
        },
      ],
    },
    {
      nama: "ScolarHub",
      icon: <FaBook size={60} color="#233657" />,
      fitur: [
        "Dibimbing mentor profesional & berpengalaman hingga tuntas!",
        "Diskusi kolaboratif dengan mentor sebelum pengambilan data",
        "Dibimbing cara pengolahan data dengan software statistik",
        "Tersedia berbagai software statistika (SmartPLS, SPSS, Minitab, STATA, Eviews, AMOS, NVIVO, Rstudio, Python, LISREL, Jamovi)",
        "Penjelasan eksklusif hasil analisis secara rinci dan jelas",
        "Garansi pengolahan data ulang",
      ],
    },
    {
      nama: "Pembuatan Proposal",
      icon: <FaLightbulb size={60} color="#233657" />,
      fitur: [
        "Penentuan Judul",
        "Penyusunan Desain Penelitian",
        "Asistensi Penulisan Proposal",
        "Mentoring Penuh",
        "Pendampingan Revisi",
        "Plagiasi Maksimal 20%",
      ],
    },
    {
      nama: "Judul & Artikel Jurnal",
      icon: <FaFileAlt size={60} color="#233657" />,
      paket: [
        {
          tipe: "Reguler - 150K",
          fitur: [
            "Jurnal referensi utama terindeks Scopus",
            "3 judul penelitian dari tema yang diminta",
            "Gap research",
            "1 artikel/judul",
          ],
        },
        {
          tipe: "Premium - 500K",
          fitur: [
            "Jurnal referensi utama terindeks Scopus",
            "Penemuan judul sampai disetujui",
            "Gap research (2 artikel/judul)",
            "1 artikel/judul",
          ],
        },
        {
          tipe: "Indikator - 50K",
          fitur: [
            "Artikel jurnal terindeks Scopus",
            "Pencarian jurnal penelitian terdahulu dan indikator penelitian",
            "Biaya per artikel",
          ],
        },
        {
          tipe: "Kuesioner - 100K",
          fitur: [
            "Artikel jurnal terindeks Scopus",
            "Pencarian jurnal untuk kuesioner penelitian",
            "Biaya per artikel",
          ],
        },
      ],
    },
    {
      nama: "Pembahasan",
      icon: <FaComments size={60} color="#233657" />,
      fitur: [
        "Olah data",
        "Interpretasi Olah data",
        "Penyusunan Pembahasan",
        "Penarikan Kesimpulan",
      ],
    },
    {
      nama: "Full Skripsi, Tesis, dan Disertasi",
      icon: <FaGraduationCap size={60} color="#233657" />,
      fitur: [
        "Penentuan Judul",
        "Penyusunan Desain Penelitian",
        "Asistensi Penulisan Proposal",
        "Asistensi Penyusunan Pembahasan",
        "Pengolahan Data",
        "Pendampingan Selama 6 Bulan",
        "Mentoring Penuh",
        "Pendampingan Revisi",
        "Plagiasi Maksimal 20%",
        "PPT",
      ],
    },
    {
      nama: "Parafrase",
      icon: <FaPenFancy size={60} color="#233657" />,
      fitur: ["Cek Turnitin", "Plagiasi dibawah 20%"],
    },
  ];

  return (
    <section id="layanan" className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="layanan fw-bold mb-5">Layanan Scriptiva</h1>
        <div className="row g-4">
          {layanan.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100 border-0 rounded-4 p-4 d-flex flex-column layanan-card">
                <div className="mb-3">{item.icon}</div>
                <h4 className="mb-3">{item.nama}</h4>

                {/* Kalau ada paket */}
                {item.paket ? (
                  <div>
                    {item.paket.map((paket, i) => (
                      <div key={i} className="mb-3 text-start">
                        <h6 className="fw-bold">{paket.tipe}</h6>
                        <ul className="list-unstyled text-muted ms-2">
                          {paket.fitur.map((fitur, j) => (
                            <li key={j}>• {fitur}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Kalau hanya fitur biasa
                  <ul className="list-unstyled text-muted text-start">
                    {item.fitur.map((fitur, i) => (
                      <li key={i}>• {fitur}</li>
                    ))}
                  </ul>
                )}

                <a href="#kontak" className="btn-custom mt-auto rounded-pill">
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Layanan;
