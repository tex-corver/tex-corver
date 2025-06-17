"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import ThemeSwitch, { ThemeSwitchItem } from "../theme-switch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import LangSwitch, { LangSwitchItem } from "../lang-switch";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  items?: Omit<NavItem, "items">[];
}

export interface HeaderProps extends ComponentProps<"header"> {
  items?: NavItem[];
  themes?: ThemeSwitchItem[];
  langs?: LangSwitchItem[];
}

export default function Header({
  items,
  className,
  themes,
  langs,
  ...props
}: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 bg-background/80 backdrop-blur-sm px-2",
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center h-full">
        <div className="hidden md:flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </Link>
          <NavigationMenu className="hidden md:block mx-1">
            <NavigationMenuList>
              {items?.map((item, idx) => (
                <NavigationMenuItem key={idx} className="mx-none px-none">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium hover:text-primary transition-colors duration-300 px-1 py-1 mx-2"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden flex outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </Button>
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitch items={themes} />
          <LangSwitch items={langs} />
        </div>
      </div>
    </header>
  );
}
