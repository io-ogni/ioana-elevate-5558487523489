import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card border border-border shadow-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for interim product leadership roles
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ship Products That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Actually Matter
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Interim Product Lead with 19 years of experience turning complex challenges 
              into valuable products. Hit the ground running, deliver impact in days.
            </p>
            
            <div className="flex justify-center">
              <Button variant="hero" size="lg" className="group" onClick={onContactClick}>
                Let's Talk About Your Product
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto lg:mx-0">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">19</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">12</div>
            <div className="text-sm text-muted-foreground mt-1">Years PM</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">12+</div>
            <div className="text-sm text-muted-foreground mt-1">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
