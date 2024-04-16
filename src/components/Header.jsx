import React from "react";
import Link from "next/link";
import "@/public/scss/header.scss";

export default function Header() {
  return (
    <header>
      <div className="_container">
        <div className="head-wrap">
          <Link href="/">
            <img alt="logo" src="/images/logo.svg" />
          </Link>
          <div className="header-actions">
            <div className="socials">
              <Link
                href="https://www.facebook.com/vancantgroup"
                target="_blank"
              >
                <img alt="facebook" src="/images/facebook.svg" />
              </Link>
              <Link
                href="https://www.instagram.com/vancantgroupcom/"
                target="_blank"
              >
                <img alt="instagram" src="/images/instagram.svg" />
              </Link>
              <Link
                href="https://twitter.com/vancantgroup"
                target="_blank"
              >
                <img alt="twitter" src="/images/x.svg" />
              </Link>
            </div>
            <Link href="#" className="cart">
              <img alt="logo" src="/images/cart.svg" />
            </Link>
            <Link href="#" className="main-button">
              Sign in
            </Link>
            <Link href="#" className="manu-btn">
              <img alt="logo" src="/images/burger.svg" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
