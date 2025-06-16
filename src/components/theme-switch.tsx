"use client";

import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { PropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const THEME_SWITCH_ITEMS: ThemeSwitchItem[] = [
  {
    label: "Light",
    value: "light",
    icon: (
      <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
    ),
  },
  {
    label: "Dark",
    value: "dark",
    icon: (
      <MoonIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-90 transition-all dark:scale-100 dark:-rotate-0" />
    ),
  },
  {
    label: "System",
    value: "system",
    icon: (
      <MonitorIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-0" />
    ),
  },
];

export interface ThemeSwitchItem {
  label: string;
  value: "light" | "dark" | "system";
  icon?: React.ReactNode;
}

export interface ThemeSwitchProps
  extends Omit<ComponentProps<typeof Button>, "onClick" | "children"> {
  items?: ThemeSwitchItem[];
}

const ThemeSwitch: ForwardRefExoticComponent<
  PropsWithoutRef<ThemeSwitchProps> & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ThemeSwitchProps>(
  ({ items = THEME_SWITCH_ITEMS, className, ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={ref}
            {...props}
            className={cn(
              className,
              "outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
            variant="ghost"
            size="icon"
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
              className={cn(
                theme === item.value && "bg-accent text-accent-foreground",
              )}
            >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

ThemeSwitch.displayName = "ThemeSwitch";

export default ThemeSwitch;
