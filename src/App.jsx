import { Routes, Route } from "react-router-dom";

/* LAYOUT */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* CONTENT */
import navbarData from "./content/sections/navbar.json";
import footerData from "./content/sections/footer.json";

/* PAGES */
import HomePage from "./pages/HomaPage";
import WorkshopPage from "./pages/WorkshopPages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfServices";
import RefundPolicy from "./pages/RefundPolicy";
import PythonAI from "./pages/PythonMastery"
import AIMastery from "./pages/AIMastery"

import AboutPage from "./pages/AboutPage"
import Contact from "./pages/ContactUs"


export default function App() {
  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar
        brand={navbarData.brand}
        menuItems={navbarData.menuItems}
        cta={navbarData.cta}
      />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/python" element={<PythonAI />} />
        <Route path="/ai" element={<AIMastery />} />
        <Route path="/register-workshop" element={<WorkshopPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer
        brand={footerData.brand}
        description={footerData.description}
        socialLinks={footerData.socialLinks}
        columns={footerData.columns}
        copyright={footerData.copyright}
      />
    </>
  );
}
