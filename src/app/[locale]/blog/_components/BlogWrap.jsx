"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Link } from "@/src/navigation";


function BlogWrap({mainPostTitle, mainPostDescription, secondaryPost1Title, secondaryPost2Title, secondaryPost3Title, readButton}) {
  return (
    <section className="blog-wrap">
      <div className="_container">
        <div className="blog-wrap__body">
          <div className="left">
            <RevealWrapper origin="bottom">
              <Link href="/blog/maximising-roi-effective-strategies-for-optimising-ppc-campaigns">
                <img src="/images/blog.png" />
              </Link>
              <h2>
                <Link href="/blog/maximising-roi-effective-strategies-for-optimising-ppc-campaigns">
                  {mainPostTitle}
                </Link>
              </h2>
              <p>
                {mainPostDescription}
              </p>
              <Link
                href="/blog/maximising-roi-effective-strategies-for-optimising-ppc-campaigns"
                className="main-button"
              >
                {readButton}
              </Link>
            </RevealWrapper>
          </div>
          <div className="right">
            <RevealWrapper origin="bottom">
              <h2>
                <Link href="/blog/navigating-regulatory-challenges-compliance-tips-for-advertising">
                  {secondaryPost1Title}
                </Link>
              </h2>
              <Link
                href="/blog/navigating-regulatory-challenges-compliance-tips-for-advertising"
                className="main-button"
              >
                {readButton}
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <h2>
                <Link href="/blog/harnessing-the-power-of-influencer-marketing">
                 {secondaryPost2Title}
                </Link>
              </h2>
              <Link
                href="/blog/harnessing-the-power-of-influencer-marketing"
                className="main-button"
              >
                {readButton}
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <h2>
                <Link href="/blog/content-marketing-crafting-really-engaging-content-for-your-audiences">
                  {secondaryPost3Title}
                </Link>
              </h2>
              <Link
                href="/blog/content-marketing-crafting-really-engaging-content-for-your-audiences"
                className="main-button"
              >
                {readButton}
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogWrap;
