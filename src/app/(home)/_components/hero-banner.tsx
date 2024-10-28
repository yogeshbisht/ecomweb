import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroBannerProps = {
  title: string;
  description: string;
  link: string;
};

const HeroBanner = ({ title, description, link }: HeroBannerProps) => {
  return (
    <div className="flex flex-col justify-center h-[600px] container mx-auto">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-xl text-slate-500 mt-2">{description}</p>
      <Button
        variant="outline"
        size="lg"
        className="bg-transparent w-[200px] border-black mt-6 hover:bg-black hover:text-white"
        asChild
      >
        <Link href={link}>Shop Now</Link>
      </Button>
    </div>
  );
};

export default HeroBanner;
