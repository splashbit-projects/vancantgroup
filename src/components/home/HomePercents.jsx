import React from "react";
import CircleProgressBar from "../LayoutElements/CircleProgressBar";

function HomePercents() {
  return (
    <section className="home-percents">
      <div className="_container">
        <h2>Learn the latest research data by Vacant Group</h2>
        <div className="home-percents__body">
          <div>
            <CircleProgressBar percentageMax={30}/>
            <p>
              Crypto projects lose approximately 30% of their potential revenue
              due to inadequate marketing analytics and insights.
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={50} />
            <p>
              Over 50% of crypto projects report that up to 40% of their budget
              is spent ineffectively due to poor targeting, inefficient campaign
              management, and lack of data-driven decision-making
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={70} />
            <p>
              Nearly 70% of crypto projects fail within their first year of
              operation in the market, often attributed to challenges in
              acquiring and retaining users, ineffective marketing strategies,
              and fierce competition.
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={60} />
            <p>
              Our study shows that over 60% of crypto businesses struggle with
              inefficient audience targeting, resulting in lower conversion
              rates and suboptimal campaign performance.
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={80} />
            <p>
              80% of crypto projects admit to underutilizing available data for
              marketing purposes, missing out on valuable insights that could
              drive more effective strategies and better outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePercents;
