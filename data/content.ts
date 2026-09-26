import { aioCalendar } from "@/data/art/aioCalendar";
import { aioFile } from "@/data/art/aioFile";
import { aioUsers } from "@/data/art/aioUsers";
import { catIcon1 } from "@/data/art/catIcon1";
import { catIcon2 } from "@/data/art/catIcon2";
import { catIcon3 } from "@/data/art/catIcon3";
import { feat1 } from "@/data/art/feat1";
import { feat2 } from "@/data/art/feat2";
import { feat3 } from "@/data/art/feat3";
import { feat4 } from "@/data/art/feat4";
import { feat5 } from "@/data/art/feat5";
import { featHand } from "@/data/art/featHand";
import { featIcon1 } from "@/data/art/featIcon1";
import { featIcon2 } from "@/data/art/featIcon2";
import { featIcon3 } from "@/data/art/featIcon3";
import { shelf1 } from "@/data/art/shelf1";
import { shelf2 } from "@/data/art/shelf2";
import { shelf3 } from "@/data/art/shelf3";
import type { ArtworkData } from "@/lib/artwork";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/course" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
];

export const hero = {
  title: "Studying Online is now much easier",
  text: "TOTC is an interesting platform that will teach you in more an interactive way",
};

export interface Stat {
  value: string;
  label: string;
  /** the Figma file mixes two fonts for the big numbers */
  font: "display" | "poppins";
}

export const success = {
  title: "Our Success",
  text: "Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.",
  stats: [
    { value: "15K+", label: "Students", font: "display" },
    { value: "75 %", label: "Total success", font: "poppins" },
    { value: "35", label: "Main questions", font: "display" },
    { value: "26", label: "Chief experts", font: "display" },
    { value: "16", label: "Years of experience", font: "display" },
  ] satisfies Stat[],
};

export interface Capability {
  title: string;
  text: string;
  icon: ArtworkData;
}

export const capabilities = {
  title: "All-In-One Cloud Software.",
  text: "TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.",
  items: [
    {
      title: "Online Billing, Invoicing, & Contracts",
      text: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
      icon: aioFile,
    },
    {
      title: "Easy Scheduling & Attendance Tracking",
      text: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      icon: aioCalendar,
    },
    {
      title: "Customer Tracking",
      text: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
      icon: aioUsers,
    },
  ] satisfies Capability[],
};

export const about = {
  title: "What is TOTC?",
  text: "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.",
  cards: [
    {
      title: "FOR INSTRUCTORS",
      image: "/images/what-instructors.webp",
      alt: "Smiling instructor standing in front of a whiteboard",
      cta: "Start a class today",
      variant: "outline",
    },
    {
      title: "FOR STUDENTS",
      image: "/images/what-students.webp",
      alt: "Three students laughing while studying together at a table",
      cta: "Enter access code",
      variant: "solid",
    },
  ],
} as const;

export const classroom = {
  title: "Everything you can do in a physical classroom, you can do with TOTC",
  text: "TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.",
  link: "Learn more",
};

export interface FeatureListItem {
  text: string;
  icon: ArtworkData;
}

export interface FeatureRowData {
  id: string;
  title: string;
  /** width (design px) the heading wraps at */
  titleWidth: number;
  text?: string;
  textWidth: number;
  items?: FeatureListItem[];
  art: ArtworkData;
  artLabel: string;
  /** position of the artwork / text column inside the 1600px Figma container */
  artLeft: number;
  textLeft: number;
  side: "art-left" | "art-right";
  /** vertical nudge of the text column relative to the artwork centre (design px) */
  nudge: number;
  /** small illustration that sits on top of the paragraph in the Figma design */
  textDecor?: { art: ArtworkData; left: number; top: number };
}

export const features = {
  title: "Our Features",
  text: "This very extraordinary feature, can make learning activities more efficient",
  cta: "See more features",
  rows: [
    {
      id: "interface",
      title: "A user interface designed for the classroom",
      titleWidth: 542,
      textWidth: 558,
      items: [
        {
          text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
          icon: featIcon1,
        },
        {
          text: "TA’s and presenters can be moved to the front of the class.",
          icon: featIcon2,
        },
        {
          text: "Teachers can easily see all students and class data at one time.",
          icon: featIcon3,
        },
      ],
      art: feat1,
      artLabel: "Online class with an instructor and four students on a video call",
      artLeft: 20,
      textLeft: 1042,
      side: "art-left",
      nudge: 36,
    },
    {
      id: "tools",
      title: "Tools For Teachers And Learners",
      titleWidth: 393,
      text: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
      textWidth: 568,
      textDecor: { art: featHand, left: 361, top: -4 },
      art: feat2,
      artLabel: "Student holding books, surrounded by floating course icons",
      artLeft: 893,
      textLeft: 89,
      side: "art-right",
      nudge: 38,
    },
    {
      id: "assessments",
      title: "Assessments, Quizzes, Tests",
      titleWidth: 347,
      text: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
      textWidth: 596,
      art: feat3,
      artLabel: "Quiz card asking whether a play takes place in Italy, with a photo of Venice",
      artLeft: 42,
      textLeft: 907,
      side: "art-left",
      nudge: -55,
    },
    {
      id: "management",
      title: "Class Management Tools for Educators",
      titleWidth: 421,
      text: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
      textWidth: 646,
      art: feat4,
      artLabel: "Gradebook showing four students’ scores and an export button",
      artLeft: 737,
      textLeft: 0,
      side: "art-right",
      nudge: 30,
    },
    {
      id: "discussions",
      title: "One-on-One Discussions",
      titleWidth: 274,
      text: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
      textWidth: 540,
      art: feat5,
      artLabel: "Private discussion window between a teacher and a student",
      artLeft: 41,
      textLeft: 987,
      side: "art-left",
      nudge: 0,
    },
  ] satisfies FeatureRowData[],
};

export interface Shelf {
  title: string;
  icon: ArtworkData;
  art: ArtworkData;
  label: string;
}

export const courses = {
  title: "Explore Course",
  text: "Ut sed eros finibus, placerat orci id, dapibus.",
  seeAll: "See all",
  shelves: [
    {
      title: "Lorem Ipsum",
      icon: catIcon1,
      art: shelf1,
      label:
        "Bookshelf of seven course books with a featured course card: Integer id Orc Sed Ante Tincidunt, $450",
    },
    {
      title: "Quisque a Consequat",
      icon: catIcon2,
      art: shelf2,
      label:
        "Bookshelf of seven course books with a featured course card: Integer id Orc Sed Ante Tincidunt, $450",
    },
    {
      title: "Aenean Facilisis",
      icon: catIcon3,
      art: shelf3,
      label:
        "Bookshelf of seven course books with a featured course card: Integer id Orc Sed Ante Tincidunt, $450",
    },
  ] satisfies Shelf[],
};

export const testimonial = {
  eyebrow: "TESTIMONIAL",
  title: "What They Say?",
  paragraphs: [
    "TOTC has got more than 100k positive ratings from our users around the world.",
    "Some of the students and teachers were greatly helped by the Skilline.",
    "Are you too? Please give your assessment",
  ],
  cta: "Write your assessment",
  image: "/images/testimonial-gloria.webp",
  imageAlt: "Smiling woman with curly hair in a pink sweater holding notebooks",
  quote:
    "\"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.\"",
  author: "Gloria Rose",
  source: "12 reviews at Yelp",
};

export interface NewsItem {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  paragraphs: string[];
}

export const news = {
  title: "Lastest News and Resources",
  text: "See the developments that have occurred to TOTC in the world",
  readMore: "Read more",
  featured: {
    slug: "class-30-million-financing",
    tag: "NEWS",
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    image: "/images/news-1.webp",
    alt: "Laptop showing a video class next to a cup of coffee",
    paragraphs: [
      "Class announced a $30 million Series A financing to support demand for its online learning platform. The company’s platform brings video meetings and classroom tools together for education.",
      "The announcement reflects continued interest in digital tools that help instructors teach and students take part in classes remotely.",
    ],
  } satisfies NewsItem,
  items: [
    {
      slug: "class-technologies-series-a",
      tag: "PRESS RELEASE",
      title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      excerpt: "Class Technologies Inc., the company that created Class,...",
      image: "/images/news-2.webp",
      alt: "Child studying with a tablet at a desk",
      paragraphs: [
        "Class Technologies Inc. announced the close of its $30 million Series A financing. The company said the funding will help it respond to demand for its online learning tools.",
        "The release focuses on the company’s investment round and its work to bring classroom features to online instruction.",
      ],
    },
    {
      slug: "investors-bet-on-school-video-tools",
      tag: "NEWS",
      title: "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      excerpt: "Zoom was never created to be a consumer product. Nonetheless, the...",
      image: "/images/news-3.webp",
      alt: "Student wearing headphones in an online class on a laptop",
      paragraphs: [
        "This story looks at investor interest in video tools designed for schools and the needs of online classrooms.",
        "Education has its own rhythms and requirements. The article considers why purpose-built teaching features can matter when schools use video to connect educators and learners.",
      ],
    },
    {
      slug: "online-classroom-platform-funding",
      tag: "NEWS",
      title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      excerpt: "This year, investors have reaped big financial returns from betting on Zoom...",
      image: "/images/news-4.webp",
      alt: "Video call showing two teachers and a cat",
      paragraphs: [
        "This story covers funding for a classroom platform that brings learning management features into video-based lessons.",
        "It highlights a wider challenge for online education: giving instructors useful ways to organize learning while helping students stay engaged in a virtual classroom.",
      ],
    },
  ] satisfies NewsItem[],
};

export const footer = {
  brand: "TOTC",
  tagline: "Virtual Class for Zoom",
  newsletter: "Subscribe to get our Newsletter",
  placeholder: "Your Email",
  subscribe: "Subscribe",
  links: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  copyright: "© 2026 Class Technologies Inc.",
};
