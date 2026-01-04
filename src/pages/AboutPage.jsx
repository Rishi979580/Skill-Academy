import About from "../components/About";
import aboutData from "../content/pages/about.json";

export default function AboutPage() {
  return (
    <About
      heading={aboutData.heading}
      description={aboutData.description}
      stats={aboutData.stats}
    />
  );
}
