import { getPost, getSlugs } from "@/src/utils/blogUtils";
import React from "react";
import "@/public/scss/blog.scss";
import { Link } from "@/src/navigation";
import MoreButton from "../_components/MoreButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ['en', 'it', 'de'];

  const params = [];
  slugs.forEach((slug) => {
    locales.forEach((locale) => {
      params.push({ slug, locale });
    });
  });

  return params;
}


export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: "https://vancantgroup.com/images/meta.png",
    },
  };
}



async function BlogSingle({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);
  return (
    <section className="single-post">
      <div className="_container">
        <div className="single-post__body">
          <h1>{post.title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <MoreButton/>
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;
