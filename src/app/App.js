import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeroSection } from "./components/Hero/HeroSection";
import { LandingPageHeader } from "./components/Header/LandingPageHeader";
import { PremiumFeatures } from "./components/Premium";
import { PricingCardSection } from "./components/PricingCard";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <LandingPageHeader />
        <Routes>
          <Route path="/hero" exact element={<HeroSection />} />
          <Route path="/premium" element={<PremiumFeatures />} />
          <Route path="/login" element={<PricingCardSection />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
