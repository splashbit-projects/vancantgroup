import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import PricingThird from "./_components/PricingThird";
import PricingLoop from "./_components/PricingLoop";
import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";
import OrderPopup from "@/src/app/_global-components/LayoutElements/OrderPopup";

export const metadata = {
  title: "Crypto marketing pricing",
  description: "Explore Vancant Group's pricing approach. Learn how we explore and analyse a project to offer and price a solution. Discover complex service packages for different stages of crypto projects.",
  openGraph: {
    title: "Crypto marketing pricing",
    description: "Explore Vancant Group's pricing approach. Learn how we explore and analyse a project to offer and price a solution. Discover complex service packages for different stages of crypto projects.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

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
