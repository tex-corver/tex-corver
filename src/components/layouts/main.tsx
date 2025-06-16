import { getLocale, getTranslations } from "next-intl/server";
import React from "react";
import AppSidebar from "../app-sidebar";
import { LangSwitchItem } from "../lang-switch";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { ThemeSwitchItem } from "../theme-switch";
import { SidebarProvider } from "../ui/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const locale = await getLocale();
  const t = await getTranslations();
  const navItems = [
    { href: "/", label: t("common.home") },
    { href: "/#our-vision", label: t("common.ourVision") },
    { href: "/#our-products", label: t("common.ourProducts") },
    { href: "/#our-clients", label: t("common.ourClients") },
    { href: "/#board-of-directors", label: t("common.boardOfDirectors") },
    { href: "/#team-members", label: t("common.teamMembers") },
  ];
  const themes: ThemeSwitchItem[] = [
    { label: t("theme.light"), value: "light" },
    { label: t("theme.dark"), value: "dark" },
    { label: t("theme.system"), value: "system" },
  ];
  const langs: LangSwitchItem[] = [
    { label: t("lang.en"), value: "en" },
    { label: t("lang.vn"), value: "vn" },
  ];
  const appName = t("appName");
  return (
    <SidebarProvider>
      <main className="flex flex-col flex-1 min-h-screen">
        <AppSidebar
          items={navItems}
          themes={themes}
          langs={langs}
          locale={locale}
          appName={appName}
        />
        <Header items={navItems} themes={themes} langs={langs} />
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
