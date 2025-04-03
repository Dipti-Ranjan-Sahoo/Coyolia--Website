import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Clients from "./pages/Clients";
import Insights from "./pages/Insights";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import BookSession from "./components/BookSession"; // Import BookSession Component
import styles from "./styles/App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          {/* Add the BookSession form on the homepage */}
          <Routes>
            <Route path="/" element={<BookSession />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
