import Hero from "@/v2/components/Hero";
import HowItWorks from "@/v2/components/HowItWorks";
import WhoItsFor from "@/v2/components/WhoItsFor";
import Pricing from "@/v2/components/Pricing";
import Testimonials from "@/v2/components/Testimonials";
import BookConsult from "@/v2/components/BookConsult";

export default function V2Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <Testimonials />
      <BookConsult />
    </div>
  );
}
