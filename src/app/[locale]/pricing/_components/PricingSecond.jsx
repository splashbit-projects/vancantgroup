"use client";
import { RevealWrapper } from "next-reveal";
import AnimationElement from "@/src/app/[locale]/_global-components/LayoutElements/AnimationElement";
import React from "react";

function PricingSecond({ intro, title, steps }) {
  return (
    <section className="pricing-second">
      <div className="_container">
        <h3 dangerouslySetInnerHTML={{ __html: intro }}></h3>
        <h2>{title}</h2>
        <div className="pricing-second__body">
          <div className="pricing-second__col-01">
            <div className={`fixed-block`} >
              <AnimationElement
                animation="https://prod.spline.design/4LyeK5Yvi3fhB2P1/scene.splinecode"
                mobileHidden={true}
                fallbackImage=""
              />
            </div>
          </div>
          <div className="pricing-second__col-02">
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

export default PricingSecond;
