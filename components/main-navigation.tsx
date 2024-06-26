"use client";

import { cn } from "@/lib/utils";
import {
  Layers,
  LayoutDashboard,
  Monitor,
  Package,
  PaintBucket,
  PencilRuler,
  Settings,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const MainNavigation = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Dashboard",
      active: pathname === `/${params.storeId}`,
      icon: <LayoutDashboard size={20} />,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
      icon: <Monitor size={20} />,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
      icon: <Layers size={20} />,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
      icon: <PencilRuler size={20} />,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
      icon: <PaintBucket size={20} />,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
      icon: <ShoppingBasket size={20} />,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
      icon: <Package size={20} />,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
      icon: <Settings size={20} />,
    },
  ];

  return (
    <ul className="flex flex-col gap-y-2">
      {routes.map((route) => (
        <li key={route.href}>
          <Link
            href={route.href}
            className={cn(
              "flex flex-row items-center text-neutral-500 hover:text-black dark:hover:text-white transition-colors p-2 rounded-md",
              route.active &&
                "text-white dark:text-black bg-black dark:bg-white rounded-md hover:text-white dark:hover:text-black"
            )}>
            <div className="mr-2">{route.icon}</div>
            <span className="text-sm font-medium">{route.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNavigation;
