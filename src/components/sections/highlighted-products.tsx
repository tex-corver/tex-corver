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

  const products = t.raw("ourProducts.products") as unknown as {
    title: string;
    description: string;
    keyFeatures: {
      feature: string;
      description: string;
      src: string;
    }[];
  }[];

  const getLayoutChunks = (
    features: { src: string; feature: string; description: string }[]
  ) => {
    const count = features.length;

    if (count <= 2) return [features];
    if (count === 3) return [features.slice(0, 2), [features[2]]];
    if (count === 4) return [features.slice(0, 2), features.slice(2)];
    if (count === 5) return [features.slice(0, 2), features.slice(2)];

    const half = Math.ceil(count / 2);
    return [features.slice(0, half), features.slice(half)];
  };

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
              const chunks = getLayoutChunks(product.keyFeatures);

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

                    <div className="flex flex-col gap-4">
                      {chunks.map((row, rowIndex) => (
                       <div
                       key={rowIndex}
                       className={cn(
                         "grid gap-4",
                         row.length === 1
                           ? "grid-cols-1"
                           : row.length === 2
                           ? "grid-cols-2"
                           : "grid-cols-1", // fallback nếu có nhiều hơn 2 item
                     
                         row.length === 1
                           ? "sm:grid-cols-1"
                           : row.length === 2
                           ? "sm:grid-cols-2"
                           : "sm:grid-cols-3"
                       )}
                     >
                          {row.map((feature, i) => (
                            <FeatureTile key={i} feature={feature} />
                          ))}
                        </div>
                      ))}

                    </div>
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

function FeatureTile({
  feature,
}: {
  feature: { src: string; feature: string; description: string };
}) {
  return (
    <div className="relative group overflow-hidden rounded-xl h-48 sm:h-64 md:h-72 lg:h-80">
      <Image
        src={feature.src}
        alt={feature.feature}
        fill
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        priority
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <h3 className="font-semibold text-sm md:text-base">
          {feature.feature}
        </h3>
        <p className="text-xs md:text-sm opacity-80">{feature.description}</p>
      </div>
    </div>
  );
}
