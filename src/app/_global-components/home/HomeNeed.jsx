import { Link } from "@/src/navigation";
import React from "react";

function HomeNeed() {
  return (
    <section className="home-need">
      <div className="home-need__container _container">
        <div className="home-need__body">
            <div className="home-need__content">
                <h2 className="home-need__title">Need assistance?</h2>
                <div className="home-need__text">Our experts are ready to analyse your crypto business and provide a tailored solution. It's free!</div>
                <Link href="#" className="home-need__link">Contact us</Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HomeNeed;
