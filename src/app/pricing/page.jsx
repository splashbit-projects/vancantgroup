import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import PricingThird from "./_components/PricingThird";
import PricingLoop from "./_components/PricingLoop";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import OrderPopup from "@/src/components/LayoutElements/OrderPopup";

function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingSecond />
      <RequestBlock
        title={`Have a crypto project?`}
        subtitle={`Let us discuss its marketing to success!`}
        buttonLink=""
        buttonText={`Request solution`}
      />
      <PricingLoop />
      <OrderPopup />
    </>
  );
}

export default PricingPage;
