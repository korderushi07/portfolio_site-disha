import dishaImg from "../assets/disha.png";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <h1 className="headline">Hey, there</h1>
      <div className="pill">Available for new opportunities</div>
      <p className="spec">
        JBIMS '28<br />
        Social Jin<br />
        Decoding financial reasoning
      </p>
      <img className="subject" alt="Disha portrait" src={dishaImg} />
      <div className="name">
        <span>I AM</span>
        <span>DISHA JAIN</span>
      </div>
      <div className="role">
        <span>STRATEGIC FINANCE &amp;</span>
        <span>BUSINESS CONSULTING</span>
      </div>
    </section>
  );
}
