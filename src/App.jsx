import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PythonMastery from "./components/PythonMastery";
import Workshops from "./components/Workshops";
import AIMastery from "./components/AIMastery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkshopPage from "./pages/WorkshopPages";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PythonMastery />
              <Workshops />
              <AIMastery />
              <About />
              <Contact />
            </>
          }
        />

        {/* WORKSHOP PAGE */}
        <Route path="/workshop" element={<WorkshopPage />} />
      </Routes>

      <Footer />
    </>
  );
}
