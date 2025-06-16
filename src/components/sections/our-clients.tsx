"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Section from "../layouts/section";

export default function OurClients() {
  const t = useTranslations();
  const clients = [
    {
      name: "Client 1",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 2",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 3",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 4",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 5",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 6",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 7",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 8",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 9",
      logo: "/placeholder.svg",
    },
    {
      name: "Client 10",
      logo: "/placeholder.svg",
    },
  ];
  return (
    <Section id="our-clients">
      <div className="flex flex-col justify-center items-center gap-4 md:text-left text-center">
        <h1 className="font-bold text-4xl">{t("ourClients.title")}</h1>
        <p className="px-4 max-w-2xl text-muted-foreground text-lg text-center">
          {t("ourClients.description")}
        </p>
      </div>
      <div className="relative mt-12 w-full overflow-hidden">
        {/* Marquee */}
        <Marquee className="w-full max-w-[calc(100vw-5rem)]" speed={100}>
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center gap-2 p-4">
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={100}
                className="w-16 h-16 object-cover"
              />
              {client.name}
            </div>
          ))}
        </Marquee>

        {/* Left gradient overlay */}
        <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-background to-transparent w-16 h-full pointer-events-none" />

        {/* Right gradient overlay */}
        <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-background to-transparent w-16 h-full pointer-events-none" />
      </div>
    </Section>
  );
}
