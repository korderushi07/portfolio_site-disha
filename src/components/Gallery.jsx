import Reveal from "./Reveal.jsx";
import { GALLERY_ITEMS } from "../data/content.js";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <Reveal as="h2">BEHIND THE SCENES</Reveal>
        <Reveal as="div" className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              style={{ "--g1": item.g1, "--g2": item.g2 }}
            >
              <span>{item.emoji}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
