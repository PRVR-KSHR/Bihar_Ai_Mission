"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTools = () => setIsToolsOpen(!isToolsOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Learning Hub", href: "/learning" },
    { label: "Prompt Guide", href: "/prompt-guide" },
  ];

  const toolsLinks = [
    { label: "View All Tools", href: "/ai-tools" },
    { label: "Chatbots & Research", href: "/ai-tools/chatbots" },
    { label: "Content Writing", href: "/ai-tools/content-writing" },
    { label: "Image & Video", href: "/ai-tools/image-video" },
    { label: "Productivity", href: "/ai-tools/productivity" },
    { label: "Developer Tools", href: "/ai-tools/developer" },
    { label: "Speech AI", href: "/ai-tools/speech" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-ai-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-ai-primary to-ai-accent rounded-lg flex items-center justify-center font-bold text-white group-hover:shadow-glow-cyan transition-all">
              ✨
            </div>
            <span className="font-grotesk font-bold text-lg text-ai-glow hidden sm:inline">
              Bihar AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-ai-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Tools Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium hover:text-ai-accent transition-colors flex items-center gap-2">
                AI Tools
                <ChevronDown size={16} />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="hidden group-hover:block absolute top-full left-0 mt-2 w-56 glass rounded-lg p-2 shadow-lg"
              >
                {toolsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm rounded hover:bg-ai-primary/20 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-ai-primary/20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-ai-accent/20 py-4 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 rounded hover:bg-ai-primary/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Tools Dropdown */}
              <div>
                <button
                  onClick={toggleTools}
                  className="w-full text-left px-4 py-2 rounded hover:bg-ai-primary/20 transition-colors flex items-center justify-between"
                >
                  AI Tools
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isToolsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      {toolsLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm rounded hover:bg-ai-accent/20 transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setIsToolsOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
