import Services from "@/components/shared/Services";
import "./globals.css"
import Hero from "@/components/shared/Hero";
import Contact from "@/components/shared/Contact";
import About from "@/components/shared/About";

export default function Home() {
  return (
    <section>
      <Hero/>
      <Services/>
      <Contact/>
      <About/>
    </section>
  );
}
