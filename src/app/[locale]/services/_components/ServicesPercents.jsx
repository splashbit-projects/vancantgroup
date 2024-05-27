import React from "react";
import CircleProgressBar from "@/src/app/[locale]/_global-components/LayoutElements/CircleProgressBar";

function ServicesPercents({percentsTitle, organicTraffic, socialMediaEngagement, costPerAction, conversionRate, clickThroughRate}) {
  return (
    <section className="services-percents">
      <div className="_container">
        <h2>{percentsTitle}</h2>
        <div className="services-percents__body">
          <div>
            <CircleProgressBar percentageMax={100} prefix="+" />
            <p>
              {organicTraffic}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={75} prefix="+" />
            <p>
              {socialMediaEngagement}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={47} prefix="-" />
            <p>
              {costPerAction}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={23} prefix="+" />
            <p>
              {conversionRate}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={41} prefix="+" />
            <p>
              {clickThroughRate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPercents;
