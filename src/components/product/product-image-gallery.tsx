"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

type ProductImageGalleryProps = {
  images: string[];
};

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-col gap-6">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <Image src={image} alt={image} width={640} height={960} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-6">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={80}
            height={120}
            className="cursor-pointer"
            onClick={() => {
              api?.scrollTo(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
