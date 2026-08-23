import Reveal from "./Reveal.jsx";
import { EXPLORING } from "../data/content.js";

export default function Exploring() {
  return (
    <section className="exploring" id="exploring">
      <div className="container">
        <Reveal as="h2">CURRENTLY EXPLORING</Reveal>

        <Reveal as="div" className="exploring-tags">
          {EXPLORING.map((tag) => (
            <span className="exploring-tag" key={tag}>
              {tag}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
