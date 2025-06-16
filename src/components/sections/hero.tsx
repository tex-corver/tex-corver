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
      <div className="flex flex-col justify-center items-center gap-8 md:gap-12 min-h-[calc(80vh-20rem)] md:min-h-[calc(80vh-10rem)]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl">
            {t.rich("hero.title", {
              span: (chunks) => (
                <span className="bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 font-extrabold text-transparent text-center">
                  {chunks}
                </span>
              ),
              appName: t("appName"),
            })}
          </h1>
          <p className="px-4 max-w-2xl text-muted-foreground text-lg text-center">
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
        <div className="group relative w-full">
          <div className="top-2 lg:-top-8 left-1/2 absolute bg-blue-500/50 dark:bg-blue-700/50 blur-3xl mx-auto rounded-full w-[90%] h-24 lg:h-80 -translate-x-1/2 transform"></div>
          <Image
            src="/placeholder.svg"
            alt="Hero"
            width={1000}
            height={1000}
            className="relative flex items-center mx-auto border border-secondary border-t-2 border-t-primary/30 rounded-lg w-full md:w-[1200px] max-h-96 object-cover leading-none"
            priority
            loading="eager"
          />
          <div className="bottom-0 left-0 absolute bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg w-full h-20 md:h-28"></div>
        </div>
      </div>
    </Section>
  );
}
