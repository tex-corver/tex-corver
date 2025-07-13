"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

interface Card {
  title: string;
  description: string;
}

export default function Hero() {
  const t = useTranslations();
  const cards = t.raw("hero.expertiseCards") as Card[];

  const [chunkedCards, setChunkedCards] = useState<Card[][]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function chunkArrayResponsive<T>(array: T[]): T[][] {
      let chunkSize = 3;
      const width = window.innerWidth;
      if (width < 640) chunkSize = 1;
      else if (width < 1024) chunkSize = 2;
      else chunkSize = 3;

      return Array.from(
        { length: Math.ceil(array.length / chunkSize) },
        (_, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize)
      );
    }

    setChunkedCards(chunkArrayResponsive(cards));
    setMounted(true);
  }, [cards]);

  return (
    <>
      <Section
        id="hero"
        containerClassName="bg-blue-500/50! dark:bg-blue-700/50! bg-gradient-to-l from-background/0 via-background/50 to-background"
      >
        <div className="max-w-2xl flex flex-col text-left md:gap-3">
          <h1 className="font-bold text-2xl md:text-4xl leading-tight">
            {t.rich("hero.title", {
              span: (chunks) => (
                <span className="bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 font-extrabold text-transparent">
                  {chunks}
                </span>
              ),
              appName: t("appName"),
            })}
          </h1>

          <p className="text-sm md:text-base text-muted-foreground font-normal tracking-wide italic">
            {t("hero.sologan")}
          </p>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </Section>

      <div className="container mx-auto px-8">
        <div className="mt-8 md:mt-12 w-full flex flex-col gap-12">
          <div className="w-full px-4">
            {mounted && (
              <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
                <CarouselContent>
                  {chunkedCards.map((chunk, index) => (
                    <CarouselItem key={index}>
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full">
                        {chunk.map((card) => (
                          <div
                            key={card.title}
                            className="flex flex-col gap-2 p-4 shadow-md border rounded-md bg-white dark:bg-zinc-900"
                          >
                            <h2 className="font-bold text-base md:text-lg">
                              {card.title}
                            </h2>
                            <p className="text-muted-foreground text-sm md:text-base">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </div>

          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
            <Image
              src="/placeholder.svg"
              alt="Hero"
              width={100}
              height={100}
              className="w-full h-48 md:h-64 object-cover"
              priority
              loading="eager"
            />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line">
              {t("hero.endAboutUs")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
