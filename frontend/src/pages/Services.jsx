import React from "react";
import styles from "../styles/Page.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>
      <p>We provide expert career counselling services to help students and professionals make informed career choices.</p>
      
      <h2>Career Counselling</h2>
      <p>Personalized career guidance sessions to explore career opportunities and set future goals.</p>
      
      <h2>Career Assessment Tests</h2>
      <p>Structured tests to analyze skills, interests, and strengths for a better career path.</p>
      
      <h2>Follow-ups & Support</h2>
      <p>Continuous follow-ups and expert support to ensure career success.</p>
    </div>
  );
};

export default Services;