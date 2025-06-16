"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";
import Marquee from "react-fast-marquee";

export default function OurClients() {
  const t = useTranslations();
  const clients = [
    {
      name: "Khách hàng 1",
      logo: "/placeholder.svg",
      description: "Mô tả khách hàng 1",
    },
    {
      name: "Khách hàng 2",
      logo: "/placeholder.svg",
      description: "Mô tả khách hàng 2",
    },
    {
      name: "Khách hàng 3",
      logo: "/placeholder.svg",
      description: "Mô tả khách hàng 3",
    },
    {
      name: "Khách hàng 4",
      logo: "/placeholder.svg",
      description: "Mô tả khách hàng 4",
    },
  ];
  const partnerLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <Section id="our-clients" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ourClients.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("ourClients.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group bg-card rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-center">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee logo chạy ngang */}
        <div className="py-8 relative">
          {/* Left gradient overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          {/* Right gradient overlay */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-background to-transparent" />
          <Marquee gradient={false} speed={50} pauseOnHover>
            {partnerLogos.map((logo, idx) => (
              <div key={idx} className="mx-12 flex items-center">
                <Image
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
}
