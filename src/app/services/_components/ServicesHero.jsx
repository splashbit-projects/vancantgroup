'use client';
import Spline from "@splinetool/react-spline";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="_container">
        <div className="services-hero__body">
          <div>
            <h1>Crypto marketing services</h1>
            <p>
              Explore our end-to-end crypto marketing services, <br />
              seamlessly guiding your project from inception to <br />
              success with strategic precision.
            </p>
          </div>
          <Spline scene="https://prod.spline.design/BItA6BDVRC1IudSH/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
