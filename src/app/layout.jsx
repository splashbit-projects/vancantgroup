import Header from "../components/Header";
import Footer from "../components/Footer";
import "@/public/scss/base.scss";
import { DM_Sans } from "next/font/google";
import { OrderProvider } from "../utils/OrderContext";
import Preloader from "../components/Preloader";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Vancant Group",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <OrderProvider>
          <Preloader/>
          <Header />
          <main>{children}</main>
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
