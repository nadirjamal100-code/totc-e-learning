import type { Metadata } from "next";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";
import MarketingArticles from "@/components/blog/MarketingArticles";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | TOTC",
  description:
    "Read the TOTC blog: articles, tutorials and news about UX/UI, React, PHP, JavaScript and online learning.",
};

export default function BlogPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <BlogHeader active="Blog" />
      <main id="main" className="blog-main">
        <BlogHero />
        <BlogCategories />
        <RelatedBlogs />
        <MarketingArticles />
      </main>
      <Footer />
    </>
  );
}
