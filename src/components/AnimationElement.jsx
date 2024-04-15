"use client";
import React, { Suspense, lazy } from "react";
const Spline = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("@splinetool/react-spline"));
      }, 500); // Delay for 3 seconds
    })
);

function AnimationElement({ animation }) {
  return (
    <Suspense>
      <Spline scene={animation} />
    </Suspense>
  );
}

export default AnimationElement;
