import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <h2>Who we are</h2>
            <p>
              Our website address is: http://ioana-marinescu.eu.
            </p>
            <p>
              Ioana Ognibeni (Marinescu) is a Product Leader and Coach, providing services under Ioana Ognibeni Consulting &amp; Coaching.
            </p>

            <h2>Embedded content from other websites</h2>
            <p>
              Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>

            <h2>How long we retain your data</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
            </p>

            <h2>What rights you have over your data</h2>
            <p>
              You can request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>

            <h2>Where your data is sent</h2>
            <p>
              Visitor comments may be checked through an automated spam detection service.
            </p>

            <hr />

            <h2>Photo credit</h2>
            <p>
              All photos on this website are either under{" "}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">
                Creative Commons CC0 license
              </a>{" "}
              or personal creation.
            </p>
            <p>
              The CC0 photos have been downloaded from:{" "}
              <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
                https://unsplash.com/
              </a>
            </p>
            <p>
              All illustrations are royalty free and customizable, provided by https://illustation.io/license.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
