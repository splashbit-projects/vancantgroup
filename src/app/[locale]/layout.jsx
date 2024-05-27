import Header from "@/src/app/[locale]/_global-components/Header";
import Footer from "@/src/app/[locale]/_global-components/Footer";
import "@/public/scss/base.scss";
import { DM_Sans } from "next/font/google";
import { PopupsProvider } from "../../utils/PopupsContext";
import Preloader from "@/src/app/[locale]/_global-components/Preloader";
import RequestPopup from "@/src/app/[locale]/_global-components/LayoutElements/RequestPopup";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleAnalytics } from '@next/third-parties/google';
import { useTranslations } from "next-intl";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Crypto marketing solutions | Vancant Group",
    template: "%s | Vancant Group",
  },
  description:
    "Discover the potential of marketing for your crypto projects. Vancant Group drives your crypto project to success through natural mentions, influencer recommendations, and connections.",
  openGraph: {
    title: {
      default: "Crypto marketing solutions | Vancant Group",
      template: "%s | Vancant Group",
    },
    description:
      "Discover the potential of marketing for your crypto projects. Vancant Group drives your crypto project to success through natural mentions, influencer recommendations, and connections.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  const tM = useTranslations("Menu");
  const tR = useTranslations("RequestPopup");
  return (
    <html lang={locale}>
      <body className={dm_sans.className}>
        <GoogleAnalytics gaId="G-RRDWRRC3K0" />
        <NextIntlClientProvider
        >
          <PopupsProvider>
            <Preloader />
            <Header 
              home={tM('home')}
              services={tM('services')}
              howItWorks={tM('howItWorks')}
              pricing={tM('pricing')}
              about={tM('about')}
              blog={tM('blog')}
              faq={tM('faq')}
              contact={tM('contact')}
            />
            <main>{children}</main>
            <Footer />
            <RequestPopup 
              requestPopup_title={tR('requestPopup_title')}
              requestPopup_namePlaceholder={tR('requestPopup_namePlaceholder')}
              requestPopup_emailPlaceholder={tR('requestPopup_emailPlaceholder')}
              requestPopup_phonePlaceholder={tR('requestPopup_phonePlaceholder')}
              requestPopup_projectPlaceholder={tR('requestPopup_projectPlaceholder')}
              requestPopup_datePlaceholder={tR('requestPopup_datePlaceholder')}
              requestPopup_descriptionPlaceholder={tR('requestPopup_descriptionPlaceholder')}
              requestPopup_acceptTerms={tR('requestPopup_acceptTerms')}
              requestPopup_submitButton={tR('requestPopup_submitButton')}
              requestPopup_successMessage={tR('requestPopup_successMessage')}
              requestPopup_successDescription={tR.rich("requestPopup_successDescription", {
                br: () => <br />,
              })}
              validation_required={tR('validation_required')}
              validation_email={tR('validation_email')}
            />
          </PopupsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
