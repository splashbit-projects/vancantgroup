import React from "react";
import "@/public/scss/howItWorks.scss";
import HowHero from "./_components/HowHero";
import HowThird from "./_components/HowThird";
import HowFourth from "./_components/HowFourth";
import HowLast from "./_components/HowLast";
import HowSecond from "./_components/HowSecond";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("HowItWorksPage");

  const secondCards = [
    { title: t("second.card1.title"), content: t.raw("second.card1.content") },
    { title: t("second.card2.title"), content: t.raw("second.card2.content") },
    { title: t("second.card3.title"), content: t.raw("second.card3.content") },
    { title: t("second.card4.title"), content: t.raw("second.card4.content") },
  ];

  const thirdSteps = [
    { title: t("third.step1.title"), description: t("third.step1.description") },
    { title: t("third.step2.title"), description: t("third.step2.description") },
    { title: t("third.step3.title"), description: t("third.step3.description") },
    { title: t("third.step4.title"), description: t("third.step4.description") },
    { title: t("third.step5.title"), description: t("third.step5.description") },
  ];

  return (
    <>
      <HowHero 
        title={t("hero.title")} 
        subtitle={t("hero.subtitle")}
      />
      <HowSecond 
        title={t.rich("second.title", {
          br: () => <br />,
        })} 
        cards={secondCards}
      />
      <HowThird 
        title={t("third.title")}
        steps={thirdSteps}
      />
      <HowFourth 
        title={t("fourth.title")} 
        subtitle={t("fourth.subtitle")} 
        description={t.rich("fourth.description", {
          br: () => <br />,
        })} 
      />
      <RequestBlock
        title={t("requestBlock.title")}
        subtitle={t("requestBlock.subtitle")}
        buttonLink=""
        buttonText={t("requestBlock.buttonText")}
      />
    </>
  );
}

export default HowItWorksPage;
