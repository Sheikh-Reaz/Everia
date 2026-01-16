import Hero from "../components/Hero";
import Featured from "../components/Featured";
import BestSellers from "../components/BestSellers";
import DiscountSection from "../components/DiscountSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <BestSellers />
      <DiscountSection />
      <Testimonials />
      <Newsletter />
      <WhyChooseUs />
    </div>
  );
}
