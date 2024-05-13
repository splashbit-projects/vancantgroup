import { Link } from "@/src/navigation";
import React from "react";

function ServicesNeed() {
  return (
    <section className="services-need">
      <div className="services-need__container _container">
        <div className="services-need__body">
            <div className="services-need__content">
                <h2 className="services-need__title">Need assistance?</h2>
                <div className="services-need__text">Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!</div>
                <Link href="#" className="services-need__link">Contact us</Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesNeed;
