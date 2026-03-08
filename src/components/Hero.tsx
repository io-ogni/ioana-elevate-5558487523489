import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/ioana-profile.jpg";

const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
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
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Interim Product Lead with 19 years of experience turning complex challenges 
              into valuable products. Hit the ground running, deliver impact in days.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" onClick={onContactClick}>
                Let's Talk About Your Product
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Profile photo — side, not circle */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-primary opacity-30 blur-xl rounded-2xl group-hover:opacity-50 transition-opacity" />
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={profileImg}
                alt="Ioana Ognibeni"
                className="w-full h-full object-cover saturate-[1.1]"
              />
            </div>
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
