import { SVGProps } from "react";
import { Customer, Dashboard, Product, Setting } from "~/assets";

export type NavItem = {
  title: string;
  isEnabled: boolean;
  path: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const configNavigationItems: NavItem[] = [
  {
    title: "dashboard",
    isEnabled: true,
    path: "/",
    icon: Dashboard,
  },
  {
    title: "customers",
    isEnabled: true,
    path: "/customers",
    icon: Customer,
  },
  {
    title:"products",
    isEnabled: true,
    path: "/products",
    icon: Product,
  },
  {
    title:'settings',
    isEnabled: true,
    path: "/settings",
    icon: Setting,
  },
];
