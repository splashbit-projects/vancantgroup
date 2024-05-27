"use client";
import AnimationElement from "@/src/app/[locale]/_global-components/LayoutElements/AnimationElement";
import React from "react";

function ServicesHero({ title, subtitle }) {
  return (
    <section className="services-hero">
      <div className="_container">
        <div className="services-hero__body">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <AnimationElement
            animation="https://prod.spline.design/BItA6BDVRC1IudSH/scene.splinecode"
            fallbackImage="/images/services/services-hero.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
