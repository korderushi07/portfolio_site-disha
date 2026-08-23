import Reveal from "./Reveal.jsx";
import { WORKS } from "../data/content.js";

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="container">
        <Reveal as="div" className="works-head">
          <h2>RECENT PROJECTS</h2>
          <a href="#" className="link-arrow">
            View all work <span>→</span>
          </a>
        </Reveal>

        <div className="works-grid">
          {WORKS.map((work) => (
            <Reveal
              as="article"
              className="work-card"
              key={work.num}
              style={{ "--accent-1": work.accent1, "--accent-2": work.accent2 }}
            >
              <div className="work-thumb">
                <span className="work-num">{work.num}</span>
                <span className="work-title">{work.title}</span>
              </div>
              <div className="work-caption">
                <span className="work-tag">{work.tag}</span>
                <p>{work.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
