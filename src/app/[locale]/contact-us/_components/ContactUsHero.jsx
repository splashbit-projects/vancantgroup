"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";
import { Link } from "@/src/navigation";

function ContactUsHero({title, subtitle, text, submit}) {
  return (
    <section className="contact-us">
      <div className="_container">
        <div className="contact-us__body">
          <RevealWrapper origin="bottom">
            <h1>{title}</h1>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h2>
              {subtitle}
            </h2>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <span></span>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <p>
              {text}
            </p>
          </RevealWrapper>
          <RevealWrapper origin="bottom">
            <h4>{submit}</h4>
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
