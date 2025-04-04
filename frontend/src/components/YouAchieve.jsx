import React from "react";
import styles from "../styles/YouAchieve.module.css";

const YouAchieve = () => {
  return (
    <div className={styles.container}>
      <p className={styles.sectionLabel}></p>
      <h2 className={styles.title}>You Achieve</h2>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/icons/arrow-icon.png" alt="Growth Icon" className={styles.icon} />
        </div>

        <div className={styles.card}>
          Industry mapped skills for new generation jobs
        </div>

        <div className={styles.cardHighlight}>
          Leadership opportunities
        </div>

        <div className={styles.cardBlue}>
          Low cost solution building & prototyping for MSME organisations
        </div>

        <div className={styles.card}>
          Tap into a pool of passive job seekers & create retainable and trustworthy workforce.
        </div>
      </div>
    </div>
  );
};

export default YouAchieve;
