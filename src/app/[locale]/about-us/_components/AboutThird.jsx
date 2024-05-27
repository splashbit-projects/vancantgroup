"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import CardWithIcon from "@/src/app/[locale]/_global-components/LayoutElements/CardWithIcon";

function AboutThird({ title, subtitle, vision, mission }) {
  console.log(mission);
  return (
    <section className="about-third">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>{title}</h2>
        </RevealWrapper>
        <RevealWrapper origin="bottom">
          <h4>{subtitle}</h4>
        </RevealWrapper>
        <div className="about-third__body">
          <CardWithIcon 
            icon={vision.icon}
            title={vision.title}
            content={`<p>${vision.content}</p>`}
          />
          <CardWithIcon 
            icon={mission.icon}
            title={mission.title}
            content={`<p>${mission.content}</p>`}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutThird;
