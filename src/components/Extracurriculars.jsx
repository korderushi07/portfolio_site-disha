import Reveal from "./Reveal.jsx";
import { LEADERSHIP, CLUBS } from "../data/content.js";

export default function Extracurriculars() {
  return (
    <section className="extracurriculars" id="extracurriculars">
      <div className="container">
        <Reveal as="h2">LEADERSHIP &amp; EXTRACURRICULARS</Reveal>

        <div className="extra-grid">
          <div className="leadership-col">
            {LEADERSHIP.map((role) => (
              <Reveal as="div" className="leadership-card" key={role.organization}>
                <div className="leadership-header">
                  <div>
                    <h3>{role.role}</h3>
                    <span className="org">{role.organization}</span>
                  </div>
                  <span className="duration">{role.duration}</span>
                </div>
                <ul className="leadership-bullets">
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="clubs-col">
            {CLUBS.map((club) => (
              <Reveal as="div" className="clubs-card" key={club.title}>
                <h3>{club.title}</h3>
                <ul className="clubs-list">
                  {club.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
