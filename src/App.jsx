import { useMemo } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProofStrip from "./components/ProofStrip.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import FinanceInAction from "./components/FinanceInAction.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certifications.jsx";
import Leadership from "./components/Leadership.jsx";
import Classroom from "./components/Classroom.jsx";
import Exploring from "./components/Exploring.jsx";
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
        <ProofStrip />
        <About />
        <Expertise />
        <FinanceInAction />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Leadership />
        <Classroom />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
