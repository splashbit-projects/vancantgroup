import Header from "@/src/app/_global-components/Header";
import Footer from "@/src/app/_global-components/Footer";
import "@/public/scss/base.scss";
import { DM_Sans } from "next/font/google";
import { PopupsProvider } from "../../utils/PopupsContext";
import Preloader from "@/src/app/_global-components/Preloader";
import RequestPopup from "@/src/app/_global-components/LayoutElements/RequestPopup";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleAnalytics } from '@next/third-parties/google';

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
  return (
    <html lang={locale}>
      <body className={dm_sans.className}>
        <GoogleAnalytics gaId="G-N1SFZ1RDHK" />
        <NextIntlClientProvider
        >
          <PopupsProvider>
            <Preloader />
            <Header />
            <main>{children}</main>
            <Footer />
            <RequestPopup />
          </PopupsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
