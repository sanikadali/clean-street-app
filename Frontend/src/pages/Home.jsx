import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Clean Street</h1>
        <p>
          Report and track civic issues like garbage, potholes, and water leaks.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2 className="section-title">How It Works</h2>

        <div className="card-grid">
          <div className="card">
            <h3>📍 Report Issue</h3>
            <p>Submit complaints with photos and GPS location.</p>
          </div>

          <div className="card">
            <h3>🔄 Track Status</h3>
            <p>Monitor updates from authorities in real-time.</p>
          </div>

          <div className="card">
            <h3>🤝 Community Support</h3>
            <p>Vote and comment to increase visibility of important issues.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section alt-bg">
        <h2 className="section-title">Key Features</h2>

        <div className="feature-grid">
          <div>
            <h4>📸 Photo Upload</h4>
            <p>Attach images to complaints for faster resolution.</p>
          </div>

          <div>
            <h4>🗺 Location Based Reporting</h4>
            <p>Automatically assign complaints to correct authority.</p>
          </div>

          <div>
            <h4>📊 Admin Dashboard</h4>
            <p>Authorities can monitor and manage reports easily.</p>
          </div>

          <div>
            <h4>🔐 Secure Access</h4>
            <p>Role-based authentication for users and admins.</p>
          </div>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="section">
        <h2 className="section-title">Why Clean Street Matters</h2>

        <div className="center-text">
          <p>
            Clean and well-maintained streets improve public health and safety.
          </p>
          <p>
            Transparent tracking ensures faster response and accountability.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section alt-bg text-center">
        <h2 className="section-title">What People Say</h2>

        <div className="testimonial-card">
          <p>
            “Clean Street helped our neighborhood fix long-standing garbage
            issues within days. Amazing platform!”
          </p>
          <h4>— Local Resident</h4>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Be the Change in Your Community</h2>
        <p>Join Clean Street and start reporting issues today.</p>

        <Link to="/register">
          <button className="cta-btn">Create Account</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
