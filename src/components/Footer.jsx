import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFileAlt,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9875747528426!2d110.34961837481863!3d-7.791139492228812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a598ce64aea55%3A0x537067a10c4bf10a!2sSCRIPTIVA!5e0!3m2!1sid!2sid!4v1756776593667!5m2!1sid!2sid"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-left">
            <h4>PT. Scriptiva Reaserch Indonesia</h4>
            <p>
              Jl. Demakan Baru Gg. Kenanga No.767, TR III,
              <br />
              Tegalrejo, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa
              Yogyakarta 55244
            </p>
            <p>
              <FaPhoneAlt /> 6287785330349
            </p>
            <p>
              <FaEnvelope /> Scriptiva@gmail.com
            </p>
            <p>
              <FaWhatsapp /> 6287785330349
            </p>
          </div>

          {/* Right Column */}
          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="mb-1">
            <FaFileAlt /> © {new Date().getFullYear()}{" "}
            <strong>Scriptiva</strong>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
