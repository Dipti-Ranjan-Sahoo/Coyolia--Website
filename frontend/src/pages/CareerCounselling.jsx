import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/CareerCounselling.module.css';

const CareerCounselling = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book-session');
  };

  return (
    <div className={styles.container}>
      <h1>Career Counselling</h1>
      <p>Get expert guidance for your career growth with our personalized sessions.</p>

      {/* ✅ Free 15-Minute Counseling Session Card */}
      <div className={styles.sessionCard} onClick={handleBookClick}>
        <h2 className={styles.sessionTitle}>Free 15-Minute Counseling Session</h2>
        <p className={styles.sessionDescription}>
          Unlock clarity and direction in just 15 minutes! Our free introductory session is designed to give parents and students a quick, yet powerful insight into the career counseling process.
        </p>
        <h3 className={styles.gainHeading}>🔍 What You’ll Gain:</h3>
        <ul className={styles.gainList}>
          <li>Understand your child’s potential and key interest areas</li>
          <li>Clarify doubts about career options after 10th/12th or graduation</li>
          <li>Personalized feedback from a certified counselor</li>
          <li>Actionable tips on how to move forward with career planning</li>
        </ul>
        <p className={styles.noCost}>No cost. No pressure. Just clarity and care from someone who’s been there.</p>
      </div>

      {/* ✅ Meet Your Coach Section */}
      <div className={styles.coachCard}>
        <h2 className={styles.coachTitle}>Meet Sruti – Your Career Coach</h2>
        <p className={styles.coachDescription}>
          Sruti is a passionate and experienced career counselor with over <strong>7+ years</strong> in guiding students toward the right academic and professional paths.
          With a background in psychology and career development, she’s known for her empathetic approach and data-driven guidance.
        </p>
        <ul className={styles.coachList}>
          <li>Certified Career Coach & Psychometric Analyst</li>
          <li>Has counseled 1200+ students across India</li>
          <li>Specialist in helping students identify their strengths and career roadmap</li>
          <li>Guest speaker at multiple career summits and webinars</li>
        </ul>
      </div>

      {/* ✅ FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <p><strong>1. Is the session really free?</strong></p>
          <p>Yes! The 15-minute session is 100% free with no strings attached. It’s meant to give you an idea of what full counseling looks like.</p>
        </div>

        <div className={styles.faqItem}>
          <p><strong>2. Do I need to prepare anything before the session?</strong></p>
          <p>Not at all. Just come with an open mind and a willingness to explore possibilities.</p>
        </div>

        <div className={styles.faqItem}>
          <p><strong>3. Can my child also attend the session?</strong></p>
          <p>Absolutely. In fact, we recommend the student be present along with the parent for best results.</p>
        </div>

        <div className={styles.faqItem}>
          <p><strong>4. How is the session conducted?</strong></p>
          <p>Sessions are held via Microsoft Teams. You’ll receive a meeting link, and a recording and transcript will be shared post-session.</p>
        </div>

        <div className={styles.faqItem}>
          <p><strong>5. What happens after the free session?</strong></p>
          <p>Based on your interest, we may recommend a full assessment or a detailed 1-on-1 career planning session customized to your needs.</p>
        </div>
      </div>

      {/* 👇 Book Button Below the Coach and FAQ Section */}
      <button onClick={handleBookClick} className={styles.bookButton}>
        Book Your Free Session
      </button>

      {/* ✅ Script & Platform Info */}
      <div className={styles.scriptSection}>
        <h2>Session Script</h2>
        <p>A structured script PDF will be shared by tonight, covering introductions and discussion points.</p>
      </div>

      <div className={styles.platformNote}>
        <h2>Preferred Platform</h2>
        <p>
          Sessions are conducted on <strong>Microsoft Teams</strong>. A meeting link, recording, and transcript will be
          provided upon booking.
        </p>
      </div>
    </div>
  );
};

export default CareerCounselling;
