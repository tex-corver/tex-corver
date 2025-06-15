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
      <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">{t("ourClients.title")}</h1>
        <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
          {t("ourClients.description")}
        </p>
      </div>
      <div className="relative w-full mt-12 overflow-hidden">
        {/* Marquee */}
        <Marquee className="w-full" speed={100}>
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center gap-2 p-4">
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={100}
                className="object-cover w-16 h-16"
              />
              {client.name}
            </div>
          ))}
        </Marquee>

        {/* Left gradient overlay */}
        <div className="absolute top-0 left-0 z-10 w-16 h-full pointer-events-none bg-gradient-to-r from-background to-transparent" />

        {/* Right gradient overlay */}
        <div className="absolute top-0 right-0 z-10 w-16 h-full pointer-events-none bg-gradient-to-l from-background to-transparent" />
      </div>
    </Section>
  );
}
