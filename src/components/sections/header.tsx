import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";
import Container from "../layouts/container";
import ThemeSwitch from "../theme-switch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export interface NavItem {
  label: string;
  href: string;
  items?: Omit<NavItem, "items">[];
}

export interface HeaderProps extends ComponentProps<"header"> {
  appName?: string;
  items?: NavItem[];
}

export default function Header({
  appName,
  items,
  className,
  ...props
}: HeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 h-16", className)} {...props}>
      <Container className="flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src="/logo.png" alt={appName ?? ""} width={48} height={48} />
          {appName}
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {items?.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeSwitch />
      </Container>
    </header>
  );
}
