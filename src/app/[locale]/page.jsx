import Image from "next/image";
import "@/public/scss/home.scss";
import HomeHero from "@/src/app/_global-components/home/HomeHero";
import HomeSecond from "@/src/app/_global-components/home/HomeSecond";
import HomePercents from "@/src/app/_global-components/home/HomePercents";
import HomeNeed from "@/src/app/_global-components/home/HomeNeed";
import HomeWhy from "@/src/app/_global-components/home/HomeWhy";
import HomeKey from "@/src/app/_global-components/home/HomeKey";
import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <HomeHero
        title={t.rich("title", {
          br: () => <br />,
        })}
        subtitle={"End-to-end marketing solutions"}
        tryButton={"Try now"}
        learnButton={"Learn more"}
      />
      <HomeSecond />
      <HomeKey />
      <HomeWhy />
      <HomePercents />
      <RequestBlock
        title={`Need assistance?`}
        subtitle={`Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!`}
        buttonLink="/contact-us"
        buttonText={`Contact us`}
      />
    </>
  );
}
