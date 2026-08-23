import Reveal from "./Reveal.jsx";
import { ACHIEVEMENTS } from "../data/content.js";

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <Reveal as="h2">ACHIEVEMENTS &amp; CERTIFICATIONS</Reveal>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((card) => (
            <Reveal as="div" className="achievement-card" key={card.category}>
              <div className="achievement-header">
                <span className="achievement-icon">{card.icon}</span>
                <h3>{card.category}</h3>
              </div>
              <ul className="achievement-list">
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
