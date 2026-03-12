import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card border border-border shadow-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for interim product roles
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Build Products{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 -skew-y-1 bg-[#DA870C]/30 rounded-sm scale-x-105 scale-y-110" aria-hidden="true" />
                <span className="relative text-foreground font-normal" style={{ fontFamily: "'Pacifico', cursive" }}>
                  Worth
                </span>
              </span>
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 -skew-y-1 bg-[#DA870C]/30 rounded-sm scale-x-105 scale-y-110" aria-hidden="true" />
                <span className="relative text-foreground font-normal" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Building
                </span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Interim Product Lead who turns slow and stuck into clarity and speed. Hit the ground running, deliver impact from day one. 19 years across 12+ industries.
            </p>
            
            <div className="flex justify-center">
              <Button variant="hero" size="lg" className="group" onClick={onContactClick}>
                Let's Talk About Your Product
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
        </div>
        
        <div className="mt-16 grid grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">19</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">12</div>
            <div className="text-sm text-muted-foreground mt-1"><div className="text-sm text-muted-foreground mt-1">Years Product Mgmt</div></div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">7</div>
            <div className="text-sm text-muted-foreground mt-1">Years Project Mgmt</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">12+</div>
            <div className="text-sm text-muted-foreground mt-1">Industries</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
