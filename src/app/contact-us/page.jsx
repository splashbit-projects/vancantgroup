import RequestBlock from "@/src/components/LayoutElements/RequestBlock";
import "@/public/scss/contact.scss";
import React from "react";
import ContactUsHero from "./_components/ContactUsHero";

function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <RequestBlock title="Submit a form:" buttonText="Get assistance" />
    </>
  );
}

export default ContactUsPage;
