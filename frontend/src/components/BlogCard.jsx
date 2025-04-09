import React from "react";
import styles from "../styles/BlogCard.module.css";
import blogImage from "../assets/image(2).jpg"; // ✅ your uploaded main blog image
import avatar from "../assets/image(2).jpg";   // ✅ or use /image(2).jpg if in public

const BlogCard = () => {
  return (
    <div className={styles.card}>
      <img src={blogImage} alt="Ambarglow" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.authorInfo}>
          <img src={avatar} alt="Author" className={styles.avatar} />
          <div>
            <p className={styles.name}>Avinash Kulkarni</p>
            <p className={styles.meta}>Oct 8, 2024 • 3 min read</p>
          </div>
        </div>
        <h3 className={styles.title}>
          Unlocking the Power of Continuous Learning in the Professional World
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
