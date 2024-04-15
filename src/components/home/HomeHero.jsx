"use client";
import Link from "next/link";
import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

function HomeHero() {

  return (
    <section className="home-hero">
      <Suspense fallback={<img src="/images/home/animation1-placeholder.webp" />}>
        <Spline scene="https://prod.spline.design/iGt1os0rBVcedTIf/scene.splinecode" />
      </Suspense>
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
