import React from "react";
import "@/public/scss/about.scss";
import AboutUsHero from "./_components/AboutUsHero";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import AboutGoals from "./_components/AboutGoals";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";

function AboutUsPage() {
  return (
    <>
      <AboutUsHero />
      <AboutSecond />
      <AboutThird />
      <AboutGoals />
      <RequestBlock 
        title="Ready to boost your crypto project?"
        buttonText="Contact us"
        buttonLink="/contact-us"
      />
    </>
  );
}

export default AboutUsPage;
