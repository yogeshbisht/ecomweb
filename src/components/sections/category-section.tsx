import React from "react";

import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import CustomCarousel from "../global/custom-carousel";
import SectionTitle from "../global/section-title";
import { sampleCategories } from "@/sample-data/categories";

const CategorySection = () => {
  return (
    <div className="container mx-auto py-16">
      <SectionTitle
        title="Popular Categories"
        subtitle="Browse our products by category"
      />
      <CustomCarousel>
        {sampleCategories.map((category) => (
          <CarouselItem
            key={category.id}
            className="carousel-multiple flex-col"
          >
            <div className="w-[240px] h-[240px] rounded-full">
              <Image
                src="https://placehold.co/240.png"
                alt={category.title}
                width={240}
                height={240}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl mt-4">{category.title}</h3>
          </CarouselItem>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default CategorySection;
