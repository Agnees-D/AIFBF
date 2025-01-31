import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "65px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
