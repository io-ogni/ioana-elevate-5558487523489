import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ioana is a rock star Product Manager. Her passion for product management and drive to make things happen impressed me. She knows what it takes to create a meaningful product from scratch. The top five characteristics I perceive are empathic, reliable, problem-solver, value-driven, and brave.",
    author: "David Pereira",
    role: "CPO, Product Coach, Keynote Speaker",
    image: "", // Add image URL later
  },
  {
    quote: "Ioana is wonderful to work with, and has unique expertise in our domain. She has a very strong work ethic and unparalleled analytical and problem solving skills. She has the vision to see the benefits and the passion to turn that into a competitive advantage.",
    author: "Jasa Zelmanovic",
    role: "UX Design Manager, LogMeIn",
    image: "", // Add image URL later
  },
  {
    quote: "With her extensive experience in digital product management, Ioana brought a wealth of knowledge to our projects. She possesses a remarkable level of empathy and compassion. Her ability to navigate different personalities within the team created a harmonious atmosphere and contributed to our success.",
    author: "Bernhard Herzog-Obereder",
    role: "CTO",
    image: "", // Add image URL later
  },
  {
    quote: "Add testimonial quote here.",
    author: "Name",
    role: "Role, Company",
    image: "", // Add image URL later
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:shadow-card transition-all duration-300 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4 flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
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
