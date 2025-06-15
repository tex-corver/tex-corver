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
    <Section id="our-products">
      <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">{t("ourProducts.title")}</h1>
        <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
          {t("ourProducts.description")}
        </p>
      </div>
      <div className="w-full px-8 mt-12">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-lg text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-col h-full gap-2 max-h-96">
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
