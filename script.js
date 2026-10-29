/* ========================================
   AYLA AZZURA — PORTFOLIO JAVASCRIPT
======================================== */

/* 1. MOBILE NAVIGATION */
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

/* 2. AUTOMATIC FOOTER YEAR */
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* 3. REVEAL ELEMENTS WHEN SCROLLING */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* 4. CONSOLE MESSAGE */
console.log(
  "%cWelcome to Ayla's Portfolio!",
  "color: #9a75ff; font-size: 18px; font-weight: bold;",
);

console.log(
  "%cBuilt with HTML, CSS, and JavaScript.",
  "color: #65a9ff; font-size: 12px;",
);
