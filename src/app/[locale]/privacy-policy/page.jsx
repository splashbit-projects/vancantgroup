import React from "react";
import "@/public/scss/policy.scss";
import { Link } from "@/src/navigation";
import { getPage, getPageSlugs } from "@/src/utils/blogUtils";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ['en', 'it', 'de'];

  const params = [];
  slugs.forEach((slug) => {
    locales.forEach((locale) => {
      params.push({ slug, locale });
    });
  });

  return params;
}


export async function generateMetadata({ params: { locale } }) {
  
  const page = await getPage("privacy-policy", locale);
  
  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "https://vancantgroup.com/images/meta.png",
    },
  };
}

async function PrivacyPolicy({ params: { locale } }) {
  const page = await getPage("privacy-policy", locale);
  return (
    <section className="policy-wrap">
      <div className="_container">
      <div className="policy-wrap__body">
          <h1>{page.title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
