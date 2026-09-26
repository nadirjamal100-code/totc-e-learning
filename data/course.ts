import type { Article } from "@/data/blog";

export interface ContinueCard {
  slug: string;
  title: string;
  image: string;
  alt: string;
  author: string;
  lesson: string;
  /** 0–1, how far through the course the learner is */
  progress: number;
}

export const continueLearning = {
  title: "Welcome back, ready for your next lesson?",
  viewHistory: "View history",
  cards: [
    {
      slug: "aws-certified-solutions-architect",
      title: "AWS Certified Solutions Architect",
      image: "/images/news-1.webp",
      alt: "Laptop showing a video class next to a cup of coffee",
      author: "Lina",
      lesson: "Lesson 5 of 7",
      progress: 5 / 7,
    },
    {
      slug: "aws-certified-solutions-architect",
      title: "AWS Certified Solutions Architect",
      image: "/images/course-person.webp",
      alt: "Person taking notes while working on a laptop",
      author: "Lina",
      lesson: "Lesson 5 of 7",
      progress: 5 / 7,
    },
    {
      slug: "aws-certified-solutions-architect",
      title: "AWS Certified Solutions Architect",
      image: "/images/blog-cat-js.webp",
      alt: "Hands typing on a laptop that shows source code",
      author: "Lina",
      lesson: "Lesson 5 of 7",
      progress: 5 / 7,
    },
    {
      slug: "aws-certified-solutions-architect",
      title: "AWS Certified Solutions Architect",
      image: "/images/news-4.webp",
      alt: "Two teachers and a cat shown during a video call",
      author: "Lina",
      lesson: "Lesson 5 of 7",
      progress: 5 / 7,
    },
  ] satisfies ContinueCard[],
};

export interface CategoryCard {
  title: string;
  text: string;
  icon: "palette" | "code" | "monitor" | "briefcase" | "megaphone" | "camera" | "masks" | "chart";
  color: string;
}

export const categories = {
  title: "Choice favourite course from top category",
  items: [
    { title: "Design", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "palette", color: "#49bbbd" },
    { title: "Development", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "monitor", color: "#5b72ee" },
    { title: "Development", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "code", color: "#9dccff" },
    { title: "Business", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "briefcase", color: "#00cbb8" },
    { title: "Marketing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "megaphone", color: "#f48c06" },
    { title: "Photography", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "camera", color: "#ee645b" },
    { title: "Acting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "masks", color: "#252641" },
    { title: "Business", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod", icon: "chart", color: "#00cbb8" },
  ] satisfies CategoryCard[],
};

const articleBase = {
  category: "Design",
  duration: "3 Month",
  title: "AWS Certified solutions Architect",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  author: "Lina",
  oldPrice: "$100",
  price: "$80",
};

const photoCycle = [
  { image: "/images/news-2.webp", alt: "Child studying with a tablet at a desk" },
  { image: "/images/news-3.webp", alt: "Student wearing headphones in an online class on a laptop" },
  { image: "/images/news-1.webp", alt: "Laptop showing a video class next to a cup of coffee" },
  { image: "/images/news-4.webp", alt: "Video call showing two teachers and a cat" },
];

function articleSet(prefix: string): Article[] {
  return photoCycle.map((photo, index) => ({ ...articleBase, slug: `${prefix}-${index + 1}`, ...photo }));
}

export interface ArticleSectionData {
  id: string;
  title: string;
  seeAll: string;
  articles: Article[];
}

export const articleSections: ArticleSectionData[] = [
  { id: "recommended", title: "Recommended for you", seeAll: "See all", articles: articleSet("recommended") },
  { id: "top-picks", title: "Get choice of your course", seeAll: "See all", articles: articleSet("top-picks") },
  { id: "personal-development", title: "The course in personal development", seeAll: "See all", articles: articleSet("personal-development") },
  { id: "viewing", title: "Student are viewing", seeAll: "See all", articles: articleSet("viewing") },
];

export const ctaBanner = {
  title: "Online coaching lessons for remote learning.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  cta: "Start learning now",
};
