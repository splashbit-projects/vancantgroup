import React from "react";
import "@/public/scss/pricing.scss";
import PricingHero from "./_components/PricingHero";
import PricingSecond from "./_components/PricingSecond";
import PricingThird from "./_components/PricingThird";
import PricingLoop from "./_components/PricingLoop";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import OrderPopup from "@/src/app/[locale]/_global-components/LayoutElements/OrderPopup";
import { useTranslations } from "next-intl";
import { pricingEn } from "@/src/lib/pricingEn";
import { pricingIt } from "@/src/lib/pricingIt";
import { pricingDe } from "@/src/lib/pricingDe";

export const metadata = {
  title: "Crypto marketing pricing",
  description:
    "Explore Vancant Group's pricing approach. Learn how we explore and analyse a project to offer and price a solution. Discover complex service packages for different stages of crypto projects.",
  openGraph: {
    title: "Crypto marketing pricing",
    description:
      "Explore Vancant Group's pricing approach. Learn how we explore and analyse a project to offer and price a solution. Discover complex service packages for different stages of crypto projects.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function PricingPage({ params }) {
  const t = useTranslations("PricingPage");
  const pricing = params.locale === "it" 
    ? pricingIt 
    : params.locale === "de" 
        ? pricingDe 
        : pricingEn;

  const validationMessages = {
    required: t("validation.required"),
    email: t("validation.email"),
    acceptTerms: t("validation.acceptTerms"),
    acceptTermsLabel: t("validation.acceptTermsLabel"),
    successTitle: t("validation.successTitle"),
    successMessage: t("validation.successMessage"),
  };

  return (
    <>
      <PricingHero
        title={t("hero.title")}
        subtitle={t.rich("hero.subtitle", {
          br: () => <br />,
        })}
      />
      <PricingSecond
        intro={t.rich("second.intro", {
          br: () => <br />,
        })}
        title={t("second.title")}
        steps={[
          {
            title: t("second.step1.title"),
            description: t("second.step1.description"),
          },
          {
            title: t("second.step2.title"),
            description: t("second.step2.description"),
          },
          {
            title: t("second.step3.title"),
            description: t("second.step3.description"),
          },
          {
            title: t("second.step4.title"),
            description: t("second.step4.description"),
          },
          {
            title: t("second.step5.title"),
            description: t("second.step5.description"),
          },
          {
            title: t("second.step6.title"),
            description: t("second.step6.description"),
          },
        ]}
      />
      <RequestBlock
        title={t("requestBlock.title")}
        subtitle={t("requestBlock.subtitle")}
        buttonLink=""
        buttonText={t("requestBlock.buttonText")}
      />
      <PricingLoop
        pricing={pricing}
        title={t.rich("pricingLoop.title", {
          br: () => <br />,
        })}
        orderButtonText={t("pricingLoop.orderButtonText")}
      />
      <OrderPopup
        orderTitle={t("orderPopup.orderTitle")}
        placeholders={{
          name: t("orderPopup.placeholders.name"),
          email: t("orderPopup.placeholders.email"),
          phone: t("orderPopup.placeholders.phone"),
          project: t("orderPopup.placeholders.project"),
          date: t("orderPopup.placeholders.date"),
          description: t("orderPopup.placeholders.description"),
        }}
        validationMessages={validationMessages}
      />
    </>
  );
}

export default PricingPage;
