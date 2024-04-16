"use client";
import Link from "next/link";
import AnimationElement from "../LayoutElements/AnimationElement";

function HomeHero() {
  return (
    <section className="home-hero">
      <AnimationElement
        animation="https://prod.spline.design/iGt1os0rBVcedTIf/scene.splinecode"
        fallbackImage="/images/home/home-hero-mob.webp"
      />
      <div className="_container">
        <div className="home-hero__body">
          <h1>
            Have a crypto project?
            <br />
            We will boost your marketing!
          </h1>
          <h2>End-to-end marketing solutions</h2>
          <div className="buttons">
            <Link href="/services" className="main-button">
              Try now
            </Link>
            <Link href="/how-it-works" className="secondary-button">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
