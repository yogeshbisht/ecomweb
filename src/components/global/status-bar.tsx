import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { getCurrencySymbol } from "@/lib/amount";
import Link from "next/link";

const currencyOptions = ["usd", "eur", "gbp"];

const StatusBar = () => {
  return (
    <div className="h-12 w-full bg-slate-800">
      <div className="flex items-center justify-between container mx-auto h-full">
        <div className="flex items-center gap-4">
          <div>
            <Select defaultValue={currencyOptions[0]}>
              <SelectTrigger className="text-white outline-none border-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {getCurrencySymbol(currency)} {currency.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-white">
            {`Summer Sale: 20% off! `}
            <span className="underline cursor-pointer">{`Shop Now!`}</span>
          </div>
        </div>
        <div className="flex items-center gap-8 text-white text-sm">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
