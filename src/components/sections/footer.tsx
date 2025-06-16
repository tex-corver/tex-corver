import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";
import { MailIcon, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-background border-t pt-12 pb-6 mt-24">
      <Section id="footer" className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-cover rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                {t("appName")}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {t("footer.quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("common.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-products"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.ourProducts")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-vision"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.ourVision")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-clients"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.ourClients")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#board-of-directors"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.boardOfDirectors")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#team-members"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.teamMembers")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <MailIcon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                test@test.com
              </span>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* About/Extra */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              {t("footer.aboutTitle")}
            </h4>
            <p className="text-sm text-muted-foreground">
              {t("footer.aboutDesc")}
            </p>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          {t.rich("footer.copyright", {
            appName: t("appName"),
            span: (chunks) => (
              <span className="text-transparent bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 bg-clip-text">
                {chunks}
              </span>
            ),
          })}
        </div>
      </Section>
    </footer>
  );
}
