import React from "react";
import "@/public/scss/faq.scss";
import FaqHero from "./_components/FaqHero";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import FaqQuestions from "./_components/FaqQuestions";
import { useTranslations } from "next-intl";
import { faqQuestionsIt } from "@/src/lib/faqQuestionsIt";
import { faqQuestionsEn } from "@/src/lib/faqQuestionsEn";
import { faqQuestionsDe } from "@/src/lib/faqQuestionsDe";
import ContactForm from "./_components/ContactForm";
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Marketing FAQ",
  description:
    "Struggling to succeed in marketing? Submit your issue to our experts, and we will provide you with possible reasons and solutions to drive your project to success. Read our expert answers.",
  openGraph: {
    title: "Marketing FAQ",
    description:
      "Struggling to succeed in marketing? Submit your issue to our experts, and we will provide you with possible reasons and solutions to drive your project to success. Read our expert answers.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};



function FaqPage({ params }) {
  const t = useTranslations("FaqPage");
  const faqQuestions = params.locale === "it" 
    ? faqQuestionsIt 
    : params.locale === "de" 
        ? faqQuestionsDe 
        : faqQuestionsEn;
  
  return (
    <>
      <FaqHero
        faqHeroTitle={t("faqHeroTitle")}
        faqHeroSubtitle={t("faqHeroSubtitle")}
        faqHeroQuestion={t("faqHeroQuestion")}
      />
      <ContactForm
        contactFormNamePlaceholder={t("contactFormNamePlaceholder")}
        contactFormEmailPlaceholder={t("contactFormEmailPlaceholder")}
        contactFormQuestionPlaceholder={t("contactFormQuestionPlaceholder")}
        contactFormSubmitButton={t("contactFormSubmitButton")}
        contactFormSuccessMessage={t("contactFormSuccessMessage")}
        validation_required={t("validation_required")}
        validation_email={t("validation_email")}
      />
      <FaqQuestions questions={faqQuestions} />
      <RequestBlock
        title={t("requestBlockTitle")}
        subtitle={t("requestBlockSubtitle")}
        buttonLink="/contact-us"
        buttonText={t("requestBlockButtonText")}
      />
    </>
  );
}



export default FaqPage;
