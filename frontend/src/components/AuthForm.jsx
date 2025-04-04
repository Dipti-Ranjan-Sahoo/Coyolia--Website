import React, { useState } from "react";
import styles from "../styles/AuthForm.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.authContainer}>
      <h2>{isLogin ? "Log in to Your Account" : "Sign Up with Email"}</h2>

      <label>
        <input type="checkbox" /> Send me special offers & learning tips.
      </label>

      {!isLogin && (
        <input type="text" placeholder="Full Name" className={styles.input} />
      )}
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />

      <button className={styles.authButton}>
        {isLogin ? "Log In" : "Continue with Email"}
      </button>

      <p>Other sign-up options</p>
      <div className={styles.socialIcons}>
        <button className={styles.google}><i className="fa-brands fa-google"></i></button>
        <button className={styles.facebook}><i className="fa-brands fa-facebook"></i></button>
        <button className={styles.apple}><i className="fa-brands fa-apple"></i></button>
      </div>


      <p>
        {isLogin ? "New here?" : "Already have an account?"}{" "}
        <span onClick={() => setIsLogin(!isLogin)} className={styles.toggle}>
          {isLogin ? "Sign Up" : "Log In"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;
