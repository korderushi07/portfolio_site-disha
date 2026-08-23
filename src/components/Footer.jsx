export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#hero" className="logo">
          Disha<span className="dot">.</span>
        </a>
        <p>&copy; {year} Disha Jain. Crafted with intention.</p>
        <a href="#hero" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}
