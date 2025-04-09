import React from 'react';
import styles from '../styles/PrivacyPolicy.module.css'; // if you're using CSS Modules

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicyContainer}>
      <h1>Privacy Policy</h1>

      <section className={styles.section}>
        <h2>Free Font License - Summary (Fontshare)</h2>
        <p><strong>Who created the fonts?</strong> Indian Type Foundry (ITF) distributes free fonts via Fontshare.com, with some usage rules.</p>
        
        <h3>✅ What You Can Do</h3>
        <ul>
          <li>Use the fonts for free in personal or commercial projects.</li>
          <li>Use them across print, web, mobile, apps, and more.</li>
          <li>Install them on unlimited devices and create designs like logos, PDFs, etc.</li>
          <li>Share non-editable files (like PDFs) with clients or printers.</li>
        </ul>

        <h3>❌ What You Can’t Do</h3>
        <ul>
          <li>Modify or redistribute the original font files.</li>
          <li>Share the fonts via email, USB, or upload them to public servers.</li>
          <li>Use font-serving technologies (like EOT, Cufon, sIFR) without permission.</li>
        </ul>

        <h3>⚠️ Legal & Technical Notes</h3>
        <ul>
          <li>ITF is not liable for damages or technical failures.</li>
          <li>No support or updates are provided.</li>
          <li>Legal disputes are handled in Ahmedabad, India under Indian law.</li>
        </ul>

        <p><em>Last updated: 22 March 2021</em></p>
      </section>

      <section className={styles.section}>
        <h2>Full Font EULA (Indian Type Foundry)</h2>
        <pre className={styles.eulaText}>
{`[Paste the full EULA text here exactly as it is]`}
        </pre>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
