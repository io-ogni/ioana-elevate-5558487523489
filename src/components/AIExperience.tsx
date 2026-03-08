import { Card } from "@/components/ui/card";
import { FlaskConical, GraduationCap, Flame, Network, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: FlaskConical,
    title: "AI Quality Lab",
    description:
      "A hands-on learning platform for PMs to gain practical experience with AI model evaluations, prompt testing, LLM-as-a-judge scoring, and error analysis.",
    link: "https://ai-quality-lab.replit.app/",
  },
  {
    icon: GraduationCap,
    title: "C1 German Prep App",
    description:
      "A German C1 exam prep app with 560+ exercises, AI-powered writing evaluation, and telc-format practice. Built for my own exam — now open for others.",
    link: "https://c1-german-prep.lovable.app/",
  },
  {
    icon: Flame,
    title: "Write & Burn Sanctuary",
    description:
      "A zero-trace writing app with 45+ client-side privacy protections. No storage, no cookies, no persistence — everything lives in memory only. Features CSP network isolation, DevTools detection, clipboard blocking, and automatic memory wiping. Nothing leaves the browser.",
    link: "https://write-and-burn-sanctuary.lovable.app/",
  },
  {
    icon: Network,
    title: "Agentic AI Platform — Automotive",
    description:
      "Defined and prototyped an agentic AI product architecture — a library of specialized agents and tool integrations for automotive workflows. From market research through product definition to working prototype.",
    link: null,
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(322,85%,50%)] hover:underline"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center text-sm text-muted-foreground italic">
                  Case study on request
                </span>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
