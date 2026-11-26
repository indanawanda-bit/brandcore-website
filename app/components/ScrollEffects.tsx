"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section, .sectionhead, .service, .industry, .featurepanel, .productvisual, .pagehero .shell, .content > .shell > section, .cta, .footergrid > div"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    targets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      if (element.matches(".service, .industry, .footergrid > div")) {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
