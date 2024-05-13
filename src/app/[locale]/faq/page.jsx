import React from "react";
import "@/public/scss/faq.scss";
import FaqHero from "./_components/FaqHero";
import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";
import FaqQuestions from "./_components/FaqQuestions";

export const metadata = {
  title: "Crypto marketing FAQ",
  description: "Struggling to succeed in crypto marketing? Submit your issue to our experts, and we will provide you with possible reasons and solutions to drive your project to success. Read our expert answers.",
  openGraph: {
    title: "Crypto marketing FAQ",
    description: "Struggling to succeed in crypto marketing? Submit your issue to our experts, and we will provide you with possible reasons and solutions to drive your project to success. Read our expert answers.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqQuestions/>
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
