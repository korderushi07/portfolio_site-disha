import Reveal from "./Reveal.jsx";
import { ACHIEVEMENTS } from "../data/content.js";

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <Reveal as="h2">ACHIEVEMENTS</Reveal>

        {/* Numeric counters grid */}
        <div className="achievements-counter-grid">
          {ACHIEVEMENTS.metrics.map((m) => (
            <Reveal as="div" className="counter-card" key={m.label}>
              <span className="counter-num">{m.num}</span>
              <span className="counter-label">{m.label}</span>
            </Reveal>
          ))}
        </div>

        {/* Awards cards grid */}
        <div className="achievements-grid">
          {ACHIEVEMENTS.cards.map((card) => (
            <Reveal as="div" className="achievement-card" key={card.title}>
              <div className="achievement-header">
                <span className="achievement-icon">🏆</span>
                <div>
                  <h3>{card.title}</h3>
                  <strong className="award-name">{card.award}</strong>
                </div>
              </div>
              <p className="award-org">{card.org}</p>
              <p className="award-desc">{card.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
