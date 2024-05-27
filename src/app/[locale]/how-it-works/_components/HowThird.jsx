"use client";
import { RevealWrapper } from "next-reveal";
import AnimationElement from "@/src/app/[locale]/_global-components/LayoutElements/AnimationElement";
import React from "react";

function HowThird({ title, steps }) {
  return (
    <section className="how-third">
      <div className="_container">
        <h2>{title}</h2>
        <div className="how-third__body">
          <div className="how-third__col-01">
            <div className={`fixed-block`}>
              <AnimationElement
                animation="https://prod.spline.design/4LyeK5Yvi3fhB2P1/scene.splinecode"
                mobileHidden={true}
                fallbackImage=""
              />
            </div>
          </div>
          <div className="how-third__col-02">
            <div className="column">
              {steps.map((step, index) => (
                <RevealWrapper origin="bottom" delay={100} key={index}>
                  <div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div>{index + 1}</div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowThird;
