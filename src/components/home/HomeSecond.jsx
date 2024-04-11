"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useRef, useState, useEffect } from "react";

function HomeSecond() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);
  const [blockClass, setblockClass] = useState("");
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://my.spline.design/bXZ-Tpi3MJk9fpJQofWDC5Ve/";
      iframe.frameBorder = "0";
      iframe.width = "444";
      iframe.height = "444";
      document.querySelector(".fixed-block").appendChild(iframe);

      iframeRef.current = iframe;
    }
  }, []);

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
    <section className="home-second" ref={sectionRef}>
      <div className="_container">
        <h3>
          Crypto marketing is all about real-time data for informed decisions.
          Say goodbye <br />
          to guesswork and hello to a data-driven approach for unprecedented
          success.
        </h3>
        <h2>What is the Vacant Group?</h2>
        <div className="home-second__body">
          <div className="home-second__col-01">
            <div className={`fixed-block ${blockClass}`} ref={blockRef}></div>
          </div>
          <div className="home-second__col-02">
            <div className="column">
              <RevealWrapper origin="bottom" delay={500}>
                <h3>Strategic Data-Driven Marketing</h3>
                <div>
                  <p>
                    Vancant Group's approach is rooted in strategic analysis of
                    crypto market dynamics, audience behaviours, and competitor
                    strategies. By harnessing the power of data-driven insights,
                    we craft customised marketing strategies that resonate with
                    the crypto community, driving engagement and adoption of
                    your project.
                  </p>
                  <div>1</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={500}>
                <h3>End-to-End Crypto Marketing Solutions</h3>
                <div>
                  <p>
                    Vancant Group offers comprehensive marketing solutions
                    specifically designed for crypto projects. From community
                    building and enhancing search visibility to establishing
                    credibility and refining brand identity within the crypto
                    ecosystem, our services cover all facets of promoting crypto
                    projects, ensuring comprehensive support for your project's
                    success.
                  </p>
                  <div>2</div>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={500}>
                <h3>Expertise in Crypto Marketing Innovation</h3>
                <div>
                  <p>
                    With a team of professionals deeply immersed in crypto,
                    Vancant Group combines expertise with innovation to deliver
                    cutting-edge marketing solutions. We stay abreast of the
                    latest trends, technologies, and regulatory developments
                    within the crypto industry, enabling us to devise strategies
                    that capture attention, build trust, and drive adoption for
                    your crypto project.
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
