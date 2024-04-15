import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

function AnimationElement({ animation }) {
  const [loadAnimation, setLoadAnimation] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadAnimation(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        rootMargin: '50px', // Load slightly before the element comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  return (
    <div ref={containerRef}>
      {loadAnimation ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene={animation} />
        </Suspense>
      ) : (
        <div style={{ height: '500px', background: 'grey' }}>Waiting for load...</div> // Placeholder for layout shift prevention
      )}
    </div>
  );
}

export default AnimationElement;
