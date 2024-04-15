import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import PricingThird from "./_components/PricingThird";
import PricingLoop from "./_components/PricingLoop";

function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingSecond />
      <PricingThird />
      <PricingLoop />
    </>
  );
}

export default PricingPage;
