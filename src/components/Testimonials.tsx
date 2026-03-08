import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import profileImg from "@/assets/ioana-profile.jpg";

const testimonials = [
  {
    quote: "Ioana is a rock star Product Manager. Her passion for product management and drive to make things happen impressed me. She knows what it takes to create a meaningful product from scratch. The top five characteristics I perceive are empathic, reliable, problem-solver, value-driven, and brave.",
    author: "David Pereira",
    role: "CPO, Product Coach, Keynote Speaker",
    image: "",
  },
  {
    quote: "Ioana is wonderful to work with, and has unique expertise in our domain. She has a very strong work ethic and unparalleled analytical and problem solving skills. She has the vision to see the benefits and the passion to turn that into a competitive advantage.",
    author: "Jasa Zelmanovic",
    role: "UX Design Manager, LogMeIn",
    image: "",
  },
  {
    quote: "With her extensive experience in digital product management, Ioana brought a wealth of knowledge to our projects. She possesses a remarkable level of empathy and compassion. Her ability to navigate different personalities within the team created a harmonious atmosphere and contributed to our success.",
    author: "Bernhard Herzog-Obereder",
    role: "CTO",
    image: "",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Leaders{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by product leaders and executives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured card with photo */}
          <Card className="md:row-span-2 p-0 overflow-hidden bg-card border-border shadow-card animate-fade-in-up flex flex-col">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={profileImg}
                alt="Ioana Ognibeni"
                className="w-full h-full object-cover object-top saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-8 flex flex-col justify-end -mt-12 relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ioana Ognibeni</h3>
              <p className="text-primary font-medium mb-3">Interim Product Lead</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                19 years turning complex challenges into products that deliver real value. 
                I hit the ground running so your team ships faster.
              </p>
            </div>
          </Card>

          {/* Testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:shadow-card transition-all duration-300 animate-fade-in-up relative flex flex-col justify-between"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div>
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic text-sm">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-border pt-4 flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
