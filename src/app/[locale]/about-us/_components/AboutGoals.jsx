import CardWithHover from '@/src/app/[locale]/_global-components/LayoutElements/CardWithHover';
import React from 'react';

function AboutGoals({ goalsTitle, goals }) {
  return (
    <section className="about-goals">
      <div className="about-goals__container _container">
        <div className="about-goals__body">
          <h2 className="about-goals__title">
            {goalsTitle}
          </h2>
          <div className="about-goals__content">
            <div className="about-goals__row-01">
              <CardWithHover 
                image={goals[0].image}
                title={goals[0].title}
                text={goals[0].text}
              />
              <CardWithHover 
                image={goals[1].image}
                title={goals[1].title}
                text={goals[1].text}
              />
              <CardWithHover 
                image={goals[2].image}
                title={goals[2].title}
                text={goals[2].text}
              />
            </div>
            <div className="about-goals__row-02">
              <CardWithHover 
                image={goals[3].image}
                title={goals[3].title}
                text={goals[3].text}
              />
              <CardWithHover 
                image={goals[4].image}
                title={goals[4].title}
                text={goals[4].text}
              />
              <CardWithHover 
                image={goals[5].image}
                title={goals[5].title}
                text={goals[5].text}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGoals;
