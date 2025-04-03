import React from "react";
import styles from "../styles/Page.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About Us</h1>
      <p className={styles.introText}>
        We are dedicated to guiding students toward their ideal career paths. Our expert counsellors help students make informed decisions about their future.
      </p>

      {/* Vision Section */}
      <div className={styles.section}>
        <div className={styles.headingBox}>
          <h2 className={styles.sectionTitle}>Vision</h2>
        </div>
        <p className={styles.sectionText}>
          At Coyolia Technologies, our vision is to create a world of abundant opportunities for youth by leveraging the power of the Digital Public Goods Alliance. We aim to harness Indian and open-source IP to tackle global challenges, reduce corruption, and empower communities worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <div className={styles.section}>
        <div className={styles.headingBox}>
          <h2 className={styles.sectionTitle}>Mission</h2>
        </div>
        <p className={styles.sectionText}>
          As Digital Ambassadors, Coyolia Technologies will champion open-source community projects in India and beyond. Collaborating with the Government of India and DPGA, we will promote these solutions in new regions, infuse innovative skills and training for youth in Ethiopia, India, and African Union members, and support open standards-based technologies to foster a zero-corruption environment. We stay local while integrating global best practices.
        </p>
      </div>

      {/* Values Section */}
      <div className={styles.section}>
        <div className={styles.headingBox}>
          <h2 className={styles.sectionTitle}>Values</h2>
        </div>
        <p className={styles.sectionText}>
          We uphold the values of integrity, inclusivity, and innovation to empower students and professionals worldwide.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
