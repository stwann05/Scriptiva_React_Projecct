import React from "react";

function Kontak() {
  const whatsappNumber = "6285962687860"; // ganti dengan nomor WA kamu
  const pesan =
    "Halo Scriptiva, saya mau konsultasi terkait riset/skripsi saya.";

  const urlWA = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    pesan
  )}`;

  return (
    <section
      id="kontak"
      className="py-5 text-center text-white"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #0a58ca)",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">Hubungi Kami</h2>
        <p className="mb-4 fs-5">
          Siap dibantu? Klik tombol di bawah untuk langsung chat dengan
          konsultan <strong>Scriptiva</strong>.
        </p>
        <a
          href={urlWA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-lg fw-bold px-4 py-2"
          style={{
            borderRadius: "30px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#25D366"; // warna hijau WA
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#000";
          }}
        >
          💬 Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Kontak;
