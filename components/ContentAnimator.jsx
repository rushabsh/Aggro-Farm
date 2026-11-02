"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ContentAnimator({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Target all sections and any element with .reveal-on-scroll
    const targets = container.querySelectorAll("section, .reveal-on-scroll");

    // Check if browser supports IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => {
        el.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.05,
      }
    );

    targets.forEach((el, index) => {
      // First section (Hero) is revealed immediately so initial page load is crisp
      if (index === 0) {
        el.classList.add("animate-entry");
        el.classList.add("reveal-visible");
      } else {
        el.classList.add("reveal-init");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      key={pathname}
      ref={containerRef}
      className="page-entry-animate w-full flex-1 flex flex-col"
    >
      {children}
    </div>
  );
}

