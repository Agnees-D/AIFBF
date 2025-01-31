import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sectors from './components/Sectors';
import Leadership from './components/Leadership';
import Navbar from './components/Navbar';
import Layout from './components/layout';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
