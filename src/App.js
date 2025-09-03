import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "@fontsource/outfit";

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
    </>
  );
}

export default App;
