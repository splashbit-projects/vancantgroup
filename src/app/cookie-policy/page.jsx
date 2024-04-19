import React from "react";
import "@/public/scss/policy.scss";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
};

function CookiePolicy() {
  return (
    <section className="policy-wrap">
      <div className="_container">
        <div className="policy-wrap__body">
          <h1>Cookie Policy</h1>
          <article>
            <p>
              Vancant Group Ltd ("us," "we," or "our") operates the website{" "}
              <a href="https://vancantgroup.com/">vancantgroup.com</a> (the
              "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of cookies on our website.
            </p>
            <h2>
              <strong>What are Cookies?</strong>
            </h2>
            <p>
              Cookies are small text sent to your web browser by a website you
              visit. A cookie file is stored in your web browser and allows the
              Service or a third party to recognize you, making your next visit
              easier and the Service more useful to you.
            </p>
            <h2>
              <strong>How We Use Cookies</strong>
            </h2>
            <p>
              We may place several cookie files in your web browser when you
              access the Service. We use cookies for the following purposes:
            </p>
            <ul>
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>
                To enable advertisement delivery, including behavioural
                advertising
              </li>
            </ul>
            <p>
              We use both session and persistent cookies on the Service, and we
              use different types of cookies to run the Service:
            </p>
            <ul>
              <li>
                <strong>Essential cookies</strong>: We may use essential cookies
                to authenticate users and prevent fraudulent use of user
                accounts.
              </li>
              <li>
                <strong>Analytical/performance cookies</strong>: We may use
                analytical/performance cookies to improve the performance of our
                website and provide a better user experience.
              </li>
              <li>
                <strong>Functionality cookies</strong>: We may use functionality
                cookies to recognize you on our website and remember your
                previously selected preferences.
              </li>
              <li>
                <strong>Targeting cookies</strong>: We may use targeting cookies
                to collect information about your browsing habits to deliver
                advertisements that may interest you.
              </li>
            </ul>
            <h2>
              <strong>Third-party Cookies</strong>
            </h2>
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report service usage statistics, deliver
              advertisements on and through the Service, and so on.
            </p>
            <h2>
              <strong>What are Your Choices Regarding Cookies?</strong>
            </h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit your browser's help pages.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to
              accept them, you might not be able to use all of our features, you
              may not be able to store your preferences, and some of our pages
              might not display properly.
            </p>
            <p>
              For more information about cookies and how to turn them off, visit
              <a href="http://www.allaboutcookies.org/">
                {" "}
                http://www.allaboutcookies.org
              </a>
              .
            </p>
            <h2>
              <strong>Contact Us</strong>
            </h2>
            <p>
              If you have any questions about this Cookie Policy, please contact
              us:
            </p>
            <ul>
              <li>
                Website: <a href="http://vancantgroup.com">vancantgroup.com</a>
              </li>
              <li>
                Phone: <a href="tel:+447458149501">+447458149501</a>
              </li>
              <li>
                Email:
                <a href="mailto:info@vancantgroup.com">
                  {" "}
                  info@vancantgroup.com
                </a>
              </li>
            </ul>
            <p>
              We strive to respond to all inquiries promptly and provide
              assistance as needed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CookiePolicy;
