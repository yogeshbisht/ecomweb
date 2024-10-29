import { Product } from "@/types/product";
import RatingStars from "./rating-stars";

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const productRating = product.rating || 0;

  return (
    <div className="flex flex-col gap-4 py-4">
      <h1 className="text-3xl font-semibold tracking-tight">{product.name}</h1>
      <div className="flex items-center gap-2">
        <RatingStars rating={productRating} />
      </div>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductInfo;
