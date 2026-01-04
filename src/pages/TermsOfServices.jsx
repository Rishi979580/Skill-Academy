import StaticPage from "../components/StaticPage";
import data from "../content/pages/terms.json";

export default function TermsOfService() {
  return (
    <StaticPage
      title={data.title}
      updated={data.updated}
      sections={data.sections}
    />
  );
}
