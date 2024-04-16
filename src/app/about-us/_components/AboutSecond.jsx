"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import React from "react";

function AboutSecond() {
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
          <p>
            Before Vancant Group, each of us was a respected expert in crypto
            and marketing. We often collaborated on tasks too challenging to
            tackle alone. Realising our collective strength, we joined forces to
            form Vancant Group.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default AboutSecond;
