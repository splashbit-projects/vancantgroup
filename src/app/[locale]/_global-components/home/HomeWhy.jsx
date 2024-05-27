"use client";
import { RevealList, RevealWrapper } from "next-reveal";
import { Link } from "@/src/navigation";
import AnimationElement from "../LayoutElements/AnimationElement";

function HomeWhy({
  title,
  whyTitle1,
  whyText1,
  whyTitle2,
  whyText2,
  whyTitle3,
  whyText3,
  whyTitle4,
  whyText4,
  whyTitle5,
  whyText5,
}) {
  return (
    <section className="home-why">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>{title}</h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={100}
          delay={0}
          className="home-why__body"
        >
          <div>
            <span>01</span>
            <h3>{whyTitle1}</h3>
            <p>
              {whyText1}
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>{whyTitle2}</h3>
            <p>
              {whyText2}
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>{whyTitle3}</h3>
            <p>
              {whyText3}
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>{whyTitle4}</h3>
            <p>
              {whyText4}
            </p>
          </div>
          <div>
            <span>05</span>
            <h3>{whyTitle5}</h3>
            <p>
              {whyText5}
            </p>
          </div>
        </RevealList>
        <RevealWrapper origin="bottom" className="button-wrap">
          <Link href="/how-it-works" className="main-button">
            Learn more
          </Link>
        </RevealWrapper>
      </div>
      <AnimationElement
        animation="https://prod.spline.design/NanMajFNd0h8gBBf/scene.splinecode"
        fallbackImage="/images/home/home-why.webp"
      />
    </section>
  );
}

export default HomeWhy;
