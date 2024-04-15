import React from 'react';
import Link from "next/link";

function PricingThird() {
  return (
    <section className="pricing-third">
      <div className="pricing-third__container _container">
        <div className="pricing-third__body">
            <div className="pricing-third__content">
                <h2 className="pricing-third__title">Have a crypto project?</h2>
                <div className="pricing-third__text">Let us discuss its marketing to success!</div>
                <Link href="#" className="pricing-third__link">Request solution</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PricingThird