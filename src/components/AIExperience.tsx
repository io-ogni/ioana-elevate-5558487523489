import { Card } from "@/components/ui/card";
import { FlaskConical, GraduationCap, Flame, Network, Wrench, ExternalLink, type LucideIcon } from "lucide-react";

type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string | null;
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    icon: FlaskConical,
    title: "AI Quality Lab",
    description:
      "A hands-on learning platform for PMs to gain practical experience with AI model evaluations, prompt testing, LLM-as-a-judge scoring, and error analysis.",
    link: "https://ai-quality-lab.ioana-ognibeni.eu/",
  },
  {
    icon: GraduationCap,
    title: "C1 German Prep App",
    description:
      "A German C1 exam prep app with 560+ exercises, AI-powered writing evaluation, and telc-format practice. Built for my own exam — now open for others.",
    link: "https://c1-deutsch.ioana-ognibeni.eu/",
  },
  {
    icon: Flame,
    title: "Write & Burn Sanctuary",
    description:
      "A zero-trace writing app with 45+ client-side privacy protections. No storage, no cookies, no persistence — everything lives in memory only. Features CSP network isolation, DevTools detection, clipboard blocking, and automatic memory wiping. Nothing leaves the browser.",
    link: "https://write-and-burn.ioana-ognibeni.eu/",
  },
  {
    icon: Network,
    title: "Agentic AI Platform — Automotive",
    description:
      "Defined and prototyped an agentic AI product architecture — a library of specialized agents and tool integrations for automotive workflows. From market research through product definition to working prototype.",
    link: null,
  },
  {
    icon: Wrench,
    title: "Tools",
    description:
      "Small, fully private, no-ads, in-browser tools I built — because many use cases don't need your data to leave your computer.",
    links: [
      { label: "Markdown → PDF & Word", url: "https://markdown-converter.ioana-ognibeni.eu" },
      { label: "M4A → MP3", url: "https://m4a-converter.ioana-ognibeni.eu" },
    ],
  },
];

const AIExperience = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-cool">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              AI-Augmented
            </span>{" "}
            Product Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building with AI daily — custom agents, rapid prototyping, research
            synthesis. Here are some recent solo-projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-1rem)]">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-[hsl(322,85%,50%)]/50 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[hsl(322,85%,50%)]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(322,85%,50%)]/20 transition-all duration-300">
                <project.icon className="w-7 h-7 text-[hsl(322,85%,50%)]" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {project.links ? (
                <div className="flex flex-col gap-2">
                  {project.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(322,85%,50%)] hover:underline"
                    >
                      {l.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              ) : project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(322,85%,50%)] hover:underline"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
