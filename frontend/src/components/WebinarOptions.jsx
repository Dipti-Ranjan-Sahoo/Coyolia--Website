import React from 'react';
import styles from '../styles/WebinarOptions.module.css';

const webinarData = [
  {
    title: "Meet our Learning Specialist",
    desc: "During this session, we will help you understand about our custom solutions for your learning needs.",
    duration: "30 min",
    price: "Free",
    btnText: "Request to Book",
  },
  {
    title: "Career Guidance Sessions",
    desc: "Personalised service for students seeking career guidance or next step in their career.",
    duration: "30 min",
    day: "Sat",
    price: "₹200",
    btnText: "Book Now",
  },
  {
    title: "Career Guidance Webinar",
    desc: "We help you decide your future",
    duration: "45 min",
    price: "₹49",
    btnText: "Request to Book",
  },
];

const WebinarOptions = () => {
  return (
    <div className={styles.container}>
      {webinarData.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <hr />
          <div className={styles.info}>
            {item.day && <span>{item.day}</span>}
            <span>{item.duration}</span>
            <span>{item.price}</span>
          </div>
          <button className={styles.btn}>{item.btnText}</button>
        </div>
      ))}
    </div>
  );
};

export default WebinarOptions;
