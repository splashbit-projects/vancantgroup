import React from "react";
import "@/public/scss/howItWorks.scss";
import HowHero from "./_components/HowHero";
import HowThird from "./_components/HowThird";
import HowFourth from "./_components/HowFourth";
import HowLast from "./_components/HowLast";
import HowSecond from "./_components/HowSecond";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";

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
