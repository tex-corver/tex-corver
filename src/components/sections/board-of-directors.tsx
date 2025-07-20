import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";

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
      <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12 px-8 text-center">
        {directors.map((director) => (
          <div
            key={director.name}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center gap-4 shadow-md py-4 border rounded-md text-center"
          >
            <Image
              src={director.image}
              alt={director.name}
              width={256}
              height={256}
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-md"
            />
            <h2 className="px-4 font-bold text-base md:text-lg">
              {director.name}
            </h2>
            <h3 className="px-4 font-semibold text-sm md:text-base">
              {director.position}
            </h3>
            <p className="px-4 text-muted-foreground text-sm md:text-base">
              {director.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
