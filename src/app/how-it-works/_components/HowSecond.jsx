"use client";
import { RevealList, RevealWrapper } from "next-reveal";
import React from "react";

function HowSecond() {
  return (
    <section className="how-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Vancant Group delivers results-driven marketing solutions <br />
            backed by data science. Here's how we do it:
          </h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={100}
          delay={0}
          className="how-second__body"
        >
          <div>
            <div className="solution-inner">
              <img src="/images/how-it-works/solution1.svg" />
              <h3>Data-Driven Approach</h3>
              <p>
                Our marketing strategies are based on precise data analysis,
                ensuring informed decisions and optimised campaigns for maximum
                impact.
              </p>
            </div>
          </div>
          <div>
            <div className="solution-inner">
              <img src="/images/how-it-works/solution2.svg" />
              <h3>Advanced Tools and Technologies</h3>
              <ul>
                <li>AI-powered consumer insights tools</li>
                <li>Social listening and sentiment analysis software</li>
                <li>Conversion rate optimization (CRO) tools</li>
                <li>Predictive modelling and machine learning algorithms</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="solution-inner">
              <img src="/images/how-it-works/solution3.svg" />
              <h3>Internal Solution for <br/>Performance Tracking</h3>
              <p>
                Our proprietary solution tracks your crypto brand's performance
                in one interface. This visual overview allows us to monitor
                subtle changes and make timely adjustments to our strategies.
              </p>
            </div>
          </div>
          <div>
            <div className="solution-inner">
              <img src="/images/how-it-works/solution4.svg" />
              <h3>Transparent Reporting</h3>
              <p>
                We provide regular, transparent reports on campaign performance.
                Clients are often pleasantly surprised by the positive results.
              </p>
            </div>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default HowSecond;
