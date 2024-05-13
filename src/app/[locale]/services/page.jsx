import React from "react";
import "@/public/scss/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ServicesPercents from "./_components/ServicesPercents";
import ServicesSecond from "./_components/ServicesSecond";
import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";
import OrderPopup from "@/src/app/_global-components/LayoutElements/OrderPopup";

export const metadata = {
  title: "Crypto marketing services",
  description: " Explore crypto marketing services for community building, SEO, PR, advertising strategies, compliance, and branding. At Vancant Group, we guide your project from inception to success.",
  openGraph: {
    title: "Crypto marketing services",
    description: " Explore crypto marketing services for community building, SEO, PR, advertising strategies, compliance, and branding. At Vancant Group, we guide your project from inception to success.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSecond />
      <ServicesPercents />
      <RequestBlock
        title={`Need assistance?`}
        subtitle={`Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!`}
        buttonLink="/contact-us"
        buttonText={`Contact us`}
      />
      <OrderPopup />
    </>
  );
}

export default ServicesPage;
