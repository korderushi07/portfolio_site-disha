import Reveal from "./Reveal.jsx";
import { EXPERTISE } from "../data/content.js";

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="container">
        <Reveal as="h2">AREAS OF EXPERTISE</Reveal>

        <div className="expertise-row">
          {EXPERTISE.map((item, idx) => (
            <Reveal as="div" className="expertise-card" key={item.category}>
              <span className="expertise-num">0{idx + 1}</span>
              <h3>{item.category}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
