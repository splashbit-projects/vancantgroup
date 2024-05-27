import React from "react";
import "@/public/scss/services.scss";
import ServicesHero from "./_components/ServicesHero";
import ServicesPercents from "./_components/ServicesPercents";
import ServicesSecond from "./_components/ServicesSecond";
import RequestBlock from "@/src/app/[locale]/_global-components/LayoutElements/RequestBlock";
import OrderPopup from "@/src/app/[locale]/_global-components/LayoutElements/OrderPopup";
import { useTranslations } from "next-intl";
import { servicesEn } from "@/src/lib/servicesEn";
import { servicesIt } from "@/src/lib/servicesIt";

export const metadata = {
  title: "Crypto marketing services",
  description:
    " Explore crypto marketing services for community building, SEO, PR, advertising strategies, compliance, and branding. At Vancant Group, we guide your project from inception to success.",
  openGraph: {
    title: "Crypto marketing services",
    description:
      " Explore crypto marketing services for community building, SEO, PR, advertising strategies, compliance, and branding. At Vancant Group, we guide your project from inception to success.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function ServicesPage({ params }) {
  const tP = useTranslations("PricingPage");
  const tS = useTranslations("ServicesPage");
  const services = params.locale === "it" ? servicesIt : servicesEn;

  const validationMessages = {
    required: tP("validation.required"),
    email: tP("validation.email"),
    acceptTerms: tP("validation.acceptTerms"),
    acceptTermsLabel: tP("validation.acceptTermsLabel"),
    successTitle: tP("validation.successTitle"),
    successMessage: tP("validation.successMessage"),
  };

  return (
    <>
      <ServicesHero title={tS("heroTitle")} subtitle={tS("heroSubtitle")} />
      <ServicesSecond
        services={services}
        orderButtonText={tP("pricingLoop.orderButtonText")}
        result={tS("result")}
        included={tS("included")}
      />
      <ServicesPercents
        percentsTitle={tS("percentsTitle")}
        organicTraffic={tS.rich("metrics.organicTraffic", {
          br: () => <br />,
        })}
        socialMediaEngagement={tS.rich("metrics.socialMediaEngagement", {
          br: () => <br />,
        })}
        costPerAction={tS.rich("metrics.costPerAction", {
          br: () => <br />,
        })}
        conversionRate={tS.rich("metrics.conversionRate", {
          br: () => <br />,
        })}
        clickThroughRate={tS.rich("metrics.clickThroughRate", {
          br: () => <br />,
        })}
      />
      <RequestBlock
        title={tS("requestBlockTitle")}
        subtitle={tS("requestBlockSubtitle")}
        buttonLink="/contact-us"
        buttonText={tS("requestBlockButtonText")}
      />
      <OrderPopup
        orderTitle={tP("orderPopup.orderTitle")}
        placeholders={{
          name: tP("orderPopup.placeholders.name"),
          email: tP("orderPopup.placeholders.email"),
          phone: tP("orderPopup.placeholders.phone"),
          project: tP("orderPopup.placeholders.project"),
          date: tP("orderPopup.placeholders.date"),
          description: tP("orderPopup.placeholders.description"),
        }}
        validationMessages={validationMessages}
      />
    </>
  );
}

export default ServicesPage;
