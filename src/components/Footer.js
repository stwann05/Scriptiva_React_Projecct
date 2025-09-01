import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>Scriptiva</strong>. All Rights
          Reserved.
        </p>
        <div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 text-decoration-none"
          >
            📷 Instagram
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 text-decoration-none"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
