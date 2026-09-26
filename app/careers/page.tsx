import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | TOTC",
  description:
    "Discover the values and teams behind TOTC, and explore ways to help make online learning more engaging and accessible.",
};

const teams = [
  {
    number: "01",
    title: "Learning & content",
    text: "Make complex ideas feel clear. Shape courses, resources, and learning experiences that help students build real confidence.",
    skills: "Teaching · Curriculum · Writing",
  },
  {
    number: "02",
    title: "Product & design",
    text: "Create thoughtful tools for the people at the heart of every classroom: learners and the educators who guide them.",
    skills: "Product · UX/UI · Research",
  },
  {
    number: "03",
    title: "Engineering & data",
    text: "Build dependable, inclusive technology that makes it easier to teach, learn, and stay connected from anywhere.",
    skills: "Software · Data · Accessibility",
  },
  {
    number: "04",
    title: "Learner community",
    text: "Help students and instructors feel supported at every step, and bring their feedback into the way we improve TOTC.",
    skills: "Support · Community · Operations",
  },
];

const values = [
  { title: "People before process", text: "Start with the real needs of students and educators, then make the experience simpler." },
  { title: "Curiosity stays welcome", text: "Ask questions, share ideas, and keep learning from the people around you." },
  { title: "Make progress together", text: "Good learning is a team effort. We believe the same is true of good work." },
];

export default function CareersPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <BlogHeader active="Careers" />
      <main id="main" className="careers-page">
        <section className="careers-hero" aria-labelledby="careers-title">
          <div className="careers-hero__copy">
            <p className="careers-eyebrow">CAREERS AT TOTC</p>
            <h1 id="careers-title">Help make learning feel limitless.</h1>
            <p>We’re building a more connected online classroom—one that gives educators room to teach and learners more ways to grow. Bring your perspective and help us make it better.</p>
            <Link className="careers-button" href="#opportunities">Explore our teams <span aria-hidden="true">→</span></Link>
          </div>
          <div className="careers-hero__image">
            <Image src="/images/teacher-online-class.webp" alt="Educator guiding learners in an online class" fill priority sizes="(max-width: 700px) 100vw, 48vw" />
            <span className="careers-image-note">Good things happen<br />when we learn together.</span>
          </div>
        </section>

        <section className="careers-intro" aria-labelledby="careers-intro-title">
          <p className="careers-eyebrow">WHY TOTC</p>
          <h2 id="careers-intro-title">Build technology with a human purpose.</h2>
          <p>Education changes lives. We bring together people who care about making learning more useful, more welcoming, and easier to access. Every role contributes to the same goal: helping people move forward.</p>
        </section>

        <section className="careers-values" aria-label="Our values">
          {values.map((value, index) => (
            <article className="careers-value" key={value.title}>
              <span className="careers-value__icon" aria-hidden="true">{["✳", "✦", "↗"][index]}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </section>

        <section id="opportunities" className="careers-teams" aria-labelledby="careers-teams-title">
          <div className="careers-teams__heading">
            <div><p className="careers-eyebrow">FIND YOUR WAY IN</p><h2 id="careers-teams-title">Where your skills make a difference.</h2></div>
            <p>There are many ways to make online learning better. Explore the kinds of work that move our mission forward.</p>
          </div>
          <div className="careers-teams__grid">
            {teams.map((team) => (
              <article className="careers-team" key={team.number}>
                <span className="careers-team__number">{team.number}</span>
                <h3>{team.title}</h3>
                <p>{team.text}</p>
                <span className="careers-team__skills">{team.skills}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-cta" aria-labelledby="careers-cta-title">
          <p className="careers-eyebrow">MAKE ROOM FOR WHAT’S NEXT</p>
          <h2 id="careers-cta-title">Let’s shape a brighter learning experience.</h2>
          <p>Learn more about the people and ideas behind TOTC.</p>
          <Link className="careers-button careers-button--light" href="/about">Get to know TOTC <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
