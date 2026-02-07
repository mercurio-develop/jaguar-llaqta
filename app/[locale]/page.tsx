import Hero from "@/features/home/components/Hero";
import FeaturedExperiences from "@/features/home/components/FeaturedExperiences";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import Testimonials from "@/features/home/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
