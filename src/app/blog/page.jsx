import React from "react";
import "@/public/scss/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogWrap from "./_components/BlogWrap";

export const metadata = {
  title: "Crypto marketing blog",
  description: "Get insights and recommendations from top crypto marketing experts. The Vancant Group team closely monitors marketing trends and the crypto industry to provide you with the most effective solutions.",
  openGraph: {
    title: "Crypto marketing blog",
    description: "Get insights and recommendations from top crypto marketing experts. The Vancant Group team closely monitors marketing trends and the crypto industry to provide you with the most effective solutions.",
    images: "https://vancantgroup.com/images/meta.png",
  },
};

function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogWrap />
    </>
  );
}

export default BlogPage;
