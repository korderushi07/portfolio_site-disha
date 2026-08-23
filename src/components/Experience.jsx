import Reveal from "./Reveal.jsx";
import { EXPERIENCE_ROWS, TOOLS } from "../data/content.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <Reveal as="h2">EXPERIENCE &amp; SKILLS</Reveal>

        <div className="exp-rows">
          {EXPERIENCE_ROWS.map((row) => (
            <Reveal as="div" className="exp-row" key={row.year}>
              <span className="exp-year">{row.year}</span>
              <span className="exp-title">{row.title}</span>
              <span className="exp-tags">
                {row.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="tools">
          <span className="tools-label">Tools I use</span>
          <div className="tool-tags">
            {TOOLS.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
