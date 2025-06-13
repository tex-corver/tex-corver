import Container from "@/components/layouts/container";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return {
    title: t("notFound.title"),
    description: t("notFound.description"),
  };
}

export default function NotFound() {
  return (
    <Container>
      <h1>Not Found</h1>
    </Container>
  );
}
