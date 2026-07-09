"use client";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MouseGlow from "@/components/ui/MouseGlow";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TechnologyStack from "@/components/sections/TechnologyStack";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#030712]">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <TechnologyStack />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
