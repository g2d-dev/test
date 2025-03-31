import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de nous | Go To Digital",
  description: "A propos de Go To Digital",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="A propos de nous" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
