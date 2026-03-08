import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Talk</DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-4">
            Whether to discuss a possible collaboration or to exchange ideas around product management and coaching – you can always find me at:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-2">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:contact@ioana-ognibeni.eu">
              <Mail className="w-5 h-5" />
              contact@ioana-ognibeni.eu
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/ioana-ognibeni/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground pt-2">
          Looking forward to hearing from you!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
