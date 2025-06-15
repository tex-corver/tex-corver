"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import Container from "../layouts/container";
import ThemeSwitch, { ThemeSwitchItem } from "../theme-switch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
        "sticky top-0 z-1 h-16 bg-background/90 backdrop-blur-sm px-2",
        className
      )}
      {...props}
    >
      <Container className="flex items-center justify-between h-full">
        <div className="items-center hidden gap-2 md:flex">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {items?.map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium hover:text-primary transition-colors duration-300 px-2 py-1 mx-2"
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
          className="flex outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </Button>
        <div className="items-center hidden gap-2 md:flex">
          <ThemeSwitch items={themes} />
          <LangSwitch items={langs} />
        </div>
      </Container>
    </header>
  );
}
