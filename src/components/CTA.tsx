import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const CTA = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Ship Products{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            That Matter?
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's talk about your product challenges and how I can help you deliver 
          value faster. Available for interim roles and strategic consulting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group" onClick={onContactClick}>
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/ioana-ognibeni/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Based in Germany • Remote-first
        </div>
      </div>
    </section>
  );
};

export default CTA;
