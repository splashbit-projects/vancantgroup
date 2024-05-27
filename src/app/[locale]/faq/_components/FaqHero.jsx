"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import ContactForm from "./ContactForm";

function FaqHero({ faqHeroTitle, faqHeroSubtitle, faqHeroQuestion }) {
  return (
    <section className="faq-hero">
      <div className="_container">
        <div className="faq-hero__body">
          <RevealWrapper origin="bottom">
            <h1>{faqHeroTitle}</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>{faqHeroSubtitle}</h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h4>{faqHeroQuestion}</h4>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
