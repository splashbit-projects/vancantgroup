"use client";
import AnimationElement from "@/src/app/_global-components/LayoutElements/AnimationElement";
import React from "react";

function AboutUsHero() {
  return (
    <section className="about-hero">
      <div className="_container">
        <div className="about-hero__body">
          <div>
            <h1>How did Vancant Group emerge?</h1>

            <p>From the start to the future</p>
          </div>
          <AnimationElement
            animation="https://prod.spline.design/LLIOHKi4oKap8Iu3/scene.splinecode"
            fallbackImage="/images/about/about-hero.png"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsHero;
