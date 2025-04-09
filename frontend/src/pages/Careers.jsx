import React from "react";
import styles from "../styles/Page.module.css";

const Careers = () => {
  return (
    <div className={styles.careersContainer}>
      <h1>Careers</h1>
      <p>Join our team and make a difference in the future of career counselling.</p>

      {/* ✅ Banner Section Start */}
      <div className={styles.careerBanner}>
        <div className={styles.bannerText}>
          <h2>Let’s revolutionize learning</h2>
          <p>
            Individually, we bring our unique perspectives to reimagine the way knowledge is shared.
            Together, we can improve lives by empowering our employees, learners, instructors, and businesses.
          </p>
        </div>
        <div className={styles.bannerImage}>
          <img src="/public/image.png" alt="Career Banner" />
        </div>
      </div>
      {/* ✅ Banner Section End */}

      <h2>Life @Coyolia</h2>
      <p>Experience a dynamic work environment that fosters innovation and growth.</p>

      {/* ✅ Why Us Section Start */}
      <div className={styles.whyUsContainer}>
        <h2>Why Coyolia?</h2>
        <p>
          We aspire to be as vibrant and dynamic as the communities we serve, as inquisitive as those who use our platform, and as revolutionary as the future we strive to open for everyone.
        </p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Inclusive</h3>
            <p>
              When people feel supported, everyone benefits. We know that doesn’t just happen, but we’re dedicated to making it a reality. We’re building teams as diverse as the people who use our platform.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Curious</h3>
            <p>
              Learning is who we are — inside and out. One reason we’re so motivated to continue to open up learning worldwide is because we recognize the power it has for us at Coyolia. We never stop evolving, and neither do you.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revolutionary</h3>
            <p>
              Why keep knowledge to yourself? We’d rather share it with the people who need it most. We improve the lives of learners and instructors we serve — using our talents to empower theirs.
            </p>
          </div>
        </div>
      </div>
      {/* ✅ Why Us Section End */}
    </div>
  );
};

export default Careers;
