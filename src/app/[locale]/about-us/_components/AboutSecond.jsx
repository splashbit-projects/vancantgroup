"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import React from "react";

function AboutSecond({ description }) {
  return (
    <section className="about-second">
      <div className="_container">
        <RevealWrapper origin="bottom" className="about-second__body">
          <Image
            src={"/images/about/about-second.png"}
            alt="image"
            width={540}
            height={215}
          />
          <p>{description}</p>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default AboutSecond;
