import { getPost } from "@/src/utils/blogUtils";
import React from "react";
import "@/public/scss/blog.scss";
import Link from "next/link";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.seo_title,
    description: post.seo_description,
  };
}


async function BlogSingle({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <section className="single-post">
      <div className="_container">
        <div className="single-post__body">
          <h1>{post.title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <Link href="/blog" className="main-button">More articles</Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;
