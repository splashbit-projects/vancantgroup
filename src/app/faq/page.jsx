import React from "react";
import "@/public/scss/faq.scss";
import FaqHero from "./_components/FaqHero";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";

function FaqPage() {
  return (
    <>
      <FaqHero />
      <RequestBlock
        title="Need assistance?"
        subtitle="Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!"
        buttonLink="/contact-us"
        buttonText="Contact us"
      />
    </>
  );
}

export default FaqPage;
