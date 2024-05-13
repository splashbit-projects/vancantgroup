import CardWithHover from '@/src/app/_global-components/LayoutElements/CardWithHover'
import React from 'react'

function AboutGoals() {
  return (
    <section className="about-goals">
      <div className="about-goals__container _container">
        <div className="about-goals__body">
          <h2 className="about-goals__title">
          Our Goals
          </h2>
          <div className="about-goals__content">
            <div className="about-goals__row-01">
              <CardWithHover 
              image={`/images/about/goal1.png`}
              title={`New Technologies`}
              text={`Continuously adopt and integrate the latest technologies and tools to enhance our marketing strategies and stay ahead of industry trends.`}
              />
              <CardWithHover 
              image={`/images/about/goal2.png`}
              title={`Team Growth`}
              text={`Cultivate a talented and diverse team of professionals passionate about delivering exceptional results and driving innovation.`}
              />
              <CardWithHover 
              image={`/images/about/goal3.png`}
              title={`Market Expansion`}
              text={`Expand our market reach and presence globally, establishing Vancant as a leading provider of crypto marketing solutions.`}
              />
            </div>
            <div className="about-goals__row-02">
            <CardWithHover 
              image={`/images/about/goal4.png`}
              title={`New Industries to Cover`}
              text={`Diversify our portfolio by exploring new industries and verticals to offer our expertise and services.`}
              />
              <CardWithHover 
              image={`/images/about/goal5.png`}
              title={`New Solutions to Add`}
              text={`Develop and introduce new marketing solutions and services to address the evolving needs of our clients and the market.`}
              />
              <CardWithHover 
              image={`/images/about/goal6.png`}
              title={`Continuous Improvement`}
              text={`Strive for continuous improvement and excellence in all operations for highest level satisfaction.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutGoals