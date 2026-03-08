import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, FileText } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
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
                    <a href="mailto:contact@ioana-ognibeni.eu" className="text-primary hover:underline">
                      contact@ioana-ognibeni.eu
                    </a>
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
    </div>
  );
};

export default Impressum;
