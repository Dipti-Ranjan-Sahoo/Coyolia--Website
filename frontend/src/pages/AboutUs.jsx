import React from "react";
import styles from "../styles/Page.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About Us</h1>
      

      <section className={styles.section}>
              <div className={styles.badge}>Vision</div>
              <article className={styles.text}>
                At Coyolia Technologies, our vision is to create a world of abundant 
                opportunities for youth by leveraging the power of the Digital Public
                Goods Alliance. We aim to harness Indian and open-source IP to tackle
                global challenges, reduce corruption, and empower communities
                worldwide.
              </article>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
              <div className={styles.badge}>Mission</div>
              <article className={styles.text}>
                As Digital Ambassadors, Coyolia Technologies will champion
                open-source community projects in India and beyond. Collaborating
                with the Government of India and DPGA, we will promote these
                solutions in new regions, infuse innovative skills and training for
                youth in Ethiopia, India, and African Union members, and support open
                standards-based technologies to foster a zero-corruption environment.
                We stay local while integrating global best practices.
              </article>
            </section>

            {/* Values Section */}
            <section className={styles.section}>
              <div className={styles.badge}>Values</div>
              <article className={styles.text}>
                We believe in integrity, transparency, and collaboration. By
                fostering an open-source culture, we strive to create solutions that
                are ethical, sustainable, and impactful for communities worldwide.
              </article>
            </section>



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
