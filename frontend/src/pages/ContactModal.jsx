import React from "react";
import styles from "../styles/ContactModal.module.css";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.heading}>Contact Coyolia Team</h2>

        <label>Reason for Contact</label>
        <select className={styles.input}>
          <option value="">-- Select an option --</option>
          <option value="career">Career Counselling</option>
          <option value="partnership">Partnership</option>
          <option value="general">General Inquiry</option>
        </select>

        <label>Full Name</label>
        <input type="text" className={styles.input} placeholder="e.g., John Doe" />

        <label>Email Address</label>
        <input type="email" className={styles.input} placeholder="you@example.com" />

        <label>Phone Number (optional)</label>
        <input type="tel" className={styles.input} placeholder="+91 9876543210" />

        <button className={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
};

export default ContactModal;
