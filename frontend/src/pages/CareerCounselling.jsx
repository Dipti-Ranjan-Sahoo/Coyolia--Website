import React from "react";
import AuthForm from "../components/AuthForm";
import styles from "../styles/Page.module.css";

const CareerCounselling = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Career Counselling</h1>
      <p>Get expert guidance for your career growth.</p>
      
      {/* Authentication Section */}
      <AuthForm />
    </div>
  );
};

export default CareerCounselling;
