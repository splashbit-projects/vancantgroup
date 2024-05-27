import React from "react";
import "@/public/scss/about.scss";
import AboutUsHero from "./_components/AboutUsHero";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import AboutGoals from "./_components/AboutGoals";
import AboutSecond from "./_components/AboutSecond";
import AboutThird from "./_components/AboutThird";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About us ",
  description:
    "Learn how we came to Vancant Group, as well as our mission and vision, objectives, and strategies for driving crypto projects to success. Get to know us better. Contact Vancant Group.",
  openGraph: {
    title: "About us ",
    description:
      "Learn how we came to Vancant Group, as well as our mission and vision, objectives, and strategies for driving crypto projects to success. Get to know us better. Contact Vancant Group.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function AboutUsPage() {
  const t = useTranslations("AboutUsPage");

  const goals = [
    {
      image: `/images/about/goal1.png`,
      title: t("goals.newTechnologies.title"),
      text: t("goals.newTechnologies.text"),
    },
    {
      image: `/images/about/goal2.png`,
      title: t("goals.teamGrowth.title"),
      text: t("goals.teamGrowth.text"),
    },
    {
      image: `/images/about/goal3.png`,
      title: t("goals.marketExpansion.title"),
      text: t("goals.marketExpansion.text"),
    },
    {
      image: `/images/about/goal4.png`,
      title: t("goals.newIndustries.title"),
      text: t("goals.newIndustries.text"),
    },
    {
      image: `/images/about/goal5.png`,
      title: t("goals.newSolutions.title"),
      text: t("goals.newSolutions.text"),
    },
    {
      image: `/images/about/goal6.png`,
      title: t("goals.continuousImprovement.title"),
      text: t("goals.continuousImprovement.text"),
    },
  ];

  const vision = {
    icon: `/images/about/icon1.svg`,
    title: t("vision.title"),
    content: t.rich("vision.content"),
  };

  const mission = {
    icon: `/images/about/icon2.svg`,
    title: t("mission.title"),
    content: t.rich("mission.content"),
  };
  
  return (
    <>
      <AboutUsHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <AboutSecond description={t("second.description")} />
      <AboutThird
        title={t("third.title")}
        subtitle={t.rich("third.subtitle", {
          br: () => <br />,
        })}
        vision={vision}
        mission={mission}
      />
      <AboutGoals goalsTitle={t("goals.title")} goals={goals} />
      <RequestBlock
        title={t("requestBlock.title")}
        buttonText={t("requestBlock.buttonText")}
        buttonLink="/contact-us"
      />
    </>
  );
}

export default AboutUsPage;
