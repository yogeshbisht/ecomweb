import { notFound } from "next/navigation";
import ProductImageGallery from "@/components/product/product-image-gallery";
import ProductInfo from "@/components/product/product-info";
import { sampleProducts } from "@/sample-data/products";

async function getProduct(productSlug: string) {
  const product = sampleProducts.find(
    (product) => product.slug === productSlug
  );
  return product;
}

const ProductDetailsPage = async ({
  params
}: {
  params: { productSlug: string };
}) => {
  const { productSlug } = params;
  const product = await getProduct(productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex gap-8">
      <div className="w-[640px]">
        <ProductImageGallery images={product.images} />
      </div>
      <div className="flex-1">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
