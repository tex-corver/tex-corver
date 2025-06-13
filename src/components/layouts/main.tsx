import React, { Fragment } from "react";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { getTranslations } from "next-intl/server";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const t = await getTranslations();
  return (
    <Fragment>
      <Header
        appName={t("appName")}
        items={[
          { href: "/", label: t("common.home") },
          { href: "/#our-vision", label: t("common.ourVision") },
          { href: "/#our-products", label: t("common.ourProducts") },
          { href: "/#our-clients", label: t("common.ourClients") },
          { href: "/#board-of-directors", label: t("common.boardOfDirectors") },
          { href: "/#team-members", label: t("common.teamMembers") },
        ]}
      />
      {children}
      <Footer />
    </Fragment>
  );
}
