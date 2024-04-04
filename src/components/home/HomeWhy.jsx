"use client";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";
import Link from "next/link";
import { useEffect, useRef } from "react";

function HomeWhy() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!iframeRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://my.spline.design/zV4znUuKNLPTppCxvyk3M3Yk/";
      iframe.frameBorder = "0";
      iframe.width = "100%";
      iframe.height = "567";
      document.querySelector(".home-why").appendChild(iframe);

      iframeRef.current = iframe;
    }
  }, []);
  return (
    <section className="home-why">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Why you need Vacant Group <br />
            for your crypto project
          </h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={100}
          delay={0}
          className="home-why__body"
        >
          <div>
            <span>01</span>
            <h3>Comprehensive Solution:</h3>
            <p>
              Vacant Group offers a comprehensive suite of tools designed
              specifically for crypto marketing. From campaign management to
              audience insights and compliance, our solution covers all aspects
              of your marketing needs in one place.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Customizable Flexibility:</h3>
            <p>
              Tailor your choice of tools to fit your project's unique
              requirements. Choose the modules that align with your goals and
              pay only for what you need. Our flexible approach ensures you have
              the tools necessary to succeed without unnecessary overhead.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Streamlined Efficiency:</h3>
            <p>
              Say goodbye to scattered workflows and manual processes. With the
              Vacant Group solution, you can streamline your marketing
              operations by centralising data, automating tasks, and optimising
              campaign performance. Spend less time on logistics and more time
              on strategic decision-making.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Data-Driven Insights:</h3>
            <p>
              Harness the power of real-time analytics and audience insights to
              drive informed decision-making. With the Vacant Group solutions,
              you can access actionable data that empowers you to refine your
              targeting strategies, optimise campaign performance, and maximise
              ROI.
            </p>
          </div>
          <div>
            <span>05</span>
            <h3>Future-Proof Technology:</h3>
            <p>
              The integration with the latest marketing tools and technologies
              allows you to stay ahead of the crypto competition. Our solutions
              constantly evolve to keep pace with industry trends, ensuring your
              crypto project remains competitive in a rapidly changing
              landscape.
            </p>
          </div>
        </RevealList>
        <RevealWrapper origin="bottom" className="button-wrap">
          <Link href="#" className="main-button">
            Learn more
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default HomeWhy;
