import React from "react";
import "@/public/scss/about.scss";
import AboutUsHero from "./_components/AboutUsHero";
import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import AboutGoals from "./_components/AboutGoals";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";

export const metadata = {
  title: "About us ",
  description: "Learn how we came to Vancant Group, as well as our mission and vision, objectives, and strategies for driving crypto projects to success. Get to know us better. Contact Vancant Group.",
  openGraph: {
    title: "About us ",
    description: "Learn how we came to Vancant Group, as well as our mission and vision, objectives, and strategies for driving crypto projects to success. Get to know us better. Contact Vancant Group.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

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
