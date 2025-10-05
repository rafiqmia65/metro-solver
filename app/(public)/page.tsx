import Banner from "@/components/Home/Banner";
import BrandSection from "@/components/Home/BrandSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <BrandSection />
      <ServicesSection></ServicesSection>
      <WhyChooseUsSection></WhyChooseUsSection>
    </div>
  );
}
