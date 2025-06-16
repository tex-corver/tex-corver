import { useTranslations } from "next-intl";
import Image from "next/image";
import Section from "../layouts/section";

export default function BoardOfDirectors() {
  const t = useTranslations();
  const directors = [
    {
      name: "Nguyễn Văn A",
      position: "Chủ tịch HĐQT",
      description:
        "Hơn 20 năm kinh nghiệm trong lĩnh vực công nghệ và quản trị doanh nghiệp.",
      image: "/placeholder.svg",
    },
    {
      name: "Trần Thị B",
      position: "Thành viên HĐQT",
      description:
        "Chuyên gia chiến lược phát triển và đầu tư, từng làm việc tại nhiều tập đoàn lớn.",
      image: "/placeholder.svg",
    },
    {
      name: "Lê Văn C",
      position: "Thành viên HĐQT",
      description:
        "Kinh nghiệm sâu rộng về tài chính và vận hành doanh nghiệp.",
      image: "/placeholder.svg",
    },
  ];
  return (
    <Section id="board-of-directors" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("boardOfDirectors.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("boardOfDirectors.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {directors.map((director, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-2xl border p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-28 h-28 mb-6">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover rounded-full border-4 border-primary/30 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">{director.name}</h3>
              <div className="text-primary font-semibold mb-2">
                {director.position}
              </div>
              <p className="text-muted-foreground text-base">
                {director.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
