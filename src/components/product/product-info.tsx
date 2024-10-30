"use client";

import { useState } from "react";
import {
  CircleCheck,
  Heart,
  Info,
  PencilRuler,
  Share,
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { amountWithCurrency } from "@/lib/amount";
import { Product } from "@/types/product";
import RatingStars from "./rating-stars";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type ProductInfoProps = {
  product: Product;
};

// TODO: use svg images for rating stars (solid, half filled with border, star with stroke)
// TODO: replace the info tooltip with info modal

const ProductInfo = ({ product }: ProductInfoProps) => {
  const productRating = product.rating || 0;
  const defaultSize = product.stock[0].size;
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);

  return (
    <div className="py-4 relative flex-1">
      <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
      <div className="flex items-center mt-4 gap-2">
        <RatingStars rating={productRating} />
      </div>
      <Separator className="my-4" />
      <div className="flex items-center gap-4">
        <p
          className={cn(
            "product-price text-slate-800",
            product.discountPercentage && "line-through text-slate-400"
          )}
        >
          {amountWithCurrency(product.price)}
        </p>
        {product.discountPercentage && (
          <>
            <p className="product-price text-slate-800">
              {amountWithCurrency(
                product.price * (1 - product.discountPercentage / 100)
              )}
            </p>
            <p className="font-semibold tracking-tight text-orange-600">
              {`(${product.discountPercentage}% off)`}
            </p>
          </>
        )}
      </div>
      <span className="text-slate-500">inclusive of taxes</span>
      <div className="flex items-center gap-4 pb-3 py-5">
        <span className="text-slate-500 font-semibold">SIZE</span>
        <div className="flex items-center gap-2 cursor-pointer text-sm px-2 py-1 text-rose-600">
          <PencilRuler className="size-3" />
          Size Guide
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        {product.stock.map((stock) => (
          <>
            <div
              key={stock.size}
              className={cn(
                "relative font-medium border border-slate-300 rounded-full size-10 flex items-center justify-center cursor-pointer hover:bg-slate-300 text-sm text-slate-500",
                selectedSize === stock.size && "bg-slate-300"
              )}
              onClick={() => setSelectedSize(stock.size)}
            >
              {stock.size}
              {stock.quantity < 5 && (
                <div className="text-xs absolute -bottom-2 left-0 w-full p-0.5 bg-orange-400 flex justify-center items-center text-white">{`${stock.quantity} left`}</div>
              )}
            </div>
          </>
        ))}
      </div>
      <div className="flex mt-8 items-center gap-4">
        <Button
          variant="outline"
          size="xl"
          className="w-[200px] border-slate-800"
        >
          ADD TO CART
        </Button>
        <Button size="xl" className="w-[200px]">
          BUY NOW
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-slate-800 size-12"
        >
          <Heart className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-slate-800 size-12"
        >
          <Share className="size-4" />
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="text-sm text-slate-700 mb-4">
        <div className="flex items-center gap-3 text-slate-600 mb-3">
          <Truck className="size-6 text-slate-600" />
          <div className="text-slate-600 text-base">Free Shipping</div>
          <Info className="size-4 text-slate-500" />
        </div>
        <p>Free standard shipping on orders above $99</p>
        <p>{`Estimated delivery date: ${new Date().toLocaleDateString()}`}</p>
      </div>
      <div className="text-slate-700 text-sm">
        <div className="flex items-center gap-3 text-slate-600 mb-3">
          <CircleCheck className="size-6 text-slate-600" />
          <div className="text-slate-600 text-base">Free Returns</div>
        </div>
        <div className="flex items-center gap-2">
          Easy 7 days returns and exchanges
          <span className="text-blue-400 cursor-pointer">Learn more</span>
        </div>
      </div>
      <Separator className="my-6" />
    </div>
  );
};

export default ProductInfo;
