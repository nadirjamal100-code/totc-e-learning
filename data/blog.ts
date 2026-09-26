import { footerDiamond } from "@/data/art/footerDiamond";
import { iconGrid } from "@/data/art/iconGrid";
import { logoDark } from "@/data/art/logoDark";

export { footerDiamond, iconGrid, logoDark };

export const blogUser = { name: "Lina" };

export const blogHero = {
  byline: "By Themadbrains in inspiration",
  title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  cta: "Start learning now",
  image: "/images/news-1.webp",
  imageAlt: "Laptop showing a video class next to a cup of coffee",
};

export interface CategoryTile {
  label: string;
  image: string;
  alt: string;
}

export const categories = {
  title: "Reading blog list",
  tiles: [
    { label: "UX/UI", image: "/images/news-3.webp", alt: "Student wearing headphones in an online class on a laptop" },
    { label: "React", image: "/images/blog-cat-react.webp", alt: "Laptop with code on the screen next to a plant" },
    { label: "PHP", image: "/images/blog-cat-php.webp", alt: "Laptop showing a document while a hand points at the screen" },
    { label: "JavaScript", image: "/images/blog-cat-js.webp", alt: "Hands typing on a laptop that shows source code" },
  ] satisfies CategoryTile[],
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  author: string;
  views: string;
}

const postTitle = "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution";
const postExcerpt =
  "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...";

export const related = {
  title: "Related Blog",
  seeAll: "See all",
  readMore: "Read more",
  posts: [
    {
      slug: "swift-ui-mobile-development",
      title: postTitle,
      excerpt: postExcerpt,
      image: "/images/what-instructors.webp",
      alt: "Smiling instructor standing in front of a whiteboard",
      author: "Lina",
      views: "251,232",
    },
    {
      slug: "zoom-friendly-edtech-solution",
      title: postTitle,
      excerpt: postExcerpt,
      image: "/images/news-1.webp",
      alt: "Laptop showing a video class next to a cup of coffee",
      author: "Lina",
      views: "251,232",
    },
    {
      slug: "video-call-classroom-resources",
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      excerpt: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      image: "/images/news-4.webp",
      alt: "Two teachers and a cat shown during a video call",
      author: "Lina",
      views: "251,232",
    },
  ] satisfies BlogPost[],
};

export interface Article {
  slug: string;
  category: string;
  duration: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  author: string;
  oldPrice: string;
  price: string;
}

const articleBase = {
  slug: "aws-certified-solutions-architect",
  category: "Design",
  duration: "3 Month",
  title: "AWS Certified solutions Architect",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  author: "Lina",
  oldPrice: "$100",
  price: "$80",
};

export const marketing = {
  title: "Marketing Articles",
  seeAll: "See all",
  articles: [
    { ...articleBase, slug: "aws-certified-solutions-architect-1", image: "/images/news-2.webp", alt: "Child studying with a tablet at a desk" },
    { ...articleBase, slug: "aws-certified-solutions-architect-2", image: "/images/news-3.webp", alt: "Student wearing headphones in an online class on a laptop" },
    { ...articleBase, slug: "aws-certified-solutions-architect-3", image: "/images/news-1.webp", alt: "Laptop showing a video class next to a cup of coffee" },
    { ...articleBase, slug: "aws-certified-solutions-architect-4", image: "/images/news-4.webp", alt: "Video call showing two teachers and a cat" },
  ] satisfies Article[],
};
