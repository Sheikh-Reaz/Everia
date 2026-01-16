import Hero from "../components/Hero";
import Featured from "../components/Featured";
import BestSellers from "../components/BestSellers";
import DiscountSection from "../components/DiscountSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <BestSellers />
      <DiscountSection />
      <WhyChooseUs />
    </div>
  );
}
