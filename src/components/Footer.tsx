import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Ioana Ognibeni
            </div>
            <p className="text-sm text-muted-foreground">
              Interim Product Lead • Coach • Mentor
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://ioana-ognibeni.eu/articles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Articles
            </a>
            <a
              href="https://www.linkedin.com/in/ioana-ognibeni/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@ioana-ognibeni.eu"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ioana Ognibeni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
