import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { TESTIMONIALS } from "../data/content.js";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    setActive(index);
    restartAutoplay();
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Reveal as="h2">WHAT PEOPLE SAY</Reveal>

        <Reveal as="div" className="testimonial-track">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              className={`testimonial-card${index === active ? " active" : ""}`}
              key={testimonial.name}
            >
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className="avatar">{testimonial.initials}</span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="testimonial-dots">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              className={index === active ? "active" : ""}
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => goTo(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
