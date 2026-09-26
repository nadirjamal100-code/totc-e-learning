import type { Metadata } from "next";
import ArticleSection from "@/components/ArticleSection";
import BlogHeader from "@/components/blog/BlogHeader";
import ClassroomSection from "@/components/ClassroomSection";
import CourseOverview from "@/components/course-detail/CourseOverview";
import DealsSection from "@/components/course-detail/DealsSection";
import Footer from "@/components/Footer";
import { articleSections } from "@/data/course";

export const metadata: Metadata = {
  title: "AWS Certified Solutions Architect | TOTC",
  description: "Course details, reviews and pricing for AWS Certified Solutions Architect on TOTC.",
};

export default function CourseDetailPage() {
  const marketing = { ...articleSections[0], id: "marketing", title: "Marketing Articles" };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <BlogHeader active="Courses" />
      <main id="main" className="blog-main">
        <CourseOverview />
        <ArticleSection section={marketing} />
        <ClassroomSection />
        <DealsSection />
      </main>
      <Footer />
    </>
  );
}
