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
    <Section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.rich("hero.title", {
                  span: (chunks) => (
                    <span className="font-extrabold text-transparent bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 bg-clip-text">
                      {chunks}
                    </span>
                  ),
                  appName: t("appName"),
                })}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={() => router.push("/#our-vision", { scroll: true })}
              >
                {t("hero.button")}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={() => router.push("/#our-products", { scroll: true })}
              >
                Xem sản phẩm
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-3xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src="/placeholder.svg"
                alt="Hero"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
