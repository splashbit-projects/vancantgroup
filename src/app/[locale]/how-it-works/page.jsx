import React from "react";
import "@/public/scss/howItWorks.scss";
import HowHero from "./_components/HowHero";
import HowThird from "./_components/HowThird";
import HowFourth from "./_components/HowFourth";
import HowLast from "./_components/HowLast";
import HowSecond from "./_components/HowSecond";
import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";

export const metadata = {
  title: "How it works",
  description: "Learn how we approach each project by analysing and valuing it, exploring the target audience and competition, and developing marketing solutions for success.",
  openGraph: {
    title: "How it works",
    description: "Learn how we approach each project by analysing and valuing it, exploring the target audience and competition, and developing marketing solutions for success.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function HowItWorksPage() {
  return (
    <>
      <HowHero />
      <HowSecond />
      <HowThird />
      <HowFourth />
      <RequestBlock
        title={`Ready to unlock the full potential <br/>of your crypto project?`}
        subtitle={``}
        buttonLink=""
        buttonText={`Request solution`}
      />
    </>
  );
}

export default HowItWorksPage;
