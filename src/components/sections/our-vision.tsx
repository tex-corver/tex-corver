import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";

export default function OurVision() {
  const t = useTranslations();
  const visions = [
    {
      title: "Tầm nhìn 1",
      description: "Tầm nhìn 1",
      image: "/placeholder.svg",
    },
    {
      title: "Tầm nhìn 2",
      description: "Tầm nhìn 2",
      image: "/placeholder.svg",
    },
    {
      title: "Tầm nhìn 3",
      description: "Tầm nhìn 3",
      image: "/placeholder.svg",
    },
    {
      title: "Tầm nhìn 4",
      description: "Tầm nhìn 4",
      image: "/placeholder.svg",
    },
  ];
  return (
    <Section id="our-vision">
      <div className="flex flex-col justify-center items-center gap-4 md:text-left text-center">
        <h1 className="font-bold text-2xl md:text-4xl">{t("ourVision.title")}</h1>
        <p className="px-4 max-w-2xl text-muted-foreground text-base md:text-lg text-center">
          {t("ourVision.description")}
        </p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 md:text-left">
        {visions.map((vision) => (
          <div
            key={vision.title}
            className="flex flex-col gap-4 shadow-md border rounded-md md:text-left text-center"
          >
            <div className="flex flex-col gap-2 px-4 pt-4">
              <h2 className="font-bold text-base md:text-lg">{vision.title}</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                {vision.description}
              </p>
            </div>
            <Image
              src={vision.image}
              alt={vision.title}
              width={100}
              height={100}
              className="w-full h-48 md:h-64 object-cover"
              priority
              loading="eager"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
