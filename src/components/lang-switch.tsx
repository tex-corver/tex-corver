"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ComponentProps } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const LANG_SWITCH_ITEMS: LangSwitchItem[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Vietnamese",
    value: "vn",
  },
];

export interface LangSwitchProps
  extends Omit<ComponentProps<typeof Button>, "onClick" | "children"> {
  items?: LangSwitchItem[];
  locale?: string;
}

export interface LangSwitchItem {
  label: string;
  value: string;
}

export default function LangSwitch({
  items = LANG_SWITCH_ITEMS,
  className,
  locale,
  ...props
}: LangSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            className
          )}
          {...props}
          variant="ghost"
          size="icon"
        >
          <GlobeIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-0" />
          <p className="block lg:hidden">
            {items.find((item) => item.value === locale)?.label}
          </p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() =>
              router.replace(
                {
                  pathname,
                  query: {
                    ...Object.fromEntries(searchParams.entries()),
                  },
                },
                {
                  locale: item.value,
                }
              )
            }
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
