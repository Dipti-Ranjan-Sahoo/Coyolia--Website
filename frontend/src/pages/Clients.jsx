import React from "react";
import styles from "../styles/Page.module.css";

const Clients = () => {
  return (
    <div className={styles.clientsContainer}>
      <h1>Our Clients</h1>
      <p>We collaborate with industry leaders, academic institutions, and resellers to drive career success.</p>
      
      <h2>Technology Partners</h2>
      <p>Working with top tech companies to integrate AI and data analytics into career counselling.</p>
      
      <h2>Academic Partners</h2>
      <p>Partnering with educational institutions to support student career growth and learning.</p>
      
      <h2>Resellers</h2>
      <p>Expanding our reach through trusted resellers who bring our solutions to a wider audience.</p>
    </div>
  );
};

export default Clients;