"use client";
import CardWithIcon from "@/src/app/[locale]/_global-components/LayoutElements/CardWithIcon";
import { RevealList, RevealWrapper } from "next-reveal";
import React from "react";

function HowSecond({ title, cards }) {
  return (
    <section className="how-second">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>{title}</h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={100}
          delay={0}
          className="how-second__body"
        >
          {cards.map((card, index) => (
            <CardWithIcon
              key={index}
              icon={`/images/how-it-works/solution${index + 1}.svg`}
              title={card.title}
              content={card.content}
            />
          ))}
        </RevealList>
      </div>
    </section>
  );
}

export default HowSecond;
