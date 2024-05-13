import RequestBlock from "@/src/app/_global-components/LayoutElements/RequestBlock";
import "@/public/scss/contact.scss";
import React from "react";
import ContactUsHero from "./_components/ContactUsHero";
import { Link } from "@/src/navigation";
import Facebook from "@/src/app/_global-components/LayoutElements/socials/Facebook";
import Instagram from "@/src/app/_global-components/LayoutElements/socials/Instagram";
import Twitter from "@/src/app/_global-components/LayoutElements/socials/Twitter";

export const metadata = {
  title: "Contact Us",
  description: "Contact a crypto marketing expert to find a solution for your crypto marketing challenge. The Vancant Group team will consult you on possible solutions from branding to compliance.",
  openGraph: {
    title: "Contact Us",
    description: "Contact a crypto marketing expert to find a solution for your crypto marketing challenge. The Vancant Group team will consult you on possible solutions from branding to compliance.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

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
