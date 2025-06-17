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
    {
      name: "Director 3",
      description: "Director 3",
      image: "/placeholder.svg",
    },
  ];
  return (
    <Section id="board-of-directors" gradient>
      <div className="flex flex-col justify-center items-center gap-4 md:text-left text-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          {t("boardOfDirectors.title")}
        </h1>
        <p className="px-4 max-w-2xl text-muted-foreground text-base md:text-lg text-center">
          {t("boardOfDirectors.description")}
        </p>
      </div>
      <div className="mt-8 md:mt-12 px-8 w-full">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {directors.map((director) => (
              <CarouselItem key={director.name}>
                <div className="gap-2 grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-base md:text-lg">
                      {director.name}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {director.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 h-full max-h-64 md:max-h-96">
                    <Image
                      src={director.image}
                      alt={director.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
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
