import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const regions = [
    "Bengaluru",
    "Tamil Nadu",
    "Andhra Pradesh",
    "Telangana",
    "Delhi",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const scrollToMap = () => {
    document.getElementById("map-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="contact" style={{ padding: "6rem 0", fontFamily: "Arial, sans-serif", backgroundColor: "#FFFAF0" }}>
      {/* Regional Presence Section */}
      <div id="map-section" style={{ marginTop: "50px", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "bold", color: "#ff8c00", textAlign: "center" }}>
          Regional Presence
        </h2>
        <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center" }}>
          Our strategic locations across India enable us to serve clients effectively.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
          {regions.map((region, index) => (
            <React.Fragment key={region}>
              <span style={{ color: "#ff8c00" }}>{region}</span>
              {index < regions.length - 1 && <span style={{ width: "2px", height: "2px", backgroundColor: "#3b82f6" }}></span>}
            </React.Fragment>
          ))}
        </div>

        {/* Google Maps iframe */}
        <div style={{ marginTop: "20px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903454!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645451087254!5m2!1sen!2sin"
            width="100%"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#FB923C" }}>Get In Touch</h2>
          <p style={{ fontSize: "1.125rem", color: "gray-600" }}>We're here to help with your financial advocacy needs</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {/* Left Side: Contact Info */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ width: "24px", height: "24px", color: "#F97316" }}>✉️</span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#1a1a1a" }}>Email</h3>
                <a href="mailto:info@aifbf.org" style={{ fontSize: "0.875rem", color: "#666", textDecoration: "none" }}>
                  info@aifbf.org
                </a>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <span style={{ width: "24px", height: "24px", color: "#10B981" }}>📞</span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#1a1a1a" }}>Phone</h3>
                <a href="tel:+918792006430" style={{ fontSize: "0.875rem", color: "#666", textDecoration: "none" }}>
                  +91 8792006430
                </a>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", cursor: "pointer" }} onClick={scrollToMap}>
              <span style={{ width: "24px", height: "24px", color: "#F97316" }}>📍</span>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#1a1a1a" }}>Address</h3>
                <p style={{ fontSize: "0.875rem", color: "#666" }}>
                  ANDAPURA VILLAGE, ATTIBELE HOBLI,<br />
                  ANEKAL TALUK, ELECTRONIC CITY POST,<br />
                  Bengaluru Karnataka, 560100
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div style={{ flex: "1", minWidth: "300px", backgroundColor: "#f9f9f9", padding: "2rem", borderRadius: "8px" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", fontSize: "0.875rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
              <button type="submit" style={{ width: "100%", backgroundColor: "#FB923C", color: "white", padding: "0.75rem", borderRadius: "4px", fontWeight: "bold", border: "none", cursor: "pointer" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
