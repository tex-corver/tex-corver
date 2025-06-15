import { useRouter } from "@/i18n/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Section from "../layouts/section";

export default function NotFound() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Section className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <Player
        src="/not-found.json"
        background="transparent"
        speed={0.5}
        loop
        autoplay
        className="w-full max-w-96"
      />
      <h1 className="text-2xl font-bold">{t("notFound.title")}</h1>
      <p className="text-sm text-gray-500">{t("notFound.description")}</p>
      <Button variant="outline" onClick={() => router.push("/")}>
        {t("common.home")}
      </Button>
    </Section>
  );
}
