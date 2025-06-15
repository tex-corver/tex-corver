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
      <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">{t("ourVision.title")}</h1>
        <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
          {t("ourVision.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-4 md:text-left">
        {visions.map((vision) => (
          <div
            key={vision.title}
            className="flex flex-col gap-2 text-center border rounded-md shadow-md md:text-left"
          >
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-lg font-bold">{vision.title}</h2>
              <p className="text-base text-muted-foreground">
                {vision.description}
              </p>
            </div>
            <Image
              src={vision.image}
              alt={vision.title}
              width={100}
              height={100}
              className="object-cover w-full h-full"
              priority
              loading="eager"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
