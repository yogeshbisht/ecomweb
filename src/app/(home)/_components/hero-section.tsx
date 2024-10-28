"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import HeroBanner from "./hero-banner";

const carouselItems = [
  {
    id: 1,
    title: "Introducing the new collection",
    description: "Awesome products for new urban lifestyle",
    link: "/shop?sort=newest&category=urban"
  },
  {
    id: 2,
    title: "Discounted products",
    description: "Get the best deals on our products",
    link: "/shop?sort=discount"
  },
  {
    id: 3,
    title: "Always adding to inventory",
    description: "New products added every week",
    link: "/shop?sort=newest"
  }
];

// TODO: Add banner images, carousel arrows and dots

const HeroSection = () => {
  return (
    <div className="w-full bg-slate-100">
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <HeroBanner
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroSection;
