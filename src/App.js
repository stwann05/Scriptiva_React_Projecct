import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "@fontsource/outfit";

import { FaWhatsapp } from "react-icons/fa"; // import icon WhatsApp

import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Keunggulan from "./components/Keunggulan";
import Proses from "./components/Proses";
import Layanan from "./components/Layanan";
import Testimoni from "./components/Testimoni";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Keunggulan />
      <Proses />
      <Layanan />
      <Testimoni />
      <Footer />

      {/* Tombol WhatsApp Mengambang */}
      <a
        href="https://wa.me/6281315292224?text=Halo%20Scriptiva%2C%20saya%20ingin%20konsultasi%20lebih%20lanjut."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp size={32} color="#fff" />
      </a>
    </>
  );
}

export default App;
