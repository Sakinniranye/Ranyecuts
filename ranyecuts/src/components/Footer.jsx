import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-bg-image" style={{ backgroundImage: "url('./images/background.png')" }}>
      <div className="container">

        <div className="footer-top">

          <div className="footer-link-box">

            <ul className="footer-list">
              <li><p className="footer-list-title">Update</p></li>
              <li><button className="footer-link has-before">Update</button></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Update</p></li>
              <li><button className="footer-link has-before">Update</button></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Update</p></li>
            </ul>
            <ul className="footer-list">
              <li><p className="footer-list-title">Contact Us</p></li>
              <li className="footer-list-item">
              </li>
            </ul>

          </div>

        </div>a

        <div className="footer-bottom">
          <p className="copyright">
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
