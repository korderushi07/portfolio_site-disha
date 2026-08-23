import Reveal from "./Reveal.jsx";
import { CLASSROOM_WINS } from "../data/content.js";

export default function Classroom() {
  return (
    <section className="classroom" id="classroom">
      <div className="container">
        <Reveal as="h2">THINKING BEYOND THE CLASSROOM</Reveal>

        <div className="classroom-grid">
          {CLASSROOM_WINS.map((item) => (
            <Reveal as="div" className="classroom-card" key={item.category}>
              <h3>{item.category}</h3>
              <ul className="classroom-list">
                {item.items.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
