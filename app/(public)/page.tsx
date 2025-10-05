import Banner from "@/components/Home/Banner";
import BrandSection from "@/components/Home/BrandSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import LatestWorksSection from "@/components/Home/LatestWorksSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import VideoPlayerSection from "@/components/Home/VideoPlayerSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <BrandSection />
      <ServicesSection></ServicesSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <LatestWorksSection></LatestWorksSection>
      <VideoPlayerSection></VideoPlayerSection>
      <HowItWorksSection></HowItWorksSection>
      <StatsSection></StatsSection>
    </div>
  );
}
