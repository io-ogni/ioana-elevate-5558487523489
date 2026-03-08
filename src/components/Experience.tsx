import { Card } from "@/components/ui/card";
import { Building2, Briefcase, Target } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    stat: "12 Years",
    title: "Product Management",
    description: "Built and delivered products across the full company lifecycle—from 0→1 startups (Connecta) to scaling companies (Xentral) and multi-billion-dollar organizations (LogMeIn).",
    tags: ["SaaS", "B2B", "B2C"],
    tagSuffix: "Web & Mobile",
  },
  {
    icon: Briefcase,
    stat: "7 Years",
    title: "Project Management",
    description: "Led multi-million-dollar projects with full budget responsibility. Teams of up to 20 members across continents. ERP & E-Commerce implementations.",
  },
  {
    icon: Target,
    stat: "12+ Industries",
    title: "Domain Expertise",
    description: "",
    bullets: ["ERP", "Retail", "E-Commerce", "IoT", "Online Counselling", "Video Conferencing", "Domains & Hosting", "HR, etc."],
  },
];

const companies = [
  "LogMeIn",
  "Xentral",
  "1&1",
  "Nestlé",
  "Sonae Group",
];

const Experience = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nearly two decades of turning complexity into clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <exp.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {exp.stat}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {exp.title}
              </h3>
              
              {exp.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              )}
              {exp.bullets && (
                <ul className="text-muted-foreground leading-relaxed space-y-1">
                  {exp.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg border border-border bg-card/50 text-lg font-semibold text-foreground/50 hover:text-primary hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
