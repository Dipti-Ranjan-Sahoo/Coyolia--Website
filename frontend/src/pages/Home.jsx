import React from "react";
import styles from "../styles/Page.module.css";
import BookSession from "../components/BookSession";
import Testimonials from "../components/Testimonials";
import NumbersSection from "../components/NumbersSection";
import YouAchieve from "../components/YouAchieve"; // Import the section

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
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

        {/* Video Section */}
        <div className={styles.videoContainer}>
          <video autoPlay loop muted className={styles.video}>
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Numbers That Matter Section */}
      <NumbersSection />

      {/* Move BookSession Down */}
      <div className={styles.bookSessionWrapper}>
        <BookSession />
      </div>

      {/* You Achieve Section - Move before Testimonials */}
      <YouAchieve />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
