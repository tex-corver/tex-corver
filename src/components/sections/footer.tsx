import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Logo from "../ui/logo";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-blue-500/50 dark:bg-blue-700/50 bg-gradient-to-t from-background/0 via-background/50 to-background">
      <Section
        id="footer"
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <div className="gap-4 md:gap-12 grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Logo
                width={100}
                height={100}
                className="w-16 h-16 object-cover"
              />
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              {t("footer.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <MailIcon className="w-4 h-4 text-primary" />
              <p className="text-muted-foreground text-sm md:text-base">
                {t("footer.contact.email", {
                  email: "info@urieljsc.com",
                })}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-primary" />
              <p className="text-muted-foreground text-sm md:text-base">
                {t("footer.contact.phone", {
                  phone: "+84 979100081",
                })}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <p className="text-muted-foreground text-sm md:text-base">
                {t("footer.contact.address", {
                  address: "123 Main St, Anytown, USA",
                })}
              </p>
            </div>
            {/* <h4 className="mb-3 font-semibold text-sm md:text-base">
              {t("footer.quickLinks")}
            </h4>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-2 text-muted-foreground">
              <Link
                href="/"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.home")}
              </Link>
              <Link
                href="/#our-products"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.ourProducts")}
              </Link>
              <Link
                href="/#our-vision"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.ourVision")}
              </Link>
              <Link
                href="/#our-clients"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.ourClients")}
              </Link>
              <Link
                href="/#board-of-directors"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.boardOfDirectors")}
              </Link>
              <Link
                href="/#team-members"
                className="hover:text-primary text-sm md:text-base hover:underline transition-colors"
              >
                {t("common.teamMembers")}
              </Link> 
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-8 w-full text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            {t.rich("footer.copyright", {
              appName: t("appName"),
              span: (chunks) => (
                <span className="bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 text-transparent">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>
      </Section>
    </footer>
  );
}
