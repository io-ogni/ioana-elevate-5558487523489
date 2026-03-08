import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Impressum</h1>

            <h3>According to § 5 TMG</h3>
            <p>
              Ioana Ognibeni Consulting &amp; Coaching
              <br />
              Prof.-Messerschmitt-Str. 21,
              <br />
              86159 Augsburg
              <br />
              Germany
            </p>

            <h3>Contact</h3>
            <p>
              Ioana (Marinescu) Ognibeni
              <br />
              Email: contact@ioana-ognibeni.eu
            </p>

            <h3>Tax ID</h3>
            <p>
              Sales tax identification number according to § 27 a sales tax law: DE358282685
            </p>

            <h3>Consumer Dispute Resolution / Universal Arbitration Board</h3>
            <p>
              We are not willing or obliged to participate in dispute settlement procedures before a consumer arbitration board.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
