import Reveal from "./Reveal.jsx";
import { LEADERSHIP } from "../data/content.js";

export default function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="container">
        <Reveal as="h2">LEADERSHIP IN ACTION</Reveal>

        <div className="leadership-grid">
          {LEADERSHIP.map((role) => (
            <Reveal as="div" className="leadership-card" key={role.org}>
              <div className="leadership-header">
                <div>
                  <h3>{role.role}</h3>
                  <span className="org">{role.org}</span>
                </div>
                <span className="duration">{role.duration}</span>
              </div>
              
              {role.metrics && (
                <div className="leadership-metrics">
                  {role.metrics.map((m) => (
                    <div className="lead-metric" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <p>{role.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
