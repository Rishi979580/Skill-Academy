import StaticPage from "../components/StaticPage";
import data from "../content/pages/privacy.json";

export default function PrivacyPolicy() {
  return (
    <StaticPage
      title={data.title}
      updated={data.updated}
      sections={data.sections}
      footer={`Contact us at ${data.contactEmail}`}
    />
  );
}
