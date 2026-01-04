import AIMastery from "../components/AIMastery";
import aiMasteryData from "../content/pages/ai-mastery.json";

export default function AiPage() {
  return (
    <AIMastery
      title={aiMasteryData.title}
      description={aiMasteryData.description}
      points={aiMasteryData.points}
      ctaText={aiMasteryData.ctaText}
      image={aiMasteryData.image}
    />
  );
}
