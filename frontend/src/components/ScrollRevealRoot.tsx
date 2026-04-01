"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );

    if (reduceMotion) {
      for (const element of elements) element.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    for (const element of elements) {
      // Reset state for newly navigated pages
      element.classList.remove("is-revealed");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
