import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
