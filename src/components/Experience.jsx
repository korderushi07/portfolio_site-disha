import Reveal from "./Reveal.jsx";
import { EXPERIENCE_ROWS, SKILL_GROUPS } from "../data/content.js";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <Reveal as="h2">WORK EXPERIENCE</Reveal>

        <div className="experience-cards">
          {EXPERIENCE_ROWS.map((row) => (
            <Reveal as="div" className="exp-horizontal-card" key={row.company}>
              <div className="exp-card-header">
                <div>
                  <h3>{row.role}</h3>
                  <span className="company">{row.company}</span>
                </div>
                <span className="duration">{row.duration}</span>
              </div>
              
              <p className="exp-summary">{row.summary}</p>
              
              <div className="exp-impact-section">
                <strong>Impact Highlights</strong>
                <ul className="exp-bullets">
                  {row.impact.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-footer">
                <div className="exp-skills">
                  {row.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
                <button className="btn-details">
                  View Details +
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Unified Skills Section */}
        <div className="unified-skills">
          <Reveal as="h3">SKILLS MATRIX</Reveal>
          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <Reveal as="div" className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tool-tags">
                  {group.skills.map((skill) => (
                    <span className="tool-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
