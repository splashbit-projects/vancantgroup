"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Link } from "@/src/navigation";

function ContactUsHero() {
  return (
    <section className="contact-us">
      <div className="_container">
        <div className="contact-us__body">
          <RevealWrapper origin="bottom">
            <h1>We are here to help you!</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>
              Get assistance from crypto marketing experts - any questions. It
              is free.
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <p>
              Do you need a cryptocurrency marketing strategy? Or are you
              looking for <br />
              blockchain marketing? Our company is here to assist you!
            </p>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h4>Submit your question</h4>
          </RevealWrapper>
          <div className="contacts-row">
            <RevealWrapper origin="bottom">
              <Link href="mailto:info@vancantgroup.com">
                <img src="/images/contacts/email.svg" />
                info@vancantgroup.com
              </Link>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <Link href="tel:+447458149501">
                <img src="/images/contacts/phone.svg" />
                +447458149501
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsHero;
