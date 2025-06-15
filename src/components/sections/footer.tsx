import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";
import { MailIcon } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer>
      <Section
        id="footer"
        className="flex flex-col items-center justify-center w-full gap-4"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-cover w-16 h-16"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex flex-row items-center gap-2">
              <MailIcon className="w-4 h-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                {t("footer.contact.email", {
                  email: "test@test.com",
                })}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
           
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            {t.rich("footer.copyright", {
              appName: t("appName"),
              span: (chunks) => (
                <span className="text-transparent bg-gradient-to-r from-primary to-blue-500 dark:to-blue-700 bg-clip-text">
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
