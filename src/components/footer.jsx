import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  };

  const columnStyle = {
    flex: "1 1 calc(25% - 20px)", // Four columns
    minWidth: "300px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color:'#F97316',
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
  };

  const newsletterInputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "10px",
    border: "white",
    marginBottom: "10px",
    backgroundColor:"black",

  };

  const buttonStyle = {
    backgroundColor: "#FB923C",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>AIFBF</h4>
          <p>Empowering financial borrowers<br></br> across India with actionable <br></br>insights and lawful solutions.</p>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <a href="/about" style={linkStyle}>About Us</a>
          <a href="/objectives" style={linkStyle}>Our Objectives</a>
          <a href="/sectors" style={linkStyle}>Our Sectors</a>
          <a href="/contact" style={linkStyle}>Contact</a>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Contact</h4>
          <p> ✉️ info@aifbf.org</p>
          <p> 📞 +91 8792006430</p>
          <p> 📍 Bengaluru, India</p>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Newsletter</h4>
          <p>Subscribe to our newsletter for updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            style={newsletterInputStyle}
          />
          <button style={buttonStyle}>Subscribe</button>
        </div>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        © 2025 AIFBF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
