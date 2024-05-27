"use client";
import AnimationElement from "@/src/app/[locale]/_global-components/LayoutElements/AnimationElement";
import { RevealWrapper } from "next-reveal";
import React from "react";

function HowFourth({ title, subtitle, description }) {
  return (
    <section className="how-fourth">
      <div className="_container">
        <div className="how-fourth__body">
          <RevealWrapper origin="bottom">
            <h2>{title}</h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h3>{subtitle}</h3>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </RevealWrapper>
        </div>
      </div>
      <AnimationElement
        animation="https://prod.spline.design/NanMajFNd0h8gBBf/scene.splinecode"
        fallbackImage="/images/home/home-why.webp"
      />
    </section>
  );
}

export default HowFourth;
