import StaticPage from "../components/StaticPage";
import data from "../content/pages/refund.json";

export default function RefundPolicy() {
  return (
    <StaticPage
      title={data.title}
      updated={data.updated}
      sections={data.sections}
      footer={`Support: ${data.support.email} | ${data.support.phone}`}
    />
  );
}
