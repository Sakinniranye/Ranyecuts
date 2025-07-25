// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Gallery from './components/GalleryPreview';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      {/* Appointment and Contact as sections or leave out */}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* Add more routes if needed, eg /contact */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
