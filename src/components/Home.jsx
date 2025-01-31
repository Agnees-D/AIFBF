import React, { useState } from "react";
import myVideo from '../components/homepagebgvd.mp4';

const Home = () => {
  const [isWindowVisible, setIsWindowVisible] = useState(false);

  const containerStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    color: "#fff",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(12, 8, 8, 0.80)",
    zIndex: 0,
  };

  const leftContentStyle = {
    position: "absolute",
    top: "30%",
    left: "10%",
    transform: "translateY(-50%)",
    textAlign: "left",
    maxWidth: "400px",
  };

  const headingStyle = {
    fontSize: "48px",
    marginTop: "250px",
    color: "#fff",
    maxWidth: "100%",
    lineHeight: "1",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const subHeadingStyle = {
    fontSize: "18px",
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#ddd",
    maxWidth: "100%",
    textAlign: "left",
    whiteSpace: "nowrap",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "15px",
  };

  const buttonStyle = {
    padding: "15px 25px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#F6AD55",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonStyleAlt = {
    ...buttonStyle,
    backgroundColor: "transparent",
    border: "2px solid #ABBA7C",
  };

  const smallWindowStyle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "black",
    boxShadow: "0 4px 8px rgba(213, 8, 8, 0.2)",
    zIndex: 30,
    width: "300px",
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} src={myVideo} autoPlay loop muted />
      <div style={overlayStyle}></div>
      <div style={leftContentStyle}>
        <h2 style={headingStyle}>
          Advocating for Financial<br />
          <span style={{ color: "#F6AD55" }}>Inclusive</span> and
          <span style={{ color: "#ABBA7C" }}> Borrower</span>
          <br />Empowerment
        </h2>
        <p style={subHeadingStyle}>
          We're committed to creating a more equitable financial system where <br />
          everyone has access to fair lending practices and opportunities for <br />
          financial growth.
        </p>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setIsWindowVisible(true)}>
            Get Started →
          </button>
          <button style={buttonStyleAlt} onClick={() => setIsWindowVisible(true)}>
            Learn More
          </button>
        </div>
      </div>
      {isWindowVisible && (
        <div style={smallWindowStyle}>
          <h3>Welcome to AIFBF</h3>
          <button
            style={{ ...buttonStyle, width: "100%", marginBottom: "10px" }}
            onClick={() => alert("Sign In process started!")}
          >
            Sign In
          </button>
          <button
            style={{ ...buttonStyleAlt, width: "100%" }}
            onClick={() => setIsWindowVisible(false)}
          >
            Later
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
