import { Card } from "@/components/ui/card";
import { Rocket, Lightbulb, Users } from "lucide-react";
import profileImg from "@/assets/ioana-profile.jpg";

const services = [
  {
    icon: Rocket,
    title: "Interim Product Manager",
    description: "Need an experienced PM to hit the ground running? I deliver value in days, not months. Whether covering maternity leave or filling a gap, I bring immediate impact with product vision, discovery, and agile delivery.",
    highlights: ["Product vision & strategy", "Discovery & validation", "Agile delivery", "Team enablement"],
  },
  {
    icon: Lightbulb,
    title: "Product Vision & Strategy",
    description: "1-2 day intensive workshops to diagnose your current state, define strategic hypotheses, and chart a clear path forward. Leave with actionable insights and a roadmap that guides tough decisions.",
    highlights: ["Competitive analysis", "Strategic positioning", "Roadmap definition", "Stakeholder alignment"],
  },
  {
    icon: Users,
    title: "Product Team Development",
    description: "I teach PMs how to do real discovery, connect their work to strategy, build product operations that work, and lead cross-functional teams effectively. Hands-on, not theoretical.",
    highlights: ["Discovery & product thinking", "Cross-craft collaboration", "Team topologies", "Agile mindset, adapted to your org"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Intro with photo */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 animate-fade-in">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-elegant shrink-0">
            <img
              src={profileImg}
              alt="Ioana Ognibeni"
              className="w-full h-full object-cover object-top saturate-[1.1]"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How Can I{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Support You?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Hi, I'm Ioana — an experienced product person with a passion for people and psychology. 
              I am committed to delivering value through ethical products while creating efficient work 
              environments based on respect, curiosity, and a healthy feedback culture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-scale-in border-border bg-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
