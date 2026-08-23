import Reveal from "./Reveal.jsx";
import { FINANCE_IN_ACTION } from "../data/content.js";

export default function FinanceInAction() {
  return (
    <section className="finance-action" id="finance-action">
      <div className="container">
        <Reveal as="h2">FINANCE IN ACTION</Reveal>

        <div className="finance-grid">
          {FINANCE_IN_ACTION.map((item) => (
            <Reveal as="div" className="finance-card" key={item.title}>
              <span className="finance-metric">{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
