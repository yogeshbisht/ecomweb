import { Highlight } from "@/types";
import Link from "next/link";

const highlights: Highlight[] = [
  {
    id: 1,
    title: "Winter Wear, Ethnic Flair",
    description: "Up to 50% off",
    link: "/shop?category=winter&discount=50",
    imgUrl: "https://picsum.photos/480/320"
  },
  {
    id: 2,
    title: "Crisp and Classy Styles",
    description: "Up to 30% off",
    link: "/shop?category=classy&discount=30",
    imgUrl: "https://picsum.photos/480/320"
  },
  {
    id: 3,
    title: "Boot Up and Conquer",
    description: "Up to 50% off",
    link: "/shop?category=shoes,boots&discount=50",
    imgUrl: "https://picsum.photos/480/320"
  }
];

const Highlights = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-8">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="p-16 min-h-[320px] relative"
            style={{ backgroundImage: `url(${highlight.imgUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col gap-2 justify-center h-full">
              <h3 className="text-xl text-white">{highlight.title}</h3>
              <p className="text-2xl text-gray-300">{highlight.description}</p>
              <Link
                href={highlight.link}
                className="text-white uppercase text-sm mt-2 underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
