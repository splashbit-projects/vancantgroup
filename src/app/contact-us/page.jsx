import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import "@/public/scss/contact.scss";
import React from "react";
import ContactUsHero from "./_components/ContactUsHero";
import Link from "next/link";

function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <RequestBlock title="Submit a form:" buttonText="Get assistance" />
      <div className="contact-socials">
        <Link href="https://www.facebook.com/vancantgroup" target="_blank">
          <img alt="facebook" src="/images/facebook.svg" />
        </Link>
        <Link href="https://www.instagram.com/vancantgroupcom/" target="_blank">
          <img alt="instagram" src="/images/instagram.svg" />
        </Link>
        <Link href="https://twitter.com/vancantgroup" target="_blank">
          <img alt="twitter" src="/images/x.svg" />
        </Link>
      </div>
    </>
  );
}

export default ContactUsPage;
