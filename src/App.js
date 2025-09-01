import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Keunggulan from "./components/Keunggulan";
import Proses from "./components/Proses";
import Harga from "./components/Harga";
import Testimoni from "./components/Testimoni";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Keunggulan />
      <Proses />
      <Harga />
      <Testimoni />
      <Kontak />
      <Footer />
    </>
  );
}

export default App;
