import type { Metadata } from "next";
import ArticleSection from "@/components/ArticleSection";
import BlogHeader from "@/components/blog/BlogHeader";
import CategoryGrid from "@/components/CategoryGrid";
import ContinueLearning from "@/components/ContinueLearning";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { articleSections } from "@/data/course";

export const metadata: Metadata = {
  title: "Courses | TOTC",
  description:
    "Continue your lessons, browse courses by category, and discover recommended, popular and trending courses on TOTC.",
};

const [recommended, topPicks, personalDevelopment, viewing] = articleSections;

export default function CoursePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <BlogHeader active="Courses" />
      <main id="main" className="blog-main">
        <ContinueLearning />
        <CategoryGrid />
        <ArticleSection section={recommended} />
        <ArticleSection section={topPicks} />
        <CTABanner />
        <ArticleSection section={personalDevelopment} />
        <ArticleSection section={viewing} />
      </main>
      <Footer />
    </>
  );
}
