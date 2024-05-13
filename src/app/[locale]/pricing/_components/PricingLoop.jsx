"use client";
import React, { useEffect } from "react";
import { pricing } from "@/src/lib/pricing";
import { RevealWrapper, RevealList } from "next-reveal";
import OrderButton from "@/src/app/_global-components/LayoutElements/OrderButton";

function PricingLoop() {
  useEffect(() => {
    console.log(pricing);
  }, []);

  return (
    <>
      <section className="pricing-loop">
        <div className="_container">
          <RevealWrapper origin="bottom">
            <h2>
              Seeking a comprehensive solution?
              <br />
              Discover our package offerings.
            </h2>
          </RevealWrapper>

          <RevealList
            origin="bottom"
            interval={0}
            delay={0}
            className="pricing-loop__body"
          >
            {pricing.map((item, index) => (
              <div key={index} className="service-wrap">
                <div className="service-inner">
                  <div className="left">
                    <div className="title-wrap">
                      <span className="number">0{item.id}</span>
                      <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <p>{item.content}</p>
                  </div>
                  <div className="right">
                    <div
                      className="included"
                      dangerouslySetInnerHTML={{ __html: item.included }}
                    />
                    <div className="price-row">
                      <OrderButton serviceInfo={item.title} />
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </RevealList>
        </div>
      </section>
    </>
  );
}

export default PricingLoop;
