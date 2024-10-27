import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const GlobalSearch = () => {
  return (
    <div className="relative flex items-center">
      <Input className="w-[400px]" placeholder="Search for products" />
      <SearchIcon className="absolute right-4 size-6 text-slate-500" />
    </div>
  );
};

export default GlobalSearch;
