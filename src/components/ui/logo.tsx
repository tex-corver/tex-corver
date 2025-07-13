"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  alt?: string;
}

export default function Logo({ alt = "Logo", ...props }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which logo to use based on theme
  const getLogoSrc = () => {
    if (!mounted) return "/logo.png"; // Default during SSR

    const currentTheme = resolvedTheme || theme;

    if (currentTheme === "dark") {
      return "/logo-white.png";
    } else {
      return "/logo-black.png";
    }
  };

  return <Image src={getLogoSrc()} alt={alt} {...props} />;
}
