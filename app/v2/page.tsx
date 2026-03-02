import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import BookConsult from "./components/BookConsult";

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
