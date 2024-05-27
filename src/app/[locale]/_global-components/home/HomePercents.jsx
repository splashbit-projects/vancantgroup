import React from "react";
import CircleProgressBar from "../LayoutElements/CircleProgressBar";

function HomePercents({title, col1, col2, col3, col4, col5}) {
  return (
    <section className="home-percents">
      <div className="_container">
        <h2>{title}</h2>
        <div className="home-percents__body">
          <div>
            <CircleProgressBar percentageMax={30}/>
            <p>
              {col1}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={50} />
            <p>
              {col2}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={70} />
            <p>
              {col3}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={60} />
            <p>
              {col4}
            </p>
          </div>
          <div>
            <CircleProgressBar percentageMax={80} />
            <p>
              {col5}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePercents;
