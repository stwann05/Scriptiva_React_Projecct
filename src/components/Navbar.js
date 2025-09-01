import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-3">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img
            src="/assets/logo.png"
            alt="Scriptiva"
            style={{ height: "40px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#keunggulan">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proses">
                Proses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#harga">
                Harga
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimoni">
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
