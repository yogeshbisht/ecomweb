import React from "react";
import { Category } from "@/types";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import CustomCarousel from "../global/custom-carousel";

const categorySectionData: Category[] = [
  {
    id: 1,
    title: "Ethnic Wear",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 2,
    title: "Western Wear",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 3,
    title: "Footwear",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 4,
    title: "Accessories",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 5,
    title: "Winter Wear",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 6,
    title: "Kids Wear",
    imgUrl: "https://placehold.co/240"
  },
  {
    id: 7,
    title: "Sports Wear",
    imgUrl: "https://placehold.co/240"
  }
];

const CategorySection = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-4xl mb-2">Popular Categories</h2>
      </div>
      <CustomCarousel>
        {categorySectionData.map((category) => (
          <CarouselItem
            key={category.id}
            className="xl:basis-1/4 lg:basis-1/3 basis-1/2 flex flex-col justify-center items-center"
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
