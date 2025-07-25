// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // import Link
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero has-before has-bg-image" id="home" aria-label="home">
      <div className="container">
        <p className="hero-text">
          Precision Cuts, Timeless Style – Elevating Your Barbering Experience.
        </p>
        <Link to="/appointment" className="btn has-before">
          <span className="span">Schedule an Appointment</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
