"use client";

import { useState } from "react";
import { cn, truncateText } from "@/lib/utils";
import { amountWithCurrency } from "@/lib/amount";
import { Product } from "@/types/product";
import RatingStars from "./rating-stars";
import { PencilRuler } from "lucide-react";

type ProductInfoProps = {
  product: Product;
};

// TODO: use svg images for rating stars (solid, half filled with border, star with stroke)

const ProductInfo = ({ product }: ProductInfoProps) => {
  const productRating = product.rating || 0;
  const defaultSize = product.stock[0].size;
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);

  return (
    <div className="flex flex-col gap-6 py-4 relative flex-1 w-full">
      <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
      <div className="flex items-center gap-2">
        <RatingStars rating={productRating} />
      </div>
      <div className="flex items-center gap-2">
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
            <p className="text-sm font-semibold tracking-tight text-orange-600 mt-1">
              {`(${product.discountPercentage}% off)`}
            </p>
          </>
        )}
      </div>
      <div className="text-slate-700 text-xl">
        {product.excerpt || truncateText(product.description, 160)}
      </div>
      <div className="flex items-center gap-4 relative pt-6">
        <div className="text-orange-500 absolute top-0 left-1 text-sm">
          <span className="">{`${
            product.stock.find((stock) => stock.size === selectedSize)?.quantity
          } left`}</span>
        </div>
        {product.stock.map((stock) => (
          <div
            key={stock.size}
            className={cn(
              "font-medium text-slate-500 border rounded-full size-10 flex items-center justify-center cursor-pointer hover:bg-slate-300",
              selectedSize === stock.size && "bg-slate-300"
            )}
            onClick={() => setSelectedSize(stock.size)}
          >
            {stock.size}
          </div>
        ))}
        <div className="ml-4 flex items-center gap-2 cursor-pointer text-sm px-2 py-1 text-rose-600">
          <PencilRuler className="size-3" />
          Size Guide
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
