"use client";
import AnimationElement from "@/src/components/LayoutElements/AnimationElement";
import React from "react";

function HowHero() {
  return (
    <section className="how-hero">
      <AnimationElement
        animation="https://prod.spline.design/7J7WCm6nqodQIe1U/scene.splinecode"
        fallbackImage="/images/how-it-works/how-hero.png"
      />
      <div className="_container">
        <div className="how-hero__body">
          <div>
            <h1>How it works</h1>

            <p>Discovering the backstage</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowHero;
