import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-[600px] w-full bg-slate-100">
      <div className="flex flex-col justify-center h-full container mx-auto">
        <h1 className="text-4xl">Introducing the new collection</h1>
        <p className="text-xl text-slate-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent w-[200px] border-black mt-6 hover:bg-black hover:text-white"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
