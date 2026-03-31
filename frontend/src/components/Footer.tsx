"use client";

import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Bihar AI Mission</h3>
            <p className="text-gray-400 text-sm">Empowering Bihar through artificial intelligence education and tools.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#tools" className="hover:text-cyan-400 transition">AI Tools</a></li>
              <li><a href="#prompt" className="hover:text-cyan-400 transition">Prompt Guide</a></li>
              <li><a href="#learning" className="hover:text-cyan-400 transition">Learning</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Guides</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Community</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 transition"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 transition"><Github size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 transition"><Linkedin size={18} /></a>
              <a href="mailto:contact@biharaimission.org" className="w-10 h-10 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 transition"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Bihar AI Mission. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
