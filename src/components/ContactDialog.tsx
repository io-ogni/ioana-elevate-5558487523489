import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactContent = () => (
  <>
    <div className="flex flex-col gap-4 pt-2 px-4 sm:px-0">
      <Button variant="outline" size="lg" asChild>
        <a href="mailto:contact@ioana-ognibeni.eu">
          <Mail className="w-5 h-5" />
          contact@ioana-ognibeni.eu
        </a>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <a href="https://www.linkedin.com/in/ioanamarinescu/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5" />
          Connect on LinkedIn
        </a>
      </Button>
    </div>
    <p className="text-sm text-muted-foreground pt-2 px-4 sm:px-0 pb-4 sm:pb-0">
      Looking forward to hearing from you!
    </p>
  </>
);

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Let's Talk</DrawerTitle>
            <DrawerDescription className="text-base leading-relaxed">
              Whether to discuss a possible collaboration or to exchange ideas around product management and coaching – you can always find me at:
            </DrawerDescription>
          </DrawerHeader>
          <ContactContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Talk</DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-4">
            Whether to discuss a possible collaboration or to exchange ideas around product management and coaching – you can always find me at:
          </DialogDescription>
        </DialogHeader>
        <ContactContent />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
