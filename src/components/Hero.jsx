import React, { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaChartBar,
} from "react-icons/fa";

const slides = [
  {
    icon: <FaGraduationCap size={50} color="#233657" />,
    title: "Scriptiva – Konsultan Pendidikan",
    desc: "Bantu Risetmu dengan CEPAT, TEPAT, & AKURAT",
    btnText: "Konsultasi Sekarang",
    btnLink: "#kontak",
    img: process.env.PUBLIC_URL + "/assets/hero-banner/person1.png",
  },
  {
    icon: <FaChalkboardTeacher size={50} color="#233657" />,
    title: "Konsultan Penelitian",
    desc: "Telah membantu lebih dari 1200+ klien sukses",
    btnText: "Mulai Sekarang",
    btnLink: "#kontak",
    img: process.env.PUBLIC_URL + "/assets/hero-banner/person2.png",
  },
  {
    icon: <FaChartBar size={50} color="#233657" />,
    title: "Bimbingan & Analisis Data",
    desc: "Skripsi, Tesis, hingga Olah Data Statistik",
    btnText: "Hubungi Kami",
    btnLink: "#kontak",
    img: process.env.PUBLIC_URL + "/assets/hero-banner/person3.png",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // 🔹 untuk mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    isDragging.current = false;
  };

  // 🔹 untuk desktop
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const endX = e.clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // 🔹 next & prev
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // 🔹 auto change
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-md-5 hero-text">
          <h1 className="d-flex align-items-center gap-3">
            {slides[current].icon}
            {slides[current].title}
          </h1>
          <p className="lead">{slides[current].desc}</p>
          <a href={slides[current].btnLink} className="btn btn-primary">
            {slides[current].btnText}
          </a>
        </div>
        <div className="col-md-7 hero-image text-center">
          <img
            src={slides[current].img}
            alt="Hero Banner"
            className="hero-image img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
