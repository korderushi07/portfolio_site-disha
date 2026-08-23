import { useMemo } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { NAV_ITEMS } from "./data/content.js";
import useActiveSection from "./hooks/useActiveSection.js";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function App() {
  const ids = useMemo(() => SECTION_IDS, []);
  const activeId = useActiveSection(ids, "hero");

  return (
    <>
      <Header activeId={activeId} />
      <main>
        <Hero />
        <Works />
        <Services />
        <About />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
