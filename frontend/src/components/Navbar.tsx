"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, loading, logout, login } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    // On mobile/tablet, open the menu by default so options are visible.
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      setIsOpen(true);
    }
  }, []);

  const navItems = useMemo(
    () => [
      { label: "About", anchor: "about" },
      { label: "Learning Hub", anchor: "learning" },
      { label: "Tools", anchor: "tools" },
      { label: "Case Studies", anchor: "cases" },
      { label: "Policy", anchor: "governance" },
      { label: "Startups", anchor: "startup" },
    ],
    []
  );

  const goToAnchor = (anchor: string) => {
    setIsOpen(false);

    if (pathname === "/") {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    router.push(`/?scroll=${anchor}`);
  };

  // Handle scroll parameter from URL
  useEffect(() => {
    if (pathname === "/") {
      const searchParams = new URLSearchParams(window.location.search);
      const scrollTo = searchParams.get("scroll");
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <nav>
      <div className="nav-inner">
        <button
          type="button"
          onClick={() => goToAnchor("home")}
          className="nav-logo"
        >
          <div className="logo-emblem">B</div>
          <div className="logo-text">
            <span className="main">Bihar AI Mission</span>
            <span className="sub">Government of Bihar</span>
          </div>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.anchor}>
              <button type="button" onClick={() => goToAnchor(item.anchor)}>
                {item.label}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              className="nav-cta"
              onClick={() => goToAnchor("contact")}
            >
              Partner with Us →
            </button>
          </li>

          <li>
            {!loading && (
              <>
                {user ? (
                  <button type="button" onClick={logout}>
                    {user.name} · Logout
                  </button>
                ) : (
                  <button type="button" onClick={() => login(pathname || "/") }>
                    Login
                  </button>
                )}
              </>
            )}
          </li>
        </ul>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
