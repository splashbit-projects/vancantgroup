import React from "react";
import "@/public/scss/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogWrap from "./_components/BlogWrap";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Crypto marketing blog",
  description:
    "Get insights and recommendations from top crypto marketing experts. The Vancant Group team closely monitors marketing trends and the crypto industry to provide you with the most effective solutions.",
  openGraph: {
    title: "Crypto marketing blog",
    description:
      "Get insights and recommendations from top crypto marketing experts. The Vancant Group team closely monitors marketing trends and the crypto industry to provide you with the most effective solutions.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function BlogPage() {
  const t = useTranslations("BlogPage");
  return (
    <>
      <BlogHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <BlogWrap
        mainPostTitle={t("blog.mainPostTitle")}
        mainPostDescription={t("blog.mainPostDescription")}
        secondaryPost1Title={t("blog.secondaryPost1Title")}
        secondaryPost2Title={t("blog.secondaryPost2Title")}
        secondaryPost3Title={t("blog.secondaryPost3Title")}
        readButton={t("blog.readButton")}
      />
    </>
  );
}

export default BlogPage;
