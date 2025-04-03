import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Clients from "./pages/Clients";
import Insights from "./pages/Insights";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Services from "./pages/Services";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;