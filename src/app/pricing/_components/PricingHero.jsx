'use client';
import React from "react";
import Spline from "@splinetool/react-spline";
import { RevealList } from "next-reveal";

function PricingHero() {
  return (
    <section className="pricing-hero">
      <Spline scene="https://prod.spline.design/NXaowb1k5caLgEXi/scene.splinecode" />
      <div className="_container">
        <RevealList
          origin="bottom"
          interval={0}
          delay={0}
          className="pricing-hero__body"
        >
            <h1>Crypto marketing pricing</h1>
            <h2>Tailored pricing solutions, maximising <br/>your crypto project's potential</h2>
            <span></span>
        </RevealList>
      </div>
    </section>
  );
}

export default PricingHero;
