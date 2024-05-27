"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useRef, useState, useEffect } from "react";
import AnimationElement from "../LayoutElements/AnimationElement";
import { useTranslations } from "next-intl";

function HomeSecond({ bannerTitle, bannerSubtitle, whatTitle, stepOneTitle, stepOneText, stepTwoTitle, stepTwoText, stepThreeTitle, stepThreeText }) {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  return (
    <section className="home-second">
      <div className="_container">
        <div className="home-second__banner">
          <h5>{bannerTitle}</h5>
          <h3>{bannerSubtitle}</h3>
        </div>
        <h2>{whatTitle}</h2>
        <div className="home-second__body">
          <div className="home-second__col-01">
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <AnimationElement
                animation="https://prod.spline.design/4LyeK5Yvi3fhB2P1/scene.splinecode"
                mobileHidden={true}
                fallbackImage=""
              />
            </div>
          </div>
          <div className="home-second__col-02" ref={sectionRef}>
            <div className="column">
              <RevealWrapper origin="bottom" delay={100}>
                <h3>{stepOneTitle}</h3>
                <div>
                  <p>
                    {stepOneText}
                  </p>
                  <div>1</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <h3>{stepTwoTitle}</h3>
                <div>
                  <p>
                    {stepTwoText}
                  </p>
                  <div>2</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <h3>{stepThreeTitle}</h3>
                <div>
                  <p>
                    {stepThreeText}
                  </p>
                  <div>3</div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSecond;
