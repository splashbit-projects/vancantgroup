import Link from "next/link";
import React from "react";

function HomeKey() {
    return (
        <section className="home-key">
            <div className="home-key__container _container">
                <div className="home-key__body">
                    <h2 className="home-key__title">Maximise your marketing with Vacant Group</h2>
                    <h3 className="home-key__subtitle">Key tasks</h3>
                    <div className="home-key__content">
                        <div className="home-key__row-01">
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-01.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Campaign Optimization</h4>
                                    <div className="text">Our solution enhances your campaigns with real-time insights and analytics, maximising your ROI and driving better results.</div>
                                </div>
                            </div>
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-02.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Audience Targeting</h4>
                                    <div className="text">Leverage our expertise to identify and engage your ideal audience segments, boosting conversion rates and engagement.</div>
                                </div>
                            </div>
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-03.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Content Personalization</h4>
                                    <div className="text">With Vacant Group  guidance, craft tailored content strategies to resonate with your audience and foster stronger connections.</div>
                                </div>
                            </div>
                        </div>
                        <div className="home-key__row-02">
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-04.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Performance Analysis</h4>
                                    <div className="text">Rely on our expertise and precision to dissect campaign data, uncovering trends and opportunities to refine your marketing strategies.</div>
                                </div>
                            </div>
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-05.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Cross-Platform Integration</h4>
                                    <div className="text">Our platform ensures seamless integration across various marketing channels, optimising your reach and enhancing campaign effectiveness in a single interface.</div>
                                </div>
                            </div>
                            <div className="home-key__item">
                                <div className="home-key__image"><img src="../images/vancant-home-key-06.png" alt="image" /></div>
                                <div className="home-key__hide">
                                    <h4 className="title">Effective Budget Allocation</h4>
                                    <div className="text">Start now to optimise your budget allocation strategies, maximising the impact of your marketing spending and achieving better ROI.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="#" className="home-key__link">Try now</Link>
                </div>
            </div>
        </section>
    );
}

export default HomeKey;
