import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";

export default function OurVision() {
  const t = useTranslations();
  return (
    <Section id="our-vision">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl md:text-4xl">
          {t("ourVision.title")}
        </h1>
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 items-center pb-6">
          <p className="text-muted-foreground text-base md:text-lg whitespace-pre-line">
            {t("ourVision.description")}
          </p>

          <Image
            src="/our-vision.png"
            alt="Vision"
            width={1000}
            height={1000}
            className="w-full h-48 md:h-64 object-contain"
            priority
            loading="eager"
          />
        </div>
      </div>
    </Section>
  );
}
