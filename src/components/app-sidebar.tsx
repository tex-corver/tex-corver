"use client";

import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LangSwitchItem } from "./lang-switch";
import ThemeSwitch, { ThemeSwitchItem } from "./theme-switch";
import Logo from "./ui/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";

const APP_SIDEBAR_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Vision",
    href: "/#our-vision",
  },
  {
    label: "Our Products",
    href: "/#our-products",
  },
  {
    label: "Our Clients",
    href: "/#our-clients",
  },
  {
    label: "Board of Directors",
    href: "/#board-of-directors",
  },
  {
    label: "Team Members",
    href: "/#team-members",
  },
];

export interface AppSidebarItem {
  label: string;
  href: string;
}

export interface AppSidebarProps {
  appName?: string;
  locale?: string;
  items?: AppSidebarItem[];
  themes?: ThemeSwitchItem[];
  langs?: LangSwitchItem[];
}

export default function AppSidebar({
  appName,
  items = APP_SIDEBAR_ITEMS,
  themes,
}: AppSidebarProps) {
  const router = useRouter();
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar className={cn("md:hidden")}>
      <SidebarHeader className="flex flex-row items-center gap-2 p-4">
        <Logo width={48} height={48} />
        <h1 className="text-lg font-bold">{appName}</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item, idx) => (
            <SidebarMenuItem className="px-2" key={idx}>
              <SidebarMenuButton
                asChild
                // isActive={pathname === item.href}
                onClick={() => {
                  router.push(item.href);
                  toggleSidebar();
                }}
              >
                <Link href={item.href}>{item.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row gap-8">
          <ThemeSwitch items={themes} />
          {/* <LangSwitch items={langs} locale={locale} /> */}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
