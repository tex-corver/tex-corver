"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "@/i18n/navigation";
import { ArrowRightIcon } from "lucide-react";
import Section from "../layouts/section";

export default function Hero() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Section id="hero">
      <div className="flex flex-col items-center justify-center min-h-[calc(80vh-20rem)] gap-8 md:gap-12 md:min-h-[calc(80vh-10rem)]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">
            {t.rich("hero.title", {
              span: (chunks) => (
                <span className="font-extrabold text-transparent bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 bg-clip-text">
                  {chunks}
                </span>
              ),
              appName: t("appName"),
            })}
          </h1>
          <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push("/#our-vision", { scroll: true })}
        >
          {t("hero.button")}
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
        <div className="relative w-full group">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-blue-500/50 dark:bg-blue-700/50 rounded-full blur-3xl"></div>
          <Image
            src="/placeholder.svg"
            alt="Hero"
            width={1000}
            height={1000}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30 max-h-96 object-cover"
            priority
            loading="eager"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 rounded-lg md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
        </div>
      </div>
    </Section>
  );
}
