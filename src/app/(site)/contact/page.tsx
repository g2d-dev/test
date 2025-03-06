import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | Go to digital, votre partenaire numérique",
  description: "Contactez-nous pour plus d'informations",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contactez-nous" />

      <Contact />
    </>
  );
};

export default ContactPage;
