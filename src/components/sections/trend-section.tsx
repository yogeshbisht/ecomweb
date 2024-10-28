import { sampleProducts } from "@/sample-data/products";
import CustomCarousel from "../global/custom-carousel";
import SectionTitle from "../global/section-title";
import { CarouselItem } from "../ui/carousel";
import ProductCard from "../global/product-card";

const TrendSection = () => {
  const trendingProducts = sampleProducts.filter(
    (product) => product.isTrending
  );
  return (
    <div className="container mx-auto py-16">
      <SectionTitle
        title="Trending Now"
        subtitle="Follow our latest trends with these selections"
      />
      <CustomCarousel>
        {trendingProducts.map((product) => (
          <CarouselItem key={product.id} className="carousel-multiple">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default TrendSection;
