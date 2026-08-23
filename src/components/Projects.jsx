import Reveal from "./Reveal.jsx";
import { CASE_STUDIES } from "../data/content.js";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal as="h2">SELECTED CASE STUDIES</Reveal>

        <div className="projects-grid">
          {CASE_STUDIES.map((cs) => (
            <Reveal as="article" className="project-card" key={cs.num}>
              <div className="project-header">
                <span className="project-num">{cs.num}</span>
                <h3>{cs.title}</h3>
              </div>
              <div className="project-body">
                {Object.entries(cs.details).map(([key, val]) => (
                  <div className="project-detail-row" key={key}>
                    <span className="detail-key">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <p className="detail-val">{val}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
