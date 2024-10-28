import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

type CustomCarouselProps = {
  children: React.ReactNode;
};

const CustomCarousel = ({ children }: CustomCarouselProps) => {
  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
};

export default CustomCarousel;
