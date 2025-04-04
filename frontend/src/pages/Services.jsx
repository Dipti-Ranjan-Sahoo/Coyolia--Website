import React from "react";
import styles from "../styles/Page.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>
      <p>We provide expert career counselling services to help students and professionals make informed career choices.</p>
      
      <h2>Career Counselling</h2>
      <p>
        Our personalized career counselling sessions help individuals explore various career opportunities, 
        align their skills with the right industry, and set future career goals. 
      </p>
      <ul>
        <li>One-on-One career guidance with experienced counsellors</li>
        <li>Exploration of different career paths based on your skills & interests</li>
        <li>Resume building & interview preparation</li>
        <li>Assistance in choosing the right courses and certifications</li>
        <li>Market trends & job placement assistance</li>
      </ul>

      <h2>Career Assessment Tests</h2>
      <p>Structured tests to analyze skills, interests, and strengths for a better career path.</p>

      <h2>Follow-ups & Support</h2>
      <p>Continuous follow-ups and expert support to ensure career success.</p>
    </div>
  );
};

export default Services;
