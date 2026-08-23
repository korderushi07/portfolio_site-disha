import { useMemo } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Extracurriculars from "./components/Extracurriculars.jsx";
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
        <Services />
        <About />
        <Experience />
        <Achievements />
        <Extracurriculars />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
