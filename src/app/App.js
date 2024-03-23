import "./App.css";
import { HeroSection } from "./components/Hero/HeroSection";
import { LandingPageHeader } from "./components/Header/LandingPageHeader";
import { PremiumFeatures } from "./components/Premium";
import { PricingCardSection } from "./components/PricingCard";
import { RegistrationPage } from "./components/Registration/RegistrationPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <LandingPageHeader />
      <HeroSection />
      <PremiumFeatures />
      <PricingCardSection />
      <RegistrationPage />
      <Footer />
    </div>
  );
}

export default App;
