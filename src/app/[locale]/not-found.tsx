"use client";

import NotFoundSection from "@/components/sections/not-found";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function NotFound() {
  const t = useTranslations();
  useEffect(() => {
    document.title = t("notFound.title");
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", t("notFound.description"));
  }, [t]);
  return <NotFoundSection />;
}
