import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryPreview.css';

const previewImages = [
  { title: "Taper Fades", image: process.env.PUBLIC_URL + "/images/Marvin.jpg" },
  { title: "Burst Fades", image: process.env.PUBLIC_URL + "/images/Demi.jpg" },
  { title: "Bald Fade", image: process.env.PUBLIC_URL + "/images/Daniel.PNG" },
  { title: "Drop Fades", image: process.env.PUBLIC_URL + "/images/Shaun2.PNG" }
];

const GalleryPreview = () => (
  <section className="gallery-preview" id="gallery">
    <div className="preview-title-row">
      <h2>Latest Photo Gallery</h2>
      <Link to="/gallery" className="btn has-before">
        <span className="span">Explore More Gallery</span>
      </Link>
    </div>
    <div className="preview-row">
      {previewImages.map((item, i) => (
        <Link to="/gallery" className="preview-card" key={i}>
          <img src={item.image} alt={item.title} className="preview-img" />
          <div className="preview-overlay">
            <h3>{item.title}</h3>
            <span className="view-more-btn">View More</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default GalleryPreview;
