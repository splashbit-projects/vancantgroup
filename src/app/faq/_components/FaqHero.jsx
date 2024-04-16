"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import ContactForm from "./ContacFrom";

function FaqHero() {
  return (
    <section className="faq-hero">
      <div className="_container">
        <div className="faq-hero__body">
          <RevealWrapper origin="bottom">
            <h1>You ask, we answer</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>
            Submit your case and get an expert solution. It is free.
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h4>I have a crypto marketing question</h4>
          </RevealWrapper>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
