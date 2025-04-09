import React, { useState } from "react";
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
import CareerCounselling from "./pages/CareerCounselling";
import BookCareerSession from "./pages/SessionBookingForm";
import Webinar from "./pages/Webinar";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactModal from "./pages/ContactModal"; // ✅ Import the modal
import styles from "./styles/App.module.css";
import floatingStyles from "./styles/FloatingContact.module.css"; // ✅ Floating button CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import OurFounder from "./pages/OurFounder";
function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <Router>
      <>
        {/* Contact Modal on top level */}
        {showContactModal && (
          <ContactModal
            isOpen={showContactModal}
            onClose={() => setShowContactModal(false)}
          />
        )}

        {/* Main Layout */}
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
              <Route path="/services/career-counselling" element={<CareerCounselling />} />
              <Route path="/book-session" element={<BookCareerSession />} />
              <Route path="/insights/webinar" element={<Webinar />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ContactModal" element ={<ContactModal/>}/>
            </Routes>
          </div>
          <OurFounder/>
          <Footer />
        </div>

        {/* Floating Button (outside layout) */}
        <button
          className={floatingStyles.floatingButton}
          onClick={() => setShowContactModal(true)}
        >
          Contact
        </button>
      </>
    </Router>
  );
}
export default App;
