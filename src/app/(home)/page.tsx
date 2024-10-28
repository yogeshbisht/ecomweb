import HeroSection from "./_components/hero-section";
import MainHeader from "@/components/global/main-header";
import StatusBar from "@/components/global/status-bar";
import Highlights from "@/components/global/highlights";
import CategorySection from "@/components/sections/category-section";
import TrendSection from "@/components/sections/trend-section";

const HomePage = () => {
  return (
    <main>
      <StatusBar />
      <MainHeader />
      <HeroSection />
      <Highlights />
      <CategorySection />
      <TrendSection />
    </main>
  );
};

export default HomePage;
