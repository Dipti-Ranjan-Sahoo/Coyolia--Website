import React from "react";
import styles from "../styles/Page.module.css";

const Industries = () => {
  return (
    <div className={styles.industriesContainer}>
      <h1>Industries We Serve</h1>
      <p>Our career counselling solutions cater to various industries, ensuring professional growth and success.</p>
      
      <h2>EdTech</h2>
      <p>Supporting students and educators with AI-driven learning and career development tools.</p>
      
      <h2>Retail</h2>
      <p>Helping retail professionals upskill and find better career opportunities.</p>
      
      <h2>Banking Services</h2>
      <p>Guiding individuals towards careers in finance, banking, and fintech industries.</p>
    </div>
  );
};

export default Industries;