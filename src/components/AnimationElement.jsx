"use client";
import React, { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

function AnimationElement({ animation }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene={animation} />
    </Suspense>
  );
}

export default AnimationElement;
