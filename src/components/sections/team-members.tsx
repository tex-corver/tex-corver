import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";

export default function TeamMembers() {
  const t = useTranslations();
  const members = [
    {
      name: "Nguyễn Văn D",
      role: "Frontend Developer",
      image: "/placeholder.svg",
      description: "Chuyên phát triển UI/UX và ReactJS.",
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Trần Thị E",
      role: "Backend Developer",
      image: "/placeholder.svg",
      description: "Kinh nghiệm NodeJS, API, Database.",
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Lê Văn F",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
      description: "Thiết kế giao diện và trải nghiệm người dùng.",
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Phạm Thị G",
      role: "Tester",
      image: "/placeholder.svg",
      description: "Đảm bảo chất lượng sản phẩm.",
      linkedin: "#",
      facebook: "#",
    },
  ];
  return (
    <Section id="team-members" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("teamMembers.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("teamMembers.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl border p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-primary/30 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-primary font-semibold mb-2">
                {member.role}
              </div>
              <p className="text-muted-foreground text-base mb-4">
                {member.description}
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
