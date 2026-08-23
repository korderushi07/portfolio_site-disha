import Reveal from "./Reveal.jsx";
import { CERTIFICATIONS } from "../data/content.js";

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <Reveal as="h2">CERTIFICATIONS</Reveal>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <Reveal as="div" className="cert-card" key={cert.name}>
              <div className="cert-header">
                <h3>{cert.name}</h3>
                <span className="issuer">{cert.issuer}</span>
              </div>
              <p>{cert.desc}</p>
              <a href="#" className="link-arrow">
                View Credential <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
