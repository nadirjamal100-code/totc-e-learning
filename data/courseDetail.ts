export const detailHero = {
  image: "/images/course-detail-hero.webp",
  alt: "Instructor pointing at colourful sticky notes on a whiteboard while students take notes on laptops",
  thumbAlt: "Thumbnail of the course preview video",
};

export const tabs = ["Overview", "Course Content", "Instructor", "Reviews"] as const;

export const rating = {
  score: "4 out of 5",
  label: "Top Rating",
  breakdown: [
    { label: "5 Stars", percent: 77 },
    { label: "4 Stars", percent: 77 },
    { label: "3 Stars", percent: 77 },
    { label: "2 Stars", percent: 77 },
    { label: "1 Stars", percent: 77 },
  ],
};

export interface Review {
  author: string;
  duration: string;
  text: string;
}

export const reviews: Review[] = [
  {
    author: "Lina",
    duration: "3 Month",
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    author: "Lina",
    duration: "3 Month",
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];

export const purchase = {
  price: "$49.65",
  oldPrice: "$99.99",
  discount: "50% Off",
  countdown: "11 hour left at this price",
  buy: "Buy Now",
  includedTitle: "This Course included",
  included: [
    { icon: "shield", text: "Money Back Guarantee" },
    { icon: "devices", text: "Access on all devices" },
    { icon: "certificate", text: "Certification of completion" },
    { icon: "layers", text: "32 Moduls" },
  ] as const,
  trainingTitle: "Training 5 or more people",
  trainingText:
    "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  shareTitle: "Share this course",
  share: ["twitter", "facebook", "youtube", "instagram", "telegram", "whatsapp"] as const,
};

export const deals = {
  title: "Top Education offers and deals are listed here",
  seeAll: "See all",
  items: [
    {
      badge: "50%",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/news-1.webp",
      alt: "Laptop showing an online video class beside a cup of coffee",
    },
    {
      badge: "10%",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/student-396x611.webp",
      alt: "Student learning with a laptop",
    },
    {
      badge: "50%",
      title: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/images/news-4.webp",
      alt: "Online class with a teacher and a cat on screen",
    },
  ],
};
