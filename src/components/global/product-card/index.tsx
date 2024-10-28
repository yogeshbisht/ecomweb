import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Product } from "@/types/product";
import Link from "next/link";
import ProductActions from "./product-actions";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <div className="w-[320px] h-[480px] rounded-t-lg overflow-hidden relative group cursor-pointer">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={320}
            height={480}
            className="group-hover:scale-105 transition-all duration-300"
          />
        </Link>
        <div className="absolute flex items-end justify-end p-2 bottom-0 right-0 transition-all duration-300 translate-x-20 group-hover:translate-x-0">
          <ProductActions productSlug={product.slug} />
        </div>
      </div>
      <CardHeader className="h-20">
        <CardTitle className="cursor-pointer">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
