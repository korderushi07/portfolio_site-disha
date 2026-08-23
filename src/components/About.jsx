import Reveal from "./Reveal.jsx";

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
            I am an execution-focused individual with a highly analytical mindset, dedicated to bridging
            the gap between operational strategies and financial realities. My academic journey spans from an
            undergraduate degree in BBA Finance in Nagpur to studying MSc Finance at JBIMS in Mumbai's Back Bay.
            I believe brands are scaled with the right decisions after deeply analyzing their financial health.
          </p>
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
