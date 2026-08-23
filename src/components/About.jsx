import Reveal from "./Reveal.jsx";
import { ABOUT_STATS } from "../data/content.js";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal as="div" className="about-copy">
          <h2>
            TURNING MY
            <br />
            VISION INTO IMPACT
          </h2>
          <p>
            I'm an MBA candidate blending analytical rigor with brand storytelling. Before business
            school, I spent three years leading go-to-market initiatives for a consumer-tech startup —
            I build practical, data-backed solutions for brands to grow on.
          </p>

          <div className="about-stats">
            {ABOUT_STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="about-visual">
          <div className="about-image">
            <div className="about-image-inner">
              <span>📈</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
