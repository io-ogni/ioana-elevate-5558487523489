import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-5 h-5 text-accent shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-muted-foreground flex-1">
          This website uses essential cookies to ensure it functions properly. No tracking or marketing cookies are used.{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Learn more
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="ghost" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
