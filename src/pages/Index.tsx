import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";

import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Research from "@/components/Research";
import CTFs from "@/components/CTFs";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Services />
        <Projects />
        <Achievements />
        
        <CTFs />
        <Research />
        <Extracurricular />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
