"use client";
import React from "react";
import { RevealList } from "next-reveal";
import AnimationElement from "@/src/components/LayoutElements/AnimationElement";

function PricingHero() {
  return (
    <section className="pricing-hero">
      <AnimationElement animation="https://prod.spline.design/NXaowb1k5caLgEXi/scene.splinecode" fallbackImage="/images/pricing/pricing-hero.webp"/>
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="pricing-hero__body"
        >
          <h1>Crypto marketing pricing</h1>
          <h2>
            Tailored pricing solutions, maximising <br />
            your crypto project's potential
          </h2>
          <span></span>
        </RevealList>
      </div>
    </section>
  );
}

export default PricingHero;
