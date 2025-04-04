import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonialsData = [
  {
    text: "Coyolia Technologies’ Skill Development program provided me with a deeper understanding of AWS S3 and MySQL compared to what I learned in college, covering practical aspects like creating buckets, managing files, and integrating databases with AWS that I hadn't explored before.",
    author: "A student from the AWS training sessions held in Jigani",
    bgColor: "#FFB6B9"
  },
  {
    text: "The sessions held by Coyolia Technologies have been incredibly informative, and I learned so much—I'm eager to continue learning in the days ahead. Thank you for the valuable insights!",
    author: "A student from Maharani Cluster University, Bengaluru",
    bgColor: "#A2C8FC"
  },
  {
    text: "The practical exposure has been amazing, thanks to the kits provided by Coyolia Technologies.",
    author: "A student from the IoT training sessions held in Jigani",
    bgColor: "#CAB8FF"
  },
  {
    text: "It was a good experience and I'm very happy that I'm a part of this wonderful session. I'm eager to learn more things in the upcoming days and thank you for giving us such a wonderful opportunity.",
    author: "A student from the IoT training sessions held in Jigani",
    bgColor: "#FFFFFF"
  }
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.heading}>Testimonies</h1>
      <p className={styles.subText}>
        We aim to lead the Skill Development world, and we don’t forget where we come from: Human touch and endless patience!
      </p>
      <div className={styles.cardsContainer}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={styles.testimonialCard}
            style={{ backgroundColor: testimonial.bgColor }}
          >
            <p className={styles.testimonialText}>“{testimonial.text}”</p>
            <p className={styles.testimonialAuthor}><strong>{testimonial.author}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
