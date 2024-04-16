import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import "@/public/scss/contact.scss";
import React from "react";
import ContactUsHero from "./_components/ContactUsHero";
import Link from "next/link";
import Facebook from "@/src/components/LayoutElements/socials/Facebook";
import Instagram from "@/src/components/LayoutElements/socials/Instagram";
import Twitter from "@/src/components/LayoutElements/socials/Twitter";

function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <RequestBlock title="Submit a form:" buttonText="Get assistance" />
      <div className="contact-socials">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </>
  );
}

export default ContactUsPage;
