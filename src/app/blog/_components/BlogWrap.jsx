"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";

function BlogWrap() {
  return (
    <section className="blog-wrap">
      <div className="_container">
        <div className="blog-wrap__body">
          <div className="left">
            <RevealWrapper origin="bottom">
              <img src="/images/blog.png" />
              <h2>
                Maximising ROI: Effective Strategies for Optimising PPC
                Campaigns in Crypto Marketing
              </h2>
              <p>
                Learn how to supercharge your crypto marketing efforts with
                expert tips and strategies to drive targeted traffic, generate
                leads, and maximise ROI from your PPC campaigns in the dynamic
                world of cryptocurrency marketing.
              </p>
              <Link href="/blog/maximising-roi-effective-strategies-for-optimising-ppc-campaigns-in-crypto-marketing" className="main-button">
                Read
              </Link>
            </RevealWrapper>
          </div>
          <div className="right">
            <RevealWrapper origin="bottom">
              <h2>
                Navigating Regulatory Challenges: Compliance Tips for Crypto
                Advertising
              </h2>
              <Link href="/blog/navigating-regulatory-challenges-compliance-tips-for-crypto-advertising" className="main-button">
                Read
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <h2>
                Harnessing the Power of Influencer Marketing in Cryptocurrency
                Promotion
              </h2>
              <Link href="/blog/harnessing-the-power-of-influencer-marketing-in-cryptocurrency-promotion" className="main-button">
                Read
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <h2>
                Crypto Content Marketing: Crafting Engaging Content for Digital
                Currency Audiences
              </h2>
              <Link href="/blog/crypto-content-marketing-crafting-engaging-content-for-digital-currency-audiences" className="main-button">
                Read
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogWrap;
