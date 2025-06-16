"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function HighlightedProducts() {
  const t = useTranslations();
  const products = [
    {
      title: "Sản phẩm 1",
      description: "Mô tả sản phẩm 1",
      image: "/placeholder.svg",
    },
    {
      title: "Sản phẩm 2",
      description: "Mô tả sản phẩm 2",
      image: "/placeholder.svg",
    },
    {
      title: "Sản phẩm 3",
      description: "Mô tả sản phẩm 3",
      image: "/placeholder.svg",
    },
  ];

  return (
    <Section id="highlighted-products" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ourProducts.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("ourProducts.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button variant="ghost" className="group-hover:bg-primary/10">
                  Xem chi tiết
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </Section>
  );
}
