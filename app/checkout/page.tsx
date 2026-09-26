import type { Metadata } from "next";
import BlogHeader from "@/components/blog/BlogHeader";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import DealsSection from "@/components/course-detail/DealsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Checkout | TOTC",
  description: "Review your course order and enter payment details.",
};

export default function CheckoutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <BlogHeader active="Courses" />
      <main id="main" className="checkout-page">
        <div className="checkout-layout">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
        <DealsSection />
      </main>
      <Footer />
    </>
  );
}
