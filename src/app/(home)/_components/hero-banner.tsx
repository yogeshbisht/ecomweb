import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroBannerProps = {
  title: string;
  description: string;
  link: string;
  imgUrl: string;
};

const HeroBanner = ({ title, description, link, imgUrl }: HeroBannerProps) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col justify-center h-[600px] mx-auto container">
        <h1 className="text-4xl text-white">{title}</h1>
        <p className="text-xl text-slate-300 mt-2">{description}</p>
        <Button variant="outline" size="lg" className="cta-button mt-6" asChild>
          <Link href={link}>Shop Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
