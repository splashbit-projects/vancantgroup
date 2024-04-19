import Header from "../components/Header";
import Footer from "../components/Footer";
import "@/public/scss/base.scss";
import { DM_Sans } from "next/font/google";
import { PopupsProvider } from "../utils/PopupsContext";
import Preloader from "../components/Preloader";
import RequestPopup from "../components/LayoutElements/RequestPopup";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <PopupsProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <RequestPopup />
        </PopupsProvider>
      </body>
    </html>
  );
}
