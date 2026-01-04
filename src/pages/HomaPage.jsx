import Hero from "../components/Hero";
import heroData from "../content/sections/hero.json";

import PythonMastery from "../components/PythonMastery";
import pythonAIData from "../content/pages/python-ai.json";

import Workshops from "../components/Workshop";
import workshopsData from "../content/pages/workshop.json";

import AIMastery from "../components/AIMastery";
import aiMasteryData from "../content/pages/ai-mastery.json";

import About from "../components/About";
import aboutData from "../content/pages/about.json";

import Contact from "../components/Contact";
import contactData from "../content/pages/contact.json";

export default function HomePage() {
  return (
    <>
      <Hero
        title={heroData.title}
        highlight={heroData.highlight}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        points={heroData.points}
      />

      <PythonMastery {...pythonAIData} />

      <Workshops {...workshopsData} />

      <AIMastery
        title={aiMasteryData.title}
        description={aiMasteryData.description}
        points={aiMasteryData.points}
        ctaText={aiMasteryData.ctaText}
        image={aiMasteryData.image}
      />

      <About
        heading={aboutData.heading}
        description={aboutData.description}
        stats={aboutData.stats}
      />

      <Contact
        heading={contactData.heading}
        description={contactData.description}
        placeholders={contactData.placeholders}
        buttonText={contactData.buttonText}
      />
    </>
  );
}
