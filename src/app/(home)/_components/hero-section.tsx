"use client";

import { CarouselItem } from "@/components/ui/carousel";
import HeroBanner from "./hero-banner";
import CustomCarousel from "@/components/global/custom-carousel";

const carouselItems = [
  {
    id: 1,
    title: "Introducing the new collection",
    description: "Awesome products for new urban lifestyle",
    link: "/shop?sort=newest&category=urban",
    imgUrl: "https://picsum.photos/3000/600"
  },
  {
    id: 2,
    title: "Discounted products",
    description: "Get the best deals on our products",
    link: "/shop?sort=discount",
    imgUrl: "https://picsum.photos/3000/600"
  },
  {
    id: 3,
    title: "Always adding to inventory",
    description: "New products added every week",
    link: "/shop?sort=newest",
    imgUrl: "https://picsum.photos/3000/600"
  }
];

// TODO: Add banner images, carousel arrows and dots

const HeroSection = () => {
  return (
    <div className="w-full bg-slate-100">
      <CustomCarousel>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <HeroBanner
              title={item.title}
              description={item.description}
              link={item.link}
              imgUrl="https://picsum.photos/id/338/3000/600"
            />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default HeroSection;
