import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/Footer";
import { news } from "@/data/content";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

const stories = [news.featured, ...news.items];

export function generateStaticParams() {
  return stories.map(({ slug }) => ({ slug }));
}

async function findStory(params: NewsDetailProps["params"]) {
  const { slug } = await params;
  return stories.find((story) => story.slug === slug);
}

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const story = await findStory(params);
  if (!story) return { title: "News | TOTC" };
  return {
    title: `${story.title} | TOTC News`,
    description: story.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const story = await findStory(params);
  if (!story) notFound();

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <BlogHeader active="Blog" />
      <main id="main" className="blog-main news-detail">
        <div className="news-detail__hero">
          <Image src={story.image} alt={story.alt} fill priority sizes="100vw" />
          <span className="tag tag--overlay">{story.tag}</span>
        </div>
        <article className="news-detail__article">
          <Link className="news-detail__back" href="/#news">← Back to Latest News</Link>
          <h1>{story.title}</h1>
          <p className="news-detail__lead">{story.excerpt}</p>
          {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <p className="news-detail__more"><Link href="/#news">Explore more news and resources <span aria-hidden="true">→</span></Link></p>
      </main>
      <Footer />
    </>
  );
}
