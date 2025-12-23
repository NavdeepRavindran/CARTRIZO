import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>CARTRIZO</h2>
          <p>
            Your trusted marketplace to buy, sell, and explore
            verified cars from top brands.
          </p>

          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>New Cars</li>
            <li>Used Cars</li>
            <li>Sell Your Car</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Pricing</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📞 0806 8441 441</p>
          <p>✉ support@cartrizo.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CARTRIZO. All rights reserved.
      </div>
    </footer>
  );
}
