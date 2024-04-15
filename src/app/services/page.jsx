import React from "react";
import "@/public/scss/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ServicesPercents from "./_components/ServicesPercents";
import ServicesNeed from "./_components/ServicesNeed";
import ServicesSecond from "./_components/ServicesSecond";

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSecond />
      <ServicesPercents />
      <ServicesNeed />
    </>
  );
}

export default ServicesPage;
