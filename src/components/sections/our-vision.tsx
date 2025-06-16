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
    <Section id="our-vision" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ourVision.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("ourVision.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visions.map((vision, index) => (
            <div
              key={vision.title}
              className="group bg-card rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{vision.title}</h3>
                <p className="text-muted-foreground">{vision.description}</p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={vision.image}
                  alt={vision.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
