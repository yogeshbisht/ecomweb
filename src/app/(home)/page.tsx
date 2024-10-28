import HeroSection from "./_components/hero-section";
import MainHeader from "@/components/global/main-header";
import StatusBar from "@/components/global/status-bar";
import Highlights from "@/components/global/highlights";

const HomePage = () => {
  return (
    <div>
      <StatusBar />
      <MainHeader />
      <HeroSection />
      <Highlights />
    </div>
  );
};

export default HomePage;
