import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ClassroomSection from "@/components/ClassroomSection";
import ExploreCourses from "@/components/ExploreCourses";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="hero-shell" id="top">
        <Header />
        <Hero />
      </div>
      <main id="main">
        <StatsSection />
        <CapabilitiesSection />
        <AboutSection />
        <ClassroomSection />
        <FeaturesSection />
        <ExploreCourses />
        <TestimonialSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
