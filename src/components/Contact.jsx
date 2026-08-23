import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { CONTACT_LINKS } from "../data/content.js";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const clearTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(clearTimerRef.current), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(`Thanks${form.name ? ", " + form.name : ""} — your message has been noted. I'll get back to you soon!`);
    setForm(initialForm);

    clearTimeout(clearTimerRef.current);
    clearTimerRef.current = setTimeout(() => setStatus(""), 6000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal as="div" className="contact-copy">
          <h2>
            LET'S BUILD SOMETHING
            <br />
            WORTH TALKING ABOUT
          </h2>
          <p className="hero-lede">
            Open to full-time strategy, brand, and growth roles starting 2026 — and always happy
            to talk shop over coffee (virtual or otherwise).
          </p>

          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a href={link.href} className="contact-link" key={link.label}>
                <span>{link.icon}</span> {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Tell me a bit about what you have in mind..."
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary full-width">
            Send Message
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
