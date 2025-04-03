import React from "react";
import styles from "../styles/Page.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        {/* Left Side: Text Content */}
        <div className={styles.textContent}>
          <span className={styles.badge}>Education Features</span>
          <h1 className={styles.title}>
            Interactive <span className={styles.emoji}>🌟</span> Learning
          </h1>
          <p className={styles.subtitle}>
            Level up your career with Coyolia's interactive AI-powered tools in one platform, 
            igniting curiosity and insightful learning.
          </p>
        </div>

        {/* Right Side: Video */}
        <div className={styles.videoContainer}>
          <video autoPlay loop muted className={styles.video}>
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
