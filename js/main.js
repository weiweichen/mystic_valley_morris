// Ridgeway Morris — small progressive enhancement only.
// The site works fully without this file; it just highlights
// the current section in the nav as you scroll.

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

if (sections.length && navLinks.length && "IntersectionObserver" in window) {
  const map = new Map();
  navLinks.forEach((link) => map.set(link.getAttribute("href").slice(1), link));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.style.color = "");
          link.style.color = "var(--green)";
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
