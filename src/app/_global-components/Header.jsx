"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/src/navigation";
import "@/public/scss/header.scss";
import Facebook from "./LayoutElements/socials/Facebook";
import Instagram from "./LayoutElements/socials/Instagram";
import Twitter from "./LayoutElements/socials/Twitter";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  let lastSegment = pathname.split('/').pop();
  if(lastSegment == 'de' || lastSegment == 'it'){
    lastSegment = `/`;
  } else {
    lastSegment = `/${lastSegment}`;
  }
  console.log(pathname);

  const menuOpen = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  return (
    <>
      <header>
        <div className="_container">
          <div className="head-wrap">
            <Link href="/">
              <img alt="logo" src="/images/logo.svg" />
            </Link>
            <div className="header-actions">
              <div className="lang-switcher">
                <Link locale="en" href={lastSegment}>
                  <img src="/images/en.svg" />
                </Link>
                <Link locale="it" href={lastSegment}>
                  <img src="/images/it.svg" />
                </Link>
                <Link locale="de" href={lastSegment}>
                  <img src="/images/de.svg" />
                </Link>
              </div>
              <div className="socials">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
              <span onClick={() => menuOpen()} className="menu-btn">
                {!opened ? (
                  <img alt="logo" src="/images/burger.svg" />
                ) : (
                  <img alt="logo" src="/images/burger-close.svg" />
                )}
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${opened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <div className="left-col">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className="right-col">
              <Link href="/about-us">About Us</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </nav>
          <div className="socials">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
}
