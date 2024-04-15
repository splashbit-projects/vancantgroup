"use client";
import React from "react";
import { RevealList, RevealWrapper } from "next-reveal";
import Link from "next/link";
import Spline from '@splinetool/react-spline';

function HomeWhy() {

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
            <h3>Advanced Technology</h3>
            <p>
              Vancant Group offers a streamlined solution tailored for crypto
              marketing. Our advanced tools and techniques integrate analytics
              seamlessly, covering all aspects of your marketing needs in one
              place. With our commitment to utilising the latest advancements,
              your marketing efforts are primed for competitive success in the
              crypto industry.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Adaptable Solutions</h3>
            <p>
              Bring us your project, regardless of size or budget, and watch it
              thrive. We offer flexible solutions that cater to projects of all
              levels. You can customise your toolkit according to your project's
              unique needs. Our approach ensures success without unnecessary
              costs—tailored precisely to your requirements.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Transparent Collaboration</h3>
            <p>
              Experience streamlined, transparent marketing solutions with
              Vancant Group. We work closely with our clients, ensuring clarity
              at every process step. Gain access to all tools and insights,
              allowing you to track campaign performance in real time. Spend
              less on logistics and more time making informed strategic
              decisions alongside our team.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Data-Driven Insights</h3>
            <p>
              Harness the power of real-time analytics and audience insights to
              drive informed decision-making. With the Vacant Group solutions,
              you get actionable data that empowers you to refine your targeting
              strategies, optimise campaign performance, and maximise ROI.
            </p>
          </div>
          <div>
            <span>05</span>
            <h3>Exclusive Media Reach</h3>
            <p>
              Our network spans top-tier crypto media outlets and influential
              experts, granting you access to platforms your competitors may
              struggle to reach. With our guidance, industry leaders will
              prominently feature and review your brand, elevating your
              visibility and credibility within the crypto community. Trust us
              to secure media exposure that sets you apart from the competition.
            </p>
          </div>
        </RevealList>
        <RevealWrapper origin="bottom" className="button-wrap">
          <Link href="#" className="main-button">
            Learn more
          </Link>
        </RevealWrapper>
      </div>
      <Spline scene="https://prod.spline.design/NanMajFNd0h8gBBf/scene.splinecode" />
    </section>
  );
}

export default HomeWhy;
