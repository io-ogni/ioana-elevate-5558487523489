import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

            <div className="space-y-10 text-foreground/90 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold mb-3">Who we are</h2>
                <p className="text-muted-foreground">
                  This website is operated by <strong className="text-foreground">Ioana Ognibeni Consulting & Coaching</strong>, based in Augsburg, Germany. You can reach us at{" "}
                  <a href="mailto:contact@ioana-ognibeni.eu" className="text-primary hover:underline">
                    contact@ioana-ognibeni.eu
                  </a>.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">What data we collect</h2>
                <p className="text-muted-foreground mb-3">
                  This is a static website. We do not use analytics, tracking pixels, or marketing cookies. The only data stored locally is your cookie consent preference.
                </p>
                <p className="text-muted-foreground">
                  If you contact us via email, we will process your name and email address solely to respond to your inquiry.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Embedded content</h2>
                <p className="text-muted-foreground">
                  Some pages may include embedded content (e.g. LinkedIn profiles, Medium articles). Embedded content from other websites behaves as if you visited those websites directly — they may collect data, use cookies, and track your interaction.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Your rights</h2>
                <p className="text-muted-foreground">
                  Under GDPR, you have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at{" "}
                  <a href="mailto:contact@ioana-ognibeni.eu" className="text-primary hover:underline">
                    contact@ioana-ognibeni.eu
                  </a>.
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

export default PrivacyPolicy;
