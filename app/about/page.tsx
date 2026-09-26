import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { about as aboutContent } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | TOTC",
  description:
    "Learn how TOTC brings students and educators together through engaging, accessible online learning.",
};

const principles = [
  {
    number: "01",
    title: "Learning that fits real life",
    text: "Flexible online classes help learners make progress at their own pace, wherever they are.",
  },
  {
    number: "02",
    title: "Teachers at the center",
    text: "We give educators practical tools to share knowledge, guide discussion, and support every learner.",
  },
  {
    number: "03",
    title: "Progress you can see",
    text: "Clear assignments, feedback, and progress tracking make each next step easier to understand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="about-page-shell">
        <Header />
        <section className="about-hero" aria-labelledby="about-page-title">
          <div className="about-hero__copy">
            <p className="about-hero__eyebrow">A better way to learn together</p>
            <h1 id="about-page-title">Learning has no limits when we learn together.</h1>
            <p className="about-hero__text">
              TOTC brings educators and students together in one welcoming online classroom, with the tools to teach, learn, and grow from anywhere.
            </p>
            <Link className="about-hero__button" href="/course">Explore courses <span aria-hidden="true">→</span></Link>
          </div>
          <div className="about-hero__visual">
            <Image src="/images/teacher-online-class.webp" alt="Teacher leading an online class" fill priority sizes="(max-width: 800px) 90vw, 44vw" />
            <span className="about-hero__note">Curiosity opens<br />every door.</span>
          </div>
        </section>
      </div>

      <main id="main" className="about-page-main">
        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-story__label"><span /> OUR STORY</div>
          <div className="about-story__body">
            <h2 id="about-story-title">A classroom built for the way the world learns now.</h2>
            <p>{aboutContent.text}</p>
            <p>We believe great learning comes from connection: a teacher who can focus on teaching, a student who feels supported, and a shared space where ideas can move freely.</p>
          </div>
        </section>

        <StatsSection />

        <section className="about-mission" aria-labelledby="about-mission-title">
          <div className="about-mission__heading">
            <p className="about-hero__eyebrow">WHAT GUIDES US</p>
            <h2 id="about-mission-title">Make every learning moment count.</h2>
            <p>From the first question to the final project, we shape a learning experience that feels clear, personal, and full of possibility.</p>
          </div>
          <div className="about-principles">
            {principles.map((principle) => (
              <article className="about-principle" key={principle.number}>
                <span className="about-principle__number">{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                <span className="about-principle__arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-people" aria-labelledby="about-people-title">
          <div className="about-people__image">
            <Image src="/images/what-students.webp" alt="Students learning together" fill sizes="(max-width: 700px) 90vw, 40vw" />
          </div>
          <div className="about-people__copy">
            <p className="about-hero__eyebrow">FOR EVERY KIND OF LEARNER</p>
            <h2 id="about-people-title">Different paths. One shared space to grow.</h2>
            <p>Whether you’re teaching a class or building a new skill, TOTC gives you a simple place to stay connected and keep moving forward.</p>
            <Link className="about-text-link" href="/register">Join the learning community <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <p className="about-hero__eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2 id="about-cta-title">Bring your curiosity. We’ll bring the classroom.</h2>
          <Link className="about-hero__button" href="/course">Find your course <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
