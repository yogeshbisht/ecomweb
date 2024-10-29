"use client";

import { useRouter } from "next/navigation";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

type ProductActionsProps = {
  productSlug: string;
};

const ProductActions = ({ productSlug }: ProductActionsProps) => {
  const router = useRouter();

  const addToWishlist = () => {
    console.log("Added to wishlist");
  };

  const productView = () => {
    console.log("Opening product details");
    router.push(`/products/${productSlug}`);
  };

  const addToCart = () => {
    console.log("Added to cart");
  };

  const productActions = [
    {
      id: "wishlist",
      label: "Add to wishlist",
      icon: <Heart className="size-4" />,
      onClick: addToWishlist
    },
    {
      id: "quick-view",
      label: "Quick view",
      icon: <Eye className="size-4" />,
      onClick: productView
    },
    {
      id: "add-to-cart",
      label: "Add to cart",
      icon: <ShoppingCart className="size-4" />,
      onClick: addToCart
    }
  ];

  return (
    <div className="flex flex-col gap-2">
      {productActions.map((action) => (
        <Tooltip key={action.id} delayDuration={200}>
          <TooltipTrigger asChild>
            <Button size="icon" onClick={action.onClick}>
              {action.icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={12}>
            {action.label}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default ProductActions;
