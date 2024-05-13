"use client";
import React, { useEffect } from "react";
import { services } from "@/src/lib/services";
import ServiceBlock from "./ServiceBlock";
import { RevealList } from "next-reveal";
import OrderButton from "@/src/app/_global-components/LayoutElements/OrderButton";

function ServicesSecond() {
  useEffect(() => {
    console.log(services);
  }, []);

  return (
    <>
      <section className="services-loop">
        <div className="_container">
          <RevealList
            origin="bottom"
            interval={100}
            delay={0}
            className="services-loop__body"
          >
            {services.map((service, index) => (
              <div key={index} className="service-wrap">
                <div className="service-inner">
                  <div className="left">
                    <span className="number">0{service.id}</span>
                    <h2 dangerouslySetInnerHTML={{ __html: service.title }} />
                    <p>{service.content}</p>
                    <p>
                      <strong>The result: </strong>
                      {service.result}
                    </p>
                  </div>
                  <div className="right">
                    <h2>What is included?</h2>
                    <div
                      className="included"
                      dangerouslySetInnerHTML={{ __html: service.included }}
                    />
                    <OrderButton serviceInfo={service.title}/>
                  </div>
                </div>
                <span>{service.id}</span>
              </div>
            ))}
          </RevealList>
        </div>
      </section>
    </>
  );
}

export default ServicesSecond;
