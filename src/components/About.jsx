import React, { useState } from "react";
import myimage1 from './img1.jpeg';
import myimage2 from './img2.jpeg';

const About = () => {
const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "140px",
        maxWidth: "1390px",
        backgroundColor:"#FFFAF0",
      }}
    >
      {/* Video Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "20px",
          marginTop: "-700px", // Adjust this value to move the video down
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <video style={{ width: "100%", display: "block" }} autoPlay loop muted>
          <source src="/videos/aboutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div
        style={{
          marginLeft: "80px",
          flex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "orange",
            marginLeft: "170px",
            marginTop: "-50px", // Adjust this value to move it upward
          }}
        >
          About Us
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "30px",
            lineHeight: "1.4",
          }}
        >
          The<span style={{ color: "green" }}>
            {" "}
            All India Financial Borrowers Federation (AIFBF)
          </span>{" "}
          is a visionary <br />
          platform dedicated to empowering financial borrowers across India.
          We <br />
          provide actionable insights and lawful solutions to help individuals
          and <br />
          businesses thrive without hurdles. Acting as a catalyst for economic{" "}
          <br />
          transformation, AIFBF bridges the gap between policymakers, financial{" "}
          <br />
          institutions, and borrowers.
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.",
          }}
        >
          With a forward-looking and proactive approach, we aim to foster a
          better <br />
          financial ecosystem for a brighter future.
        </p>

        {/* Cards Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              flex: "1",
              maxWidth: "1000px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginLeft: "30px",
            }}
          >
            <h3
              style={{
                color: "#F09319",

                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              10K+
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Borrowers Helped
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1",
              maxWidth: "1000px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginRight: "30px",
            }}
          >
            <h3
              style={{
                color: "green",

                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              95%
            </h3>
            <p style={{ fontSize: "14px", color: "#555" }}>Success Rate</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            gap: "20px",
          }}
        >
          {/* Left Content */}
          <div style={{ flex: "1" }}>
            {/* Card 1 Heading */}
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#F09319",
                marginTop: "80px",
                marginLeft: "-450px",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                marginBottom: "50px",
                marginLeft: "-650px",
                alignItems: "center",
              }}
            >
              To facilitate economic growth and enhance the financial ecosystem
              while equipping <br />
              stakeholders with essential skills for development.
            </p>

            {/* Card 2 Heading */}
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "#F09319",
                marginTop: "150px",
                marginLeft: "-450px",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                margintop: "50px",
                marginLeft: "-650px",
                alignItems: "center",
              }}
            >
              To serve as a conduit between the government and beneficiaries,
              addressing key <br />
              economic issues, policies, and regulations through collaboration
              with stakeholders.
            </p>
          </div>

          
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* First Video */}
          <div style={{ width: "450px", height: "250px", borderRadius: "10px", overflow: "hidden", position: "relative", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <video style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay loop muted>
              <source src="/videos/aboutvideo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setShowModal1(true)}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "10px 40px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                border: "2px solid #ABBA7C",
              }}
            >
              Learn About Our Vision
            </button>
          </div>

          {/* Second Video */}
          <div style={{ width: "450px", height: "250px", borderRadius: "10px", overflow: "hidden", position: "relative", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <video style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay loop muted>
              <source src="/videos/aboutvideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setShowModal2(true)}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "10px 40px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                border: "2px solid #ABBA7C",

              }}
            >
              Learn About Our Mission
            </button>
          </div>
        </div>
        {showModal1 && (
          <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1000" }}>
            <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", width: "80%", maxWidth: "500px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "orange", marginBottom: "20px" }}>More About Us</h2>
              <img
        src={myimage1} 
        alt="About Us"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
                Welcome to the All India Financial Borrowers Federation (AIFBF). Here, we strive to provide financial empowerment and support to all borrowers across the nation.
              </p>
              <button onClick={() => setShowModal1(false)} style={{ backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "10px 20px", cursor: "pointer", fontSize: "16px" }}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal 2 */}
        {showModal2 && (
          <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1000" }}>
            <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "20px", width: "80%", maxWidth: "500px", textAlign: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "orange", marginBottom: "20px" }}>Our Mission</h2>
              <img
        src={myimage2} 
        alt="About Us"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
                To serve as a conduit between the government and beneficiaries, addressing key economic issues, policies, and regulations through collaboration with stakeholders.
              </p>
              <button onClick={() => setShowModal2(false)} style={{ backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", padding: "10px 20px", cursor: "pointer", fontSize: "16px" }}>
                Close
              </button>
            </div>
          </div>
        )}
        
        
        
        </div>
      </div>
    </div>
  );
};

export default About;
