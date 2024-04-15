"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

function HomeHero() {
  const iframeRef = useRef(null);

  /*useEffect(() => {
    if (!iframeRef.current) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://my.spline.design/YbsmvAJ4EDVCvhZ4vURpYjaR/";
      iframe.frameBorder = "0";
      iframe.width = "100%";
      iframe.height = "100%";
      document.querySelector(".home-hero").appendChild(iframe);

      iframeRef.current = iframe;
    }
  }, []);*/

  return (
    <section className="home-hero">
      <Spline scene="https://prod.spline.design/iGt1os0rBVcedTIf/scene.splinecode" />
      <div className="_container">
        <div className="home-hero__body">
          <h1>
            Have a crypto project?
            <br />
            We will boost your marketing!
          </h1>
          <h2>End-to-end marketing solutions</h2>
          <div className="buttons">
            <Link href="#" className="main-button">
              Try now
            </Link>
            <Link href="#" className="secondary-button">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
