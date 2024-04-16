import React from "react";
import "@/public/scss/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ServicesPercents from "./_components/ServicesPercents";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesSecond from "./_components/ServicesSecond";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSecond />
      <ServicesPercents />
      <RequestBlock
        title={`Need assistance?`}
        subtitle={`Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!`}
        buttonLink="#"
        buttonText={`Contact us`}
      />
    </>
  );
}

export default ServicesPage;
