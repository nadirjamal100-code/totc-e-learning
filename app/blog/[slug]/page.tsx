import type { Metadata } from "next";
import BlogHeader from "@/components/blog/BlogHeader";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import ArticleAuthor from "@/components/blog-detail/ArticleAuthor";
import ArticleBody from "@/components/blog-detail/ArticleBody";
import ArticleHero from "@/components/blog-detail/ArticleHero";
import Footer from "@/components/Footer";
import { article } from "@/data/blogDetail";

export const metadata: Metadata = {
  title: `${article.title} | TOTC Blog`,
  description: article.lead,
};

export default function BlogDetailPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <BlogHeader active="Blog" />
      <main id="main" className="blog-main">
        <ArticleHero />
        <div className="article-wrap">
          <ArticleBody />
          <ArticleAuthor />
        </div>
        <RelatedBlogs />
      </main>
      <Footer />
    </>
  );
}
