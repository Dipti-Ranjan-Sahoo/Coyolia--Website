import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  // State for managing dropdowns
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Coyolia</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>

        {/* Solutions Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("solutions")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/solutions">Solutions ▼</Link>
          {dropdown === "solutions" && (
            <div className={styles.dropdownMenu}>
              <Link to="/solutions/ai-learning">AI in Learning & Development</Link>
              <Link to="/solutions/ai-hr">AI in Talent Acquisition & HR</Link>
              <Link to="/solutions/innovation">Innovation & Research</Link>
            </div>
          )}
        </li>

        {/* Clients Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("clients")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/clients">Clients ▼</Link>
          {dropdown === "clients" && (
            <div className={styles.dropdownMenu}>
              <Link to="/clients/technology-partners">Technology Partners</Link>
              <Link to="/clients/academic-partners">Academic Partners</Link>
              <Link to="/clients/resellers">Resellers</Link>
            </div>
          )}
        </li>

        {/* Insights Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("insights")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/insights">Insights ▼</Link>
          {dropdown === "insights" && (
            <div className={styles.dropdownMenu}>
              <Link to="/insights/blog">Blog</Link>
              <Link to="/insights/webinars">Webinars</Link>
              <Link to="/insights/events">Events</Link>
            </div>
          )}
        </li>

        {/* Industries Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("industries")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/industries">Industries ▼</Link>
          {dropdown === "industries" && (
            <div className={styles.dropdownMenu}>
              <Link to="/industries/edtech">EdTech</Link>
              <Link to="/industries/retail">Retail</Link>
              <Link to="/industries/banking">Banking Services</Link>
            </div>
          )}
        </li>

        {/* Careers Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("careers")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/careers">Careers ▼</Link>
          {dropdown === "careers" && (
            <div className={styles.dropdownMenu}>
              <Link to="/careers/life-at-coyolia">Life @Coyolia</Link>
              <Link to="/careers/openings">Current Openings</Link>
            </div>
          )}
        </li>

        {/* Services Dropdown */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("services")}
          onMouseLeave={() => setDropdown(null)}
        >
          <Link to="/services">Services ▼</Link>
          {dropdown === "services" && (
            <div className={styles.dropdownMenu}>
              <Link to="/services/career-counselling">Career Counselling</Link>
              <Link to="/services/assessment-tests">Career Assessment Tests</Link>
              <Link to="/services/follow-ups">Follow-ups & Support</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
