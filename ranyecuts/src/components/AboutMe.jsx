import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';

const profileImg = process.env.PUBLIC_URL + '/images/Ola2.jpg';

const AboutMe = () => (
  <section className="about-section" id="about-me">
    <div className="about-card">
      <div className="about-photo">
        <img src={profileImg} alt="Samuel Akinniranye at work" className="about-img" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I’m Samuel Akinniranye, the barber behind Ranyecuts. Barbering is more than just a service to me—it's an art and a passion. For over 7 years, I’ve been delivering crisp fades, clean lineups, and personalized cuts to help people feel their best.
        </p>
        <p className="about-text">
          I started Ranyecuts in Indianapolis while at Purdue, and since then, I’ve been blessed to serve hundreds of clients, building a loyal community who value quality and precision. My promise? Every cut gets my full attention and care, every time.
        </p>
        <p className="about-text">
          Whether you want something classic or modern, I’ve got you. Book now and let’s get you looking sharp!
        </p>
        <Link to="/appointment" className="btn has-before">Book Your Appointment</Link>
      </div>
    </div>
  </section>
);

export default AboutMe;
