import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Ioana Ognibeni
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#experience" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="/articles" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Articles
          </a>
          <Button variant="hero">
            Let's Talk
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
