import Image from "next/image";
import "@/public/scss/home.scss";
import HomeHero from "../components/home/HomeHero";
import HomeSecond from "../components/home/HomeSecond";
import HomePercents from "../components/home/HomePercents";
import HomeNeed from "../components/home/HomeNeed";
import HomeWhy from "../components/home/HomeWhy";
import HomeKey from "../components/home/HomeKey";
import RequestBlock from "../components/LayoutElements/RequestBlock";

export default function Home() {
  return (
    <>
      <HomeHero />
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
