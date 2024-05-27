"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

function BlogHero({ title, subtitle }) {
  return (
    <section className="blog-hero">
      <div className="_container">
        <div className="blog-hero__body">
          <RevealWrapper origin="bottom">
            <h1>{title}</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>{subtitle}</h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
