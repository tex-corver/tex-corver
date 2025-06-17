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
import { cn } from "@/lib/utils";
import Section from "../layouts/section";

export default function HighlightedProducts() {
  const t = useTranslations();

  const products = [
    {
      title: "Product 1",
      description: "Product 1 description",
      images: ["/placeholder.svg"],
    },
    {
      title: "Product 2",
      description: "Product 2 description",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Product 3",
      description: "Product 3 description",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ];

  return (
    <Section
      id="our-products"
      containerClassName="bg-blue-500/50! dark:bg-blue-700/50! bg-gradient-to-l from-background/0 via-background/50 to-background"
    >
      <div className="flex flex-col justify-center items-center gap-4 md:text-left text-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          {t("ourProducts.title")}
        </h1>
        <p className="px-4 max-w-2xl text-muted-foreground text-base md:text-lg text-center">
          {t("ourProducts.description")}
        </p>
      </div>
      <div className="mt-8 md:mt-12 px-8 w-full">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <div className="gap-2 grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-base md:text-lg">
                      {product.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 h-full max-h-64 md:max-h-96">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex flex-col w-full gap-2",
                          index % 2 === 0 ? "items-start" : "items-end"
                        )}
                        style={{
                          maxHeight: `${100 / product.images.length}%`,
                        }}
                      >
                        <Image
                          key={index}
                          src={image}
                          alt={product.title}
                          width={100}
                          height={100}
                          className={cn(
                            "object-cover w-full h-full",
                            product.images.length > 1 && "max-w-3/4"
                          )}
                          priority
                          loading="eager"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
