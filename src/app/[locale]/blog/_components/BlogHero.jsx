"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";


function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="_container">
        <div className="blog-hero__body">
          <RevealWrapper origin="bottom">
            <h1>What you need to know about crypto marketing</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>
            The latest insights and recommendations from the Vancant Group experts.
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BlogHero