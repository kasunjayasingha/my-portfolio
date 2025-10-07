import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Impact from "@/components/home/Impact";
import Featured from "@/components/home/Featured";
import Products from "@/components/home/Products";
import Achievements from "@/components/home/Achievements";
import Reasons from "@/components/home/Reasons";
import Testimonials from "@/components/home/Testimonials";
import Commitments from "@/components/home/Commitments";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Featured />
        <Products />
        <Services />
        <Projects />
        <Achievements />
        <Reasons />
        <Testimonials />
        <Commitments />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
