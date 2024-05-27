import Image from "next/image";
import "@/public/scss/home.scss";
import HomeHero from "@/src/app/[locale]/_global-components/home/HomeHero";
import HomeSecond from "@/src/app/[locale]/_global-components/home/HomeSecond";
import HomePercents from "@/src/app/[locale]/_global-components/home/HomePercents";
import HomeNeed from "@/src/app/[locale]/_global-components/home/HomeNeed";
import HomeWhy from "@/src/app/[locale]/_global-components/home/HomeWhy";
import HomeKey from "@/src/app/[locale]/_global-components/home/HomeKey";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const tR = useTranslations("RequestBlock");
  const tS = useTranslations("HomeSecond");
  const tP = useTranslations("HomePercents");
  const tW = useTranslations("HomeWhy");
  return (
    <>
      <HomeHero
        title={t.rich("title", {
          br: () => <br />,
        })}
        subtitle={t("subtitle")}
        tryButton={t("tryButton")}
        learnButton={t("learnButton")}
      />
      <HomeSecond
        bannerTitle={tS("bannerTitle")}
        bannerSubtitle={tS.rich("bannerSubtitle", {
          br: () => <br />,
        })}
        whatTitle={tS("whatTitle")}
        stepOneTitle={tS("stepOneTitle")}
        stepOneText={tS("stepOneText")}
        stepTwoTitle={tS("stepTwoTitle")}
        stepTwoText={tS("stepTwoText")}
        stepThreeTitle={tS("stepThreeTitle")}
        stepThreeText={tS("stepThreeText")}
      />
      <HomeKey />
      <HomeWhy
        title={tW.rich("title", {
          br: () => <br />,
        })}
        whyTitle1={tW("whyTitle1")}
        whyText1={tW("whyText1")}
        whyTitle2={tW("whyTitle2")}
        whyText2={tW("whyText2")}
        whyTitle3={tW("whyTitle3")}
        whyText3={tW("whyText3")}
        whyTitle4={tW("whyTitle4")}
        whyText4={tW("whyText4")}
        whyTitle5={tW("whyTitle5")}
        whyText5={tW("whyText5")}
      />
      <HomePercents
        title={tP("title")}
        col1={tP("col1")}
        col2={tP("col2")}
        col3={tP("col3")}
        col4={tP("col4")}
        col5={tP("col5")}
      />
      <RequestBlock
        title={tR("title")}
        subtitle={tR("subtitle")}
        buttonLink="/contact-us"
        buttonText={tR("buttonText")}
      />
    </>
  );
}
