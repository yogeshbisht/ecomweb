import { HeaderIconType } from "@/types";
import { User2, Heart, ShoppingCart } from "lucide-react";

const headerIcons: HeaderIconType[] = [
  { icon: User2, label: "Profile", href: "/profile" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: ShoppingCart, label: "Cart", href: "/cart" }
];

export { headerIcons };
