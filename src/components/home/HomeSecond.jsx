"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useRef, useState, useEffect } from "react";

function HomeSecond() {
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
        } else if (sectionRect.bottom <= window.innerHeight) {
          setblockClass("is-absolute");
        } else if (
          sectionRect.top < 0 &&
          sectionRect.bottom > window.innerHeight
        ) {
          setblockClass("is-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="home-second"  ref={sectionRef}>
      <div className="_container">
        <h3>
          Crypto marketing is all about real-time data for informed decisions.
          <br />
          Say goodbye to guesswork and hello to data-driven strategies with our
          platform.
        </h3>
        <h2>What is the Vacant Group marketing solution?</h2>
        <div className="home-second__body">
          <div className="home-second__col-01">
            <div className={`fixed-block ${blockClass}`} ref={blockRef}>
              <iframe
                src="https://my.spline.design/bXZ-Tpi3MJk9fpJQofWDC5Ve/"
                frameBorder="0"
                width="444"
                height="444"
              ></iframe>
            </div>
          </div>
          <div className="home-second__col-02">
            <div className="column">
              <RevealWrapper origin="bottom" delay={500}>
                <p>
                  Experience the power of simplicity with our all-in-one crypto
                  marketing solution. Our intuitive interface allows you to
                  seamlessly connect all your marketing tools and analyse
                  cross-platform campaign performance in one place. By
                  consolidating data into a single interface, you gain deeper
                  insights and make more informed decisions for your marketing
                  strategies.
                </p>
                <div>1</div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={500}>
                <p>
                  Team of experts dedicated to continuously refining and
                  enhancing our platform. We are committed to seamless
                  integration with all marketing tools and leveraging the latest
                  technologies to maximise the effectiveness of your crypto
                  project's marketing efforts.
                </p>
                <div>2</div>
              </RevealWrapper>
              <RevealWrapper origin="bottom" delay={500}>
                <p>
                  The Vacant Group solution is all about flexibility tailored to
                  your needs. Choose the modules that fit your project
                  requirements, and pay only for what you use. Say goodbye to
                  unnecessary expenses and optimise your budget with our
                  customizable options.
                </p>
                <div>3</div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSecond;
