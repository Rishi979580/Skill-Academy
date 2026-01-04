import Contact from "../components/Contact";
import contactData from "../content/pages/contact.json";

export default function ContactPage() {
  return (
    <Contact
      heading={contactData.heading}
      description={contactData.description}
      placeholders={contactData.placeholders}
      buttonText={contactData.buttonText}
    />
  );
}
