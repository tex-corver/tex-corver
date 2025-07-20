"use client";

import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Section from "../layouts/section";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Product = {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  keyFeatures: {
    feature: string;
    description: string;
    src: string;
  }[];
};

export default function HighlightedProducts() {
  const t = useTranslations();
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      setProducts(t.raw("ourProducts.products") as unknown as Product[]);
      mounted.current = true;
    }
  }, [t]);

  return (
    <Section
      id="our-products"
      containerClassName="bg-blue-500/50! dark:bg-blue-700/50! bg-gradient-to-l from-background/0 via-background/50 to-background"
    >
      <div className="flex flex-col gap-4 text-left">
        <h1 className="font-bold text-2xl md:text-4xl leading-tight">
          {t("ourProducts.title")}
        </h1>
        <p className="max-w-2xl italic text-muted-foreground text-base md:text-lg">
          {t("ourProducts.description")}
        </p>
      </div>
      <div className="mt-8 md:mt-12 px-8 w-full">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {products.map((product, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-2 justify-center">
                      <h2 className="font-bold text-lg md:text-2xl">
                        {product.title}
                      </h2>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {product.description}
                      </p>
                    </div>

                    <Image
                      src={
                        theme === "dark"
                          ? product.image.dark
                          : product.image.light
                      }
                      alt={product.title}
                      width={1000}
                      height={1000}
                      className="h-72 md:h-96 object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
