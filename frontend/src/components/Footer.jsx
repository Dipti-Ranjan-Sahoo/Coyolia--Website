import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Contact Info */}
        <div className={styles.info}>
          <h3>Info/</h3>
          <p>#405, Aakruti Nivas</p>
          <p>Apartments, Czech Colony</p>
          <p>Hyderabad, 500018</p>
          <p>Email: <a href="mailto:sales@coyolia.com">sales@coyolia.com</a></p>
          <p>Phone: <a href="tel:+919885001831">+91 9885001831</a></p>
        </div>
        
        {/* Menu Links */}
        <div className={styles.menu}>
          <h3>Menu/</h3>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/accessibility">Accessibility Statement</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyRight}>
        <p>© 2025 by Coyolia.</p>
        <p>Made with ❤️ by Coyolia Team</p>
      </div>
    </footer>
  );
};

export default Footer;
