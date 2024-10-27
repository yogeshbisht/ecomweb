import Link from "next/link";
import BrandLogo from "@/components/global/brand-logo";
import GlobalSearch from "@/components/global/global-search";
import { headerIcons } from "@/constants";

const MainHeader = () => {
  return (
    <div className="h-24 w-full bg-slate-100">
      <div className="flex justify-between items-center h-full container mx-auto">
        <BrandLogo />
        <GlobalSearch />
        <div className="flex items-center justify-end gap-6">
          {headerIcons.map((icon) => (
            <Link href={icon.href} key={icon.label}>
              <icon.icon className="size-6 text-slate-500" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
