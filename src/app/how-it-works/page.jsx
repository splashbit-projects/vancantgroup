import React from "react";
import "@/public/scss/howItWorks.scss";
import HowHero from "./_components/HowHero";
import HowThird from "./_components/HowThird";
import HowFourth from "./_components/HowFourth";
import HowLast from "./_components/HowLast";
import HowSecond from "./_components/HowSecond";

function HowItWorksPage() {
  return (
    <>
      <HowHero />
      <HowSecond />
      <HowThird />
      <HowFourth />
      <HowLast />
    </>
  );
}

export default HowItWorksPage;
