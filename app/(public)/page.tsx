import Banner from "@/components/Home/Banner";
import BrandSection from "@/components/Home/BrandSection";
import ContactFormSection from "@/components/Home/ContactFormSection";
import FAQSection from "@/components/Home/FAQSection";
import GlobalFooterSection from "@/components/Home/GlobalFooterSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import LatestWorksSection from "@/components/Home/LatestWorksSection";
import NewsletterSection from "@/components/Home/NewsLetter";
import PodcastSection from "@/components/Home/PodcastSection/PodcastSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsAndBlog from "@/components/Home/TestimonialsAndBlog";
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
      <TestimonialsAndBlog></TestimonialsAndBlog>
      <PodcastSection></PodcastSection>
      <ContactFormSection></ContactFormSection>
      <FAQSection></FAQSection>
      <GlobalFooterSection></GlobalFooterSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
