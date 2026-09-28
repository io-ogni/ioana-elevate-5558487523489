import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, FileText } from "lucide-react";
import { Email } from "@/components/Email";

const Impressum = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header onContactClick={() => setContactOpen(true)} />
      <main>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Impressum</h1>
            <p className="text-muted-foreground mb-12">Legal disclosure according to § 5 TMG</p>

            <div className="space-y-10">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Address</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ioana Ognibeni Consulting & Coaching
                    <br />
                    Prof.-Messerschmitt-Str. 21
                    <br />
                    86159 Augsburg, Germany
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Contact</h2>
                  <p className="text-muted-foreground">
                    Ioana (Marinescu) Ognibeni
                    <br />
                    <Email className="text-primary" />
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Tax ID</h2>
                  <p className="text-muted-foreground">
                    Sales tax identification number according to § 27a UStG:
                    <br />
                    <span className="font-mono text-foreground">DE358282685</span>
                  </p>
                </div>
              </div>

              <Separator />

              <div className="pl-9">
                <h2 className="text-lg font-semibold mb-2">Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  We are not willing or obliged to participate in dispute settlement procedures before a consumer arbitration board.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Impressum;
