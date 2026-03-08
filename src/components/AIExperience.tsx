import { Card } from "@/components/ui/card";
import { Bot, Car, Brain, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI Quality Lab",
    description:
      "A hands-on learning platform for PMs to gain practical experience with AI evaluations and error analysis.",
    link: "https://ai-quality-lab.replit.app/",
  },
  {
    icon: Bot,
    title: "Write & Burn Sanctuary",
    description:
      "A privacy-first journaling mini app designed as the \"smallest unit\" of a self-therapy experience.",
    link: "https://write-and-burn-sanctuary.lovable.app/",
  },
  {
    icon: Car,
    title: "Automotive AI × IoT Product",
    description:
      "Defined a new agentic-AI meets IoT product: from market research through product definition to a working prototype, ready for customer validation.",
    link: null,
  },
];

const AIExperience = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            AI-Augmented{" "}
            <span className="bg-gradient-ai bg-clip-text text-transparent">
              Product Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building with AI daily — custom agents, rapid prototyping, research
            synthesis. Here are some recent solo-projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <project.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExperience;
