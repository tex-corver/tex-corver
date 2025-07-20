import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  image: string;
  awards: string[];
}

export default function TeamMembers() {
  const t = useTranslations();
  const members: TeamMember[] = t.raw(
    "teamMembers.members"
  ) as unknown as TeamMember[];
  return (
    <Section id="team-members">
      <h1 className="font-bold text-2xl md:text-4xl leading-tight">
        {t("teamMembers.title")}
      </h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12 px-2 md:px-4 md:text-left">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 shadow-md py-4 border rounded-md md:text-left text-center"
          >
            <h2 className="px-4 font-bold text-base md:text-lg">
              {member.name}
            </h2>
            <Image
              src={member.image}
              alt={member.name}
              width={1000}
              height={1000}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-md self-center my-4"
            />

            {/* Awards section */}
            <div className="px-4 flex flex-wrap justify-center md:justify-start gap-2 w-full">
              {member.awards.map((award) => (
                <p
                  key={award}
                  className="border rounded-md px-2 md:px-3 py-2 bg-muted text-wrap text-start w-full"
                >
                  <StarIcon className="w-4 md:w-6 h-4 md:h-6 text-yellow-500 shrink-0 inline-block mr-2" />
                  {award}
                </p>
              ))}
            </div>

            {/* <p className="px-4 text-muted-foreground text-sm md:text-base">
              {member.description}
            </p> */}
            {/* <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 px-4">
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
            </div> */}
          </div>
        ))}
      </div>
    </Section>
  );
}
