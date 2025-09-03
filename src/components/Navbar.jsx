import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Atas */}
      <nav className="navbar navbar-light bg-light fixed-top p-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="#hero">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
              alt="Scriptiva"
              style={{ height: "40px" }}
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 mb-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#hero">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#keunggulan">
                <strong>About</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#layanan">
                <strong>Service</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#testimoni">
                <strong>Testimonial</strong>
              </a>
            </li>
          </ul>

          {/* Hamburger Mobile */}
          <button
            className="btn border-0 d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="btn-close ms-auto mb-4"
            onClick={() => setIsOpen(false)}
          ></button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#hero"
                onClick={() => setIsOpen(false)}
              >
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#keunggulan"
                onClick={() => setIsOpen(false)}
              >
                <strong>About</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#layanan"
                onClick={() => setIsOpen(false)}
              >
                <strong>Service</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimoni"
                onClick={() => setIsOpen(false)}
              >
                <strong>Testimonial</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Styling Sidebar */}
      <style>
        {`
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            background: #fff;
            overflow-x: hidden;
            transition: 0.3s;
            z-index: 1050;
            box-shadow: 2px 0 5px rgba(0,0,0,0.2);
          }
          .sidebar.open {
            width: 250px;
          }
          .sidebar-content {
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
          }
          .sidebar .nav-link {
            padding: 10px 0;
            font-size: 1.1rem;
            color: #233657;
          }
          .sidebar .nav-link:hover {
            color: #0d6efd;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
