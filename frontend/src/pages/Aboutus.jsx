import "./Aboutus.css";
import carImg from "../assets/car.jpg";
import Navbar from "../Home/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="about-wrapper">

          {/* INTRO */}
          <div className="about-header">
            <span className="about-tag">ABOUT CARTRIZO</span>
            <h1>Redefining the Way India Buys & Sells Cars</h1>
            <p>
              Cartrizo is a modern digital automobile marketplace built on trust,
              transparency, and technology — helping buyers and sellers connect
              confidently across India.
            </p>
          </div>

          {/* TRUST STRIP */}
          <div className="about-trust">
            <div>
              <strong>500+</strong>
              <span>Verified Cars</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Top Brands</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Trusted Sellers</span>
            </div>
          </div>

          {/* WHO WE ARE */}
          <div className="about-section">
            <h3>Who We Are</h3>
            <p>
              We are a technology-driven car marketplace connecting verified
              sellers with genuine buyers. Our platform is designed to remove
              uncertainty, hidden costs, and complexity from the car buying
              and selling journey.
            </p>
          </div>

          {/* WHAT WE DO */}
          <div className="about-section">
            <h3>What We Do</h3>
            <p>
              Cartrizo enables users to explore detailed listings, compare vehicles,
              access transparent pricing, and communicate securely with sellers.
              Our smart filters and intuitive interface ensure a seamless experience.
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="about-cards">
            <div className="about-card">
              <h4>Our Mission</h4>
              <p>
                To simplify car buying and selling through a secure, transparent,
                and technology-first platform that prioritizes user trust.
              </p>
            </div>

            <div className="about-card">
              <h4>Our Vision</h4>
              <p>
                To become India’s most trusted digital automobile marketplace,
                setting new standards for reliability and customer experience.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="about-split">
            <div className="about-text-side">
              <h3>Why Choose Cartrizo</h3>
              <ul>
                <li>✔ Verified car listings with quality checks</li>
                <li>✔ Transparent pricing with no hidden charges</li>
                <li>✔ Secure buyer–seller communication</li>
                <li>✔ Fast, intuitive, and user-friendly experience</li>
                <li>✔ Dedicated support for all user groups</li>
              </ul>
            </div>

            <div className="about-image-side">
              <img src={carImg} alt="Car marketplace" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
