"use client";
import AnimationElement from "@/src/app/_global-components/LayoutElements/AnimationElement";
import { RevealWrapper } from "next-reveal";
import React from "react";

function HowFourth() {
  return (
    <section className="how-fourth">
      <div className="_container">
        <div className="how-fourth__body">
          <RevealWrapper origin="bottom">
            <h2>The result?</h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h3>Engaged and Enthusiastic Users</h3>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <p>
              By immersing your brand in front of your target audience and
              leveraging data-
              <br />
              driven insights, we cultivate a community of eager users who are
              willing to <br />
              participate in your project, support it, advocate for it, and
              share it with others.
            </p>
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
