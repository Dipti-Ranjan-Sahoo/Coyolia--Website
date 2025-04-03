import React, { useState } from "react";
import styles from "../styles/BookSession.module.css";

const BookSession = () => {
  const [sessionMode, setSessionMode] = useState("Online");

  return (
    <div className={styles.container}>
      <h2>Book your Free Session</h2>
      <p>Learn from India's best teachers</p>

      {/* Session Mode Toggle */}
      <div className={styles.sessionMode}>
        <button
          className={sessionMode === "Online" ? styles.active : ""}
          onClick={() => setSessionMode("Online")}
        >
          Online
        </button>
        <button
          className={sessionMode === "Offline" ? styles.active : ""}
          onClick={() => setSessionMode("Offline")}
        >
          Offline
        </button>
      </div>

      <h3>Enter Your Details</h3>

      {/* Form Fields */}
      <form>
        <input type="text" placeholder="Enter Name of your Child" required />
        <div className={styles.mobileField}>
          <input type="text" placeholder="Enter your Mobile Number" required />
          <button type="button" className={styles.otpButton}>Send OTP</button>
        </div>
        <input type="email" placeholder="Email Address" />
        <select required>
          <option value="">State</option>
          <option value="Odisha">Odisha</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Maharashtra">Maharashtra</option>
          {/* Add more states */}
        </select>

        <button type="submit" className={styles.submitButton}>
          Continue to Schedule
        </button>
      </form>
    </div>
  );
};

export default BookSession;
