"use client";
import { Link } from "@/src/navigation";
import AnimationElement from "../LayoutElements/AnimationElement";


function HomeHero({ title, subtitle, tryButton, learnButton}) {
  return (
    <section className="home-hero">
      <AnimationElement
        animation="https://prod.spline.design/iGt1os0rBVcedTIf/scene.splinecode"
        fallbackImage="/images/home/home-hero-mob.webp"
      />
      <div className="_container">
        <div className="home-hero__body">
          <h1>
          {title}
          </h1>
          <h2>{subtitle}</h2>
          <div className="buttons">
            <Link href="/services" className="main-button">
              {tryButton}
            </Link>
            <Link href="/how-it-works" className="secondary-button">
              {learnButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
