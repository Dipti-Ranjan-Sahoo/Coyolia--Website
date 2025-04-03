import React from "react";
import styles from "../styles/Page.module.css";

const Insights = () => {
  return (
    <div className={styles.insightsContainer}>
      <h1>Insights & Resources</h1>
      <p>Stay informed with the latest trends, expert opinions, and industry insights in career counselling.</p>
      
      <h2>Blog</h2>
      <p>Read articles on career development, skill-building, and industry trends.</p>
      
      <h2>Webinars</h2>
      <p>Join live and recorded sessions by career experts to gain deeper insights.</p>
      
      <h2>Events</h2>
      <p>Stay updated with upcoming workshops, networking events, and career fairs.</p>
    </div>
  );
};

export default Insights;