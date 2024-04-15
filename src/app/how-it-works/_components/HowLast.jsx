import React from 'react';
import Link from "next/link";

function HowLast() {
  return (
    <section className="how-last">
      <div className="how-last__container _container">
        <div className="how-last__body">
            <div className="how-last__content">
                <h2 className="how-last__title">Ready to unlock the full potential <br/>of your crypto project?</h2>
                <Link href="#" className="how-last__link">Request solution</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HowLast