import AboutFeatureBlock from '../components/AboutFeatureBlock';
import BlogCards from '../components/BlogCards';
import BottomFloatingNav from '../components/BottomFloatingNav';
import ContactFooter from '../components/ContactFooter';
import CustomCursor from '../components/CustomCursor';
import HeroScene from '../components/HeroScene';
import PartnersLogoWall from '../components/PartnersLogoWall';
import PricingFAQ from '../components/PricingFAQ';
import ServicesRows from '../components/ServicesRows';
import ShowreelPinnedScene from '../components/ShowreelPinnedScene';
import StatsSuccessStory from '../components/StatsSuccessStory';
import TestimonialsPinnedScene from '../components/TestimonialsPinnedScene';
import TopHeader from '../components/TopHeader';
import VisionScrollScene from '../components/VisionScrollScene';
import WorkStickyStack from '../components/WorkStickyStack';

export default function Home() {
  return (
    <>
      <TopHeader />
      <CustomCursor />
      <BottomFloatingNav />
      <main>
        <HeroScene />
        <PartnersLogoWall />
        <WorkStickyStack />
        <AboutFeatureBlock />
        <VisionScrollScene />
        <ServicesRows />
        <ShowreelPinnedScene />
        <PricingFAQ />
        <TestimonialsPinnedScene />
        <StatsSuccessStory />
        <BlogCards />
      </main>
      <ContactFooter />
    </>
  );
}
