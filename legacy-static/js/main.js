(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  function closeMenu() {
    menuToggle.classList.remove("open");
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.classList.toggle("open");
      mobileNav.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Header scrolled state ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => navObserver.observe(s));
  }

  /* ---------- Custom cursor dot (desktop only) ---------- */
  const cursorDot = document.querySelector(".cursor-dot");
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  if (cursorDot && supportsHover) {
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.opacity = "1";
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
    document.addEventListener("mouseleave", () => {
      cursorDot.style.opacity = "0";
    });

    const interactiveEls = document.querySelectorAll("a, button, .skill-card, .work-card");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => cursorDot.style.transform += " scale(2.2)");
      el.addEventListener("mouseleave", () => {
        cursorDot.style.transform = cursorDot.style.transform.replace(" scale(2.2)", "");
      });
    });
  }

  /* ---------- Testimonial slider ---------- */
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("testimonialDots");
  let currentTestimonial = 0;
  let testimonialTimer = null;

  if (testimonialCards.length && dotsContainer) {
    testimonialCards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => showTestimonial(i, true));
      dotsContainer.appendChild(dot);
    });

    function showTestimonial(index, userTriggered) {
      testimonialCards[currentTestimonial].classList.remove("active");
      dotsContainer.children[currentTestimonial].classList.remove("active");

      currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;

      testimonialCards[currentTestimonial].classList.add("active");
      dotsContainer.children[currentTestimonial].classList.add("active");

      if (userTriggered) restartAutoplay();
    }

    function restartAutoplay() {
      if (testimonialTimer) clearInterval(testimonialTimer);
      testimonialTimer = setInterval(() => showTestimonial(currentTestimonial + 1, false), 6000);
    }

    restartAutoplay();
  }

  /* ---------- Contact form (client-side demo) ---------- */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();

      formStatus.textContent = `Thanks${name ? ", " + name : ""} — your message has been noted. I'll get back to you soon!`;
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = "";
      }, 6000);
    });
  }
})();
