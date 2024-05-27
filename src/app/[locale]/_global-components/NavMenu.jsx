"use server";
import React from "react";
import { useTranslations } from "next-intl";
const tM = useTranslations("Menu");

function NavMenu() {
  return (
    <nav>
      <div className="left-col">
        <Link href="/">{tM("home")}</Link>
        <Link href="/services">{tM("services")}</Link>
        <Link href="/how-it-works">{tM("howItWorks")}</Link>
        <Link href="/pricing">{tM("pricing")}</Link>
      </div>
      <div className="right-col">
        <Link href="/about-us">{tM("about")}</Link>
        <Link href="/blog">{tM("blog")}</Link>
        <Link href="/faq">{tM("faq")}</Link>
        <Link href="/contact-us">{tM("contact")}</Link>
      </div>
    </nav>
  );
}

export default NavMenu;
