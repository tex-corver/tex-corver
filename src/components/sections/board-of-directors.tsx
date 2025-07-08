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
  const directors = t.raw("boardOfDirectors.directors") as unknown as {
    position: string;
    name: string;
    description: string;
    image: string;
  }[];

  return (
    <Section id="board-of-directors" gradient>
      <h1 className="font-bold text-2xl md:text-4xl leading-tight">
        {t("boardOfDirectors.title")}
      </h1>

      {/* <p className="px-4 max-w-2xl text-muted-foreground text-base md:text-lg text-center">
          {t("boardOfDirectors.description")}
        </p> */}
      {/* </div> */}
      <div className="mt-8 md:mt-12 px-8 w-full">
        <Carousel opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent>
            {directors.map((director) => (
              <CarouselItem key={director.name}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                      src={director.image}
                      alt={director.name}
                      width={200}
                      height={200}
                      className="w-full max-w-[200px] h-auto object-cover rounded-md"
                    />
                  </div>

                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="font-bold text-lg md:text-xl">{director.name}</h2>
                    <p className="text-primary font-semibold text-base md:text-lg mt-1">
                      {director.position}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base mt-2">
                      {director.description}
                    </p>
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
