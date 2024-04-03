import Image from "next/image";
import "@/public/scss/home.scss";
import HomeHero from "../components/home/HomeHero";
import HomeSecond from "../components/home/HomeSecond";
import HomePercents from "../components/home/HomePercents";


export default function Home() {
  return (
    <>
    <HomeHero/>
    <HomeSecond/>
    <HomePercents/>
    </>
  );
}
