import Reveal from "./Reveal.jsx";
import { SERVICES } from "../data/content.js";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal as="h2">I CAN HELP YOU WITH</Reveal>

        <div className="services-row">
          {SERVICES.map((service) => (
            <Reveal as="div" className="service-card" key={service.num}>
              <span className="service-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
