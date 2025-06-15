import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";

export default function TeamMembers() {
  const t = useTranslations();
  const members = [
    {
      name: "Member 1",
      role: "Role 1",
      image: "/placeholder.svg",
      description: "Description 1",
    },
    {
      name: "Member 2",
      role: "Role 2",
      image: "/placeholder.svg",
      description: "Description 2",
    },
    {
      name: "Member 3",
      role: "Role 3",
      image: "/placeholder.svg",
      description: "Description 3",
    },
    {
      name: "Member 4",
      role: "Role 4",
      image: "/placeholder.svg",
      description: "Description 4",
    },
  ];
  return (
    <Section id="team-members">
      <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold">{t("teamMembers.title")}</h1>
        <p className="max-w-2xl px-4 text-lg text-center text-muted-foreground">
          {t("teamMembers.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-8 mt-12 md:grid-cols-2 lg:grid-cols-4 md:text-left">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-4 py-4 text-center border rounded-md shadow-md md:text-left"
          >
            <h2 className="px-4 text-lg font-bold">{member.name}</h2>
            <p className="px-4 text-sm text-muted-foreground">{member.role}</p>
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="object-cover w-full h-48"
            />
            <p className="px-4 text-sm text-muted-foreground">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
