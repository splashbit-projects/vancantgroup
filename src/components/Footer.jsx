import "@/public/scss/footer.scss";
import Link from "next/link";
import Facebook from "@/src/components/LayoutElements/socials/Facebook";
import Instagram from "@/src/components/LayoutElements/socials/Instagram";
import Twitter from "@/src/components/LayoutElements/socials/Twitter";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="_container">
            <div className="site-info">
              <Link href="/">
                <img alt="logo" src="/images/logo.svg" />
              </Link>
              <p>
                Vancant Group - specialised cryptocurrency marketing solutions,
                optimising businesses for success in the digital sphere.
              </p>
              <div className="footer-socials">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
            <div className="navigation">
              <div>
                <h2>Services</h2>
                <nav>
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/how-it-works">How It Works</Link>
                  <Link href="/pricing">Pricing</Link>
                </nav>
              </div>
              <div>
                <h2>Company</h2>
                <nav>
                  <Link href="/about-us">About Us</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact-us">Contact Us</Link>
                </nav>
              </div>
              <div>
                <h2>Legal</h2>
                <nav>
                  <Link href="/terms-of-use">Terms of Use</Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/refund-policy">Refund Policy</Link>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </nav>
              </div>
              <div>
                <h2>Contacts</h2>
                <nav>
                  <span>
                    Global Gateway 8, Rue de la Perle, Providence, Mahé,
                    Seychelles
                  </span>
                  <Link href="mailto:info@vancantgroup.com">
                    info@vancantgroup.com
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="_container">
            © 2024 Vancant Group Ltd. Driving Crypto Project Growth.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
