import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/io-logo.png";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "AI Projects", href: "/#ai-experience" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Articles", href: "/articles" },
];

const Header = ({ onContactClick }: { onContactClick?: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Ioana Ognibeni logo" className="w-8 h-8 rounded-lg" />
          <span className="text-xl font-bold text-[#1E293B]">
            Ioana Ognibeni
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <Button variant="hero" onClick={onContactClick}>
            Let's Talk
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="right" className="w-72 pt-12">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="hero"
                className="mt-2"
                onClick={() => {
                  setMobileOpen(false);
                  onContactClick?.();
                }}
              >
                Let's Talk
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
