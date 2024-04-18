import Link from "next/link";
import React from "react";
import CardWithHover from "../LayoutElements/CardWithHover";

function HomeKey() {
  return (
    <section className="home-key">
      <div className="home-key__container _container">
        <div className="home-key__body">
          <h2 className="home-key__title">
            Maximise your marketing with Vancant Group
          </h2>
          <h3 className="home-key__subtitle">Key tasks</h3>
          <div className="home-key__content">
            <div className="home-key__row-01">
              <CardWithHover 
              image={`/images/home/vancant-home-key-01.png`}
              title={`Community Building and Engagement`}
              text={`We build and nurture engaged communities around your crypto
              project, fostering discussions, and encouraging
              participation to create a loyal following.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-02.png`}
              title={`Search Engine Optimization`}
              text={`Our team optimises your project's online presence to improve
              search visibility, ensuring your project ranks prominently
              in search engine results pages to attract organic traffic
              and potential investors.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-03.png`}
              title={`Content Creation and Distribution`}
              text={`We develop expert content that showcases your project's
              expertise, experience, and value proposition. We then
              strategically distribute it across various channels,
              including social media, blogs, and industry influencers to
              amplify reach and visibility.`}
              />
            </div>
            <div className="home-key__row-02">
            <CardWithHover 
              image={`/images/home/vancant-home-key-04.png`}
              title={`Reputation Management`}
              text={`We enhance your project's reputation and credibility within
              the crypto community through strategic messaging, proactive
              engagement, and crisis management.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-05.png`}
              title={`Brand Identity Development`}
              text={`We refine your brand identity to convey authenticity,
              expertise, and trustworthiness within the crypto ecosystem.
              We ensure consistency and coherence across all branding
              touchpoints, from logo design to brand messaging.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-06.png`}
              title={`Influencer Partnerships`}
              text={`We identify and forge strategic partnerships with key crypto
              influencers and thought leaders to amplify your project's
              message and reach a broader audience.`}
              />
            </div>
            <div className="home-key__row-03">
            <CardWithHover 
              image={`/images/home/vancant-home-key-07.png`}
              title={`Paid Advertising Campaigns`}
              text={`We design and manage targeted paid advertising campaigns
              across various platforms, including social media, search
              engines, and crypto-specific channels, to maximise
              visibility and reach.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-08.png`}
              title={`Analytics and Reporting`}
              text={`We provide comprehensive analytics and reporting to track
              the performance of marketing efforts, measure key
              performance indicators, and derive actionable insights for
              continuous optimization and improvement.`}
              />
              <CardWithHover 
              image={`/images/home/vancant-home-key-09.png`}
              title={`Regulatory Compliance`}
              text={`We ensure that the marketing adheres to relevant regulatory
              guidelines and compliance standards within the crypto
              industry, mitigating risks and maintaining the integrity of
              your project's reputation.`}
              />
            </div>
          </div>
          <Link href="/services" className="home-key__link">
            Try now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeKey;
