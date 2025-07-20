"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Section from "../layouts/section";

export default function OurClients() {
  const t = useTranslations();
  const clients = t.raw("ourClients.clients") as unknown as {
    name: string;
    description: string;
    logo: string;
  }[];

  return (
    <Section id="our-clients">
      <h1 className="font-bold text-2xl md:text-4xl leading-tight">
        {t("ourClients.title")}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-12 px-8 text-center">
        {clients.map((client) => (
          <div
            key={client.name}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center gap-4 shadow-md py-4 border rounded-md text-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={64}
              height={64}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
            />
            <h2 className="px-4 font-bold text-base md:text-lg">{client.name}</h2>
            <p className="px-4 text-muted-foreground text-sm md:text-base">
              {client.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
