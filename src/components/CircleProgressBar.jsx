"use client";
import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const CircleProgressBar = ({ percentageMax, prefix = '' }) => {
  const [percentage, setPercentage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); 

  const onVisibilityChange = isVisible => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setPercentage(progress);
        if (progress >= percentageMax) clearInterval(interval); 
      }, 50);
    }
  };

  return (
    <VisibilitySensor
      onChange={onVisibilityChange}
      partialVisibility={true}
      offset={{ top: 10, bottom: 10 }}
    >
      <div>
        <CircularProgressbar
          strokeWidth={5}
          value={percentage}
          text={`${prefix}${percentage}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `#E74848`,
            textColor: "#fff",
            trailColor: "#1B1B1B",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    </VisibilitySensor>
  );
};

export default CircleProgressBar;
