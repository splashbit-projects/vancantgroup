"use client";
import AnimationElement from "@/src/app/[locale]/_global-components/LayoutElements/AnimationElement";
import React from "react";

function HowHero({ title, subtitle}) {
  return (
    <section className="how-hero">
      <AnimationElement
        animation="https://prod.spline.design/7J7WCm6nqodQIe1U/scene.splinecode"
        fallbackImage="/images/how-it-works/how-hero.png"
      />
      <div className="_container">
        <div className="how-hero__body">
          <div>
            <h1>{title}</h1>

            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowHero;
