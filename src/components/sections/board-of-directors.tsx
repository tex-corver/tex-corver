import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function BoardOfDirectors() {
  const t = useTranslations();
  const directors = [
    {
      name: "Director 1",
      description: "Director 1",
      image: "/placeholder.svg",
    },
    {
      name: "Director 2",
      description: "Director 2",
      image: "/placeholder.svg",
    },
  ];
  return (
    <Section id="board-of-directors">
      <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">{t("boardOfDirectors.title")}</h1>
        <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
          {t("boardOfDirectors.description")}
        </p>
      </div>
      <div className="w-full px-8 mt-12">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {directors.map((director) => (
              <CarouselItem key={director.name}>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{director.name}</h2>
                    <p className="text-lg text-muted-foreground">
                      {director.description}
                    </p>
                  </div>
                  <div className="flex flex-col h-full gap-2 max-h-[768px]">
                    <Image
                      src={director.image}
                      alt={director.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
