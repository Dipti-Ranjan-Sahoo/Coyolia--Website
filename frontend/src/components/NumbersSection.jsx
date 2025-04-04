import React from "react";
import styles from "../styles/NumbersSection.module.css";

const NumbersSection = () => {
  return (
    <section className={styles.numbersContainer}>
      <h2 className={styles.heading}>Numbers That Matter</h2>
      <div className={styles.statsContainer}>
        <div className={`${styles.statBox} ${styles.boxPurple}`}>
          <span className={styles.boldText}>3</span> Cities
        </div>
        <div className={`${styles.statBox} ${styles.boxBlue}`}>
          <span className={styles.boldText}>300+</span> Graduates
        </div>
        <div className={`${styles.statBox} ${styles.boxBlack}`}>
          <span className={styles.boldText}>3000</span> Talent Base Of Mid Career Professionals
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
