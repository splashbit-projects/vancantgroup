import React from "react";
import "@/public/scss/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogWrap from "./_components/BlogWrap";

function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogWrap />
    </>
  );
}

export default BlogPage;
