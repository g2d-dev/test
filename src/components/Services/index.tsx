import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Développez votre digitalité"
          title="L’expertise locale, au service de l’innovation mondiale"
          paragraph="Basés à Douala au Cameroun, nous comprenons vos défis et savons comment les relever grâce à des outils technologiques de pointe."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {servicesData.map((service, i) => (
            <SingleService key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
