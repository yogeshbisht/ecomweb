import MainHeader from "@/components/global/main-header";
import StatusBar from "@/components/global/status-bar";
import HeroSection from "./_components/hero-section";

const HomePage = () => {
  return (
    <div>
      <StatusBar />
      <MainHeader />
      <HeroSection />
    </div>
  );
};

export default HomePage;
