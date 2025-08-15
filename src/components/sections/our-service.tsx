import { useTranslations } from "next-intl";
import Section from "../layouts/section";
import { Briefcase, Users } from "lucide-react";

export default function OurService() {
  const t = useTranslations();
  return (
    <Section id="our-services">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <h1 className="font-bold text-2xl md:text-4xl">
          {t("ourService.title")}
        </h1>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Consulting Service */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-bold text-2xl md:text-3xl text-primary">
                  {t("ourService.consulting.title")}
                </h2>
              </div>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("ourService.consulting.description")}
              </p>
            </div>
          </div>

          {/* Outsourcing Service */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-bold text-2xl md:text-3xl text-primary">
                  {t("ourService.outsourcing.title")}
                </h2>
              </div>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("ourService.outsourcing.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 