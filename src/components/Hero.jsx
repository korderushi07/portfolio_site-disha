import dishaImg from "../assets/disha.png";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <h1 className="headline">Hey, there</h1>
      <div className="pill">Available for new opportunities</div>
      <p className="spec">
        Specialized in Strategy,<br />
        Brand Management, and<br />
        Growth Marketing.
      </p>
      <img className="subject" alt="Disha portrait" src={dishaImg} />
      <div className="name">
        <span>I AM</span>
        <span>DISHA</span>
      </div>
      <div className="role">
        <span>MBA</span>
        <span>CANDIDATE</span>
      </div>
    </section>
  );
}
