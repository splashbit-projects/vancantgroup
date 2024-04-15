import React from "react";
import CircleProgressBar from "@/src/components/CircleProgressBar";

function ServicesPercents() {
  return (
    <section className="services-percents">
      <div className="_container">
        <h2>Expected growth metrics</h2>
        <div className="services-percents__body">
          <div>
            <CircleProgressBar percentageMax={100} prefix="+" />
            <p>
              Organic <br />
              traffic
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={75} prefix="+" />
            <p>
              Social media <br />
              engagement
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={47} prefix="-" />
            <p>
              Cost <br />
              per action
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={23} prefix="+" />
            <p>
              Conversion <br />
              rate
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={41} prefix="+" />
            <p>
              Click <br />
              through rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPercents;
