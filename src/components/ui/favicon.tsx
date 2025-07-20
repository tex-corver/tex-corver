"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Favicon() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update favicon based on theme
  useEffect(() => {
    if (!mounted) return;

    const currentTheme = resolvedTheme || theme;
    const favicon = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement;

    if (favicon) {
      if (currentTheme === "dark") {
        favicon.href = "/logo-white.ico";
      } else {
        favicon.href = "/logo-black.ico";
      }
    }
  }, [theme, resolvedTheme, mounted]);

  return null; // This component doesn't render anything visible
}
