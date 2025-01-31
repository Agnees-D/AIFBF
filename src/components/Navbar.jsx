import React from 'react';
import { Link } from 'react-router-dom';
import { LuWallet } from "react-icons/lu";
const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "black",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10,
    height: "65px",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const navLinksStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    padding: '10px',
    display: 'block',
    fontSize: '16px',
  };

  const contactLinkStyle = {
    backgroundColor: "#FB923C",
    color: 'white',
    borderRadius: '5px',
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    margin: "0",
  };

  const logoTextStyle = {
    fontSize: "22px",
    color: "white",
    marginLeft: "10px",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <LuWallet size={40} color="white" /> {/* Example of a logo icon */}
        <h5 style={logoTextStyle}>AIFBF</h5>
      </div>
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = 'yellow')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = 'yellow')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/sectors"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = 'yellow')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Sectors
          </Link>
        </li>
        <li>
          <Link
            to="/leadership"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = 'yellow')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            Leadership
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ ...linkStyle, ...contactLinkStyle }}
            onMouseOver={(e) => (e.target.style.backgroundColor = 'yellow')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#FB923C')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
