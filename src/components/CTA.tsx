import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const CTA = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[hsl(239_84%_12%)]">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(239_84%_67%/0.15)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(36_90%_45%/0.1)] rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          Ready to Ship{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Value?
          </span>
        </h2>
        
        <p className="text-xl text-[hsl(216_20%_75%)] mb-10 max-w-2xl mx-auto">
          Let's talk about your product challenges and how I can help you deliver 
          value faster. Available for interim roles and strategic consulting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="group bg-white text-[hsl(239_84%_12%)] hover:bg-white/90 font-semibold" onClick={onContactClick}>
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="accent" size="lg" className="text-white" asChild>
            <a href="https://www.linkedin.com/in/ioanamarinescu/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
        
        <div className="text-sm text-[hsl(216_20%_60%)]">
          Based in Germany • Remote-first
        </div>
      </div>
    </section>
  );
};

export default CTA;
