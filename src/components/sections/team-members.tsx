import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks?: Record<"linkedin" | "twitter" | "github", string>;
}

export default function TeamMembers() {
  const t = useTranslations();
  const members: TeamMember[] = [
    {
      name: "Member 1",
      role: "Role 1",
      image: "/placeholder.svg",
      description: "Description 1",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/member1",
        twitter: "https://twitter.com/member1",
        github: "https://github.com/member1",
      },
    },
    {
      name: "Member 2",
      role: "Role 2",
      image: "/placeholder.svg",
      description: "Description 2",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/member2",
        twitter: "https://twitter.com/member2",
        github: "https://github.com/member2",
      },
    },
    {
      name: "Member 3",
      role: "Role 3",
      image: "/placeholder.svg",
      description: "Description 3",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/member3",
        twitter: "https://twitter.com/member3",
        github: "https://github.com/member3",
      },
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
      <h1 className="font-bold text-2xl md:text-4xl leading-tight">
        {t("teamMembers.title")}
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 md:mt-12 px-8 md:text-left">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-4 shadow-md py-4 border rounded-md md:text-left text-center"
          >
            <h2 className="px-4 font-bold text-base md:text-lg">{member.name}</h2>
            <p className="px-4 text-muted-foreground text-sm md:text-base">{member.role}</p>
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="w-full h-48 md:h-64 object-cover"
            />
            <p className="px-4 text-muted-foreground text-sm md:text-base">
              {member.description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 px-4">
              {member.socialLinks?.linkedin && (
                <Link href={member.socialLinks.linkedin}>
                  <LinkedinIcon className="w-4 md:w-6 h-4 md:h-6" />
                </Link>
              )}
              {member.socialLinks?.twitter && (
                <Link href={member.socialLinks.twitter}>
                  <TwitterIcon className="w-4 md:w-6 h-4 md:h-6" />
                </Link>
              )}
              {member.socialLinks?.github && (
                <Link href={member.socialLinks.github}>
                  <GithubIcon className="w-4 md:w-6 h-4 md:h-6" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
