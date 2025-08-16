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
        className="pt-0!"
        containerClassName="relative h-[calc(100dvh-64px)] flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

        <div className="relative z-10 max-w-5xl flex flex-col text-left gap-4 md:gap-10 md:ml-16 lg:ml-24">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-transparent text-left">
              {t("hero.title1")}
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-transparent text-left">
              {t("hero.title2")}
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-transparent text-left">
              {t("hero.title3")}
            </h1>
          </div>

          <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl">
            {t("hero.description")}
          </p>
        </div>
      </Section>

      <div className="container mx-auto px-8">
        <div className="mt-8 md:mt-12 w-full flex flex-col gap-12">
          <div className="w-full px-6 md:px-4">
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
              src="/cover.png"
              alt="Cover"
              width={1000}
              height={1000}
              className="w-full object-cover rounded-md"
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
