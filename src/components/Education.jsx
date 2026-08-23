import Reveal from "./Reveal.jsx";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <Reveal as="h2">EDUCATION</Reveal>

        <div className="education-list">
          {EDUCATION.map((edu) => (
            <Reveal as="div" className="education-row" key={edu.degree}>
              <div className="edu-main">
                <h3>{edu.degree}</h3>
                <span className="edu-inst">{edu.institution}</span>
              </div>
              <div className="edu-meta">
                <span className="edu-dur">{edu.duration}</span>
                <span className="edu-gpa">{edu.gpa}</span>
              </div>
              <div className="edu-highlight">
                <strong>Academic Highlight</strong>
                <p>{edu.highlight}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
