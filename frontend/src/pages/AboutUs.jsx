import React from "react";
import styles from "../styles/Page.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About Us</h1>
      

      {/* Our Vision Section (Updated Layout) */}
      <div className={styles.visionRow}>
        <div className={styles.visionLeft}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
        </div>
        <div className={styles.visionRight}>
          <p className={styles.sectionText}>
            At Coyolia, our vision is to revolutionize the way individuals learn and grow.
            We are committed to providing a space where creativity, innovation, and knowledge
            converge to shape the future of learning. Our platform is dedicated to offering a
            diverse range of educational opportunities that cater to the unique needs and aspirations
            of every learner.
          </p>
        </div>
      </div>



      {/* What Sets Us Apart Section */}
      <div className={styles.whyUsContainer}>
        <h2>What sets us apart?</h2>
        <p>
          We understand the dynamic challenges of career advancement and the evolving landscape of education. That's why we offer a curated selection of courses crafted to meet the diverse needs of our learners. Whether you're just starting out in your career journey or looking to pivot to new opportunities, AmbarGlow provides the tools and resources to succeed.
        </p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img
              src="/public/learning1.jpg"
              alt="Comprehensive Learning Path"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Comprehensive Learning Path</h3>
            <p>
              Tailored courses designed by industry experts to equip you with practical skills and knowledge.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/public/learning2.jpg"
              alt="Flexible Learning Options"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Flexible Learning Options</h3>
            <p>
              Access our courses online or join us in person for workshops and hands-on training sessions.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="/public/learning3.jpg"
              alt="Career Guidance"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <h3>Career Guidance</h3>
            <p>
              Personalized support to help you navigate your career path, from resume building to interview preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
