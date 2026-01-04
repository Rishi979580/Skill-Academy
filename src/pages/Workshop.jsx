import Workshops from "../components/Workshop";
import workshopData from "../content/pages/workshop.json";

export default function WorkshopPage() {
  return (
    <Workshops {...workshopData} />
  );
}
