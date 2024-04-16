"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import CardWithIcon from "@/src/components/LayoutElements/CardWithIcon";

function AboutThird() {
  return (
    <section className="about-third">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>Our business track</h2>
        </RevealWrapper>
        <RevealWrapper origin="bottom">
          <h4>
            As a new company, our journey is just beginning. While we may lack
            extensive <br />
            success stories or metrics, we're eager to share our business plan.
          </h4>
        </RevealWrapper>
        <div className="about-third__body">
            <CardWithIcon 
            icon={`/images/about/icon1.svg`}
            title={`Our Vision`}
            content={`<p>To revolutionise the crypto marketing landscape by leveraging innovative technologies and strategic insights to drive unparalleled growth and success for our clients.</p>`}
            />
            <CardWithIcon 
            icon={`/images/about/icon2.svg`}
            title={`Our Mission`}
            content={`<p>Our mission is to empower crypto projects with cutting-edge marketing solutions that propel them to achieve their goals and establish a prominent presence in the market.</p>`}
            />
        </div>
      </div>
    </section>
  );
}

export default AboutThird;
