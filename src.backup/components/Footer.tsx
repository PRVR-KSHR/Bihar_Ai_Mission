"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ai-bg border-t border-ai-accent/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-ai-primary to-ai-accent rounded-lg flex items-center justify-center font-bold text-white">
                ✨
              </div>
              <span className="font-grotesk font-bold text-ai-glow">
                Bihar AI
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering Bihar with Artificial Intelligence education and tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-grotesk font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-ai-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ai-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-ai-accent transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-ai-accent transition-colors">
                  Learning Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-grotesk font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-guide" className="hover:text-ai-accent transition-colors">
                  Prompt Guide
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-ai-accent transition-colors">
                  Tools Directory
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-ai-accent transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ai-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-grotesk font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-ai-primary/20 hover:bg-ai-primary/40 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-ai-primary/20 hover:bg-ai-primary/40 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-ai-primary/20 hover:bg-ai-primary/40 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@biharaimission.org"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-ai-primary/20 hover:bg-ai-primary/40 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ai-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>(c) {currentYear} Bihar AI Mission. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-ai-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-ai-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-ai-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
