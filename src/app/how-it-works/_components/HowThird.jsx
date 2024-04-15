"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useRef, useState, useEffect } from "react";
import AnimationElement from "@/src/components/AnimationElement";

function HowThird() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && blockRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const blockRect = blockRef.current.getBoundingClientRect();

        if (sectionRect.top >= 0) {
          setblockClass("");
        } else if (sectionRect.bottom <= window.innerHeight - 300) {
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight - 300
        ) {
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="how-third" ref={sectionRef}>
      <div className="_container">
        <h2>How we turn unknown brands into success stories</h2>
        <div className="how-third__body">
          <div className="how-third__col-01">
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <AnimationElement
                animation="https://prod.spline.design/4LyeK5Yvi3fhB2P1/scene.splinecode"
                mobileHidden={true}
                fallbackImage=""
              />
            </div>
          </div>
          <div className="how-third__col-02">
            <div className="column">
              <RevealWrapper origin="bottom" delay={100}>
                <div>
                  <div>
                    <h3>Analysing Online Presence:</h3>
                    <p>
                      We conduct a thorough analysis of your project's online
                      presence. This includes assessing its digital footprint
                      and understanding how it is perceived in the digital
                      space.
                    </p>
                  </div>
                  <div>1</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <div>
                  <div>
                    <h3>Optimising the Website</h3>
                    <p>
                      We start by optimising your website to ensure it resonates
                      with your target audience and effectively communicates
                      your brand message and value proposition.
                    </p>
                  </div>
                  <div>2</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <div>
                  <div>
                    <h3>Crafting Expert Content</h3>
                    <p>
                      Our content specialists create expert and relevant content
                      that addresses the pain points and interests of your
                      target audience, positioning your brand as a trusted
                      authority in the industry.
                    </p>
                  </div>
                  <div>3</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <div>
                  <div>
                    <h3>Strategic Media Placement</h3>
                    <p>
                      We strategically select the best media outlets to feature
                      your articles, ensuring maximum visibility and engagement
                      among your target audience.
                    </p>
                  </div>
                  <div>4</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={100}>
                <div>
                  <div>
                    <h3>Natural Brand Mentions</h3>
                    <p>
                      Through our network and partnerships, we secure natural
                      brand mentions and placements on platforms and websites
                      where your target audience is most active.
                    </p>
                  </div>
                  <div>5</div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowThird;
