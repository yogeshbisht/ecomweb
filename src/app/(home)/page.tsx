import HeroSection from "./_components/hero-section";
import MainHeader from "@/components/global/main-header";
import StatusBar from "@/components/global/status-bar";
import Highlights from "@/components/global/highlights";
import CategorySection from "@/components/sections/category-section";

const HomePage = () => {
  return (
    <div>
      <StatusBar />
      <MainHeader />
      <HeroSection />
      <Highlights />
      <CategorySection />
    </div>
  );
};

export default HomePage;
