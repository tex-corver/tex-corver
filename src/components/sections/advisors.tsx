import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";


export default function Advisors() {
  const t = useTranslations();
  const advisors = t.raw("advisors.advisors") as unknown as {
    name: string;
    description: string;
    image: string;
  }[];

  return (
    <Section id="advisors">
      <h1 className="font-bold text-2xl md:text-4xl leading-tight">
        {t("advisors.title")}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12 px-8 text-center">
        {advisors.map((advisor) => (
          <div
            key={advisor.name}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center gap-4 shadow-md py-4 border rounded-md text-center"
          >
            <Image
              src={advisor.image}
              alt={advisor.name}
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
            />
            <h2 className="px-4 font-bold text-base md:text-lg">{advisor.name}</h2>
            <p className="px-4 text-muted-foreground text-sm md:text-base">
              {advisor.description}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
}
