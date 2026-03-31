"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, LogOut, LogIn } from "lucide-react";
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
  }, []);

  const menuItems = [
    { label: "Home", href: "home" },
    { label: "AI Tools", href: "tools" },
    { label: "Prompt Guide", href: "prompt" },
    { label: "About", href: "about" },
    { label: "Learning", href: "/learning" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If it's an internal anchor (no slash), scroll to section
    if (!href.startsWith("/")) {
      // Only scroll on homepage
      if (pathname === "/") {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home and scroll
        router.push(`/?scroll=${href}`);
      }
    } else {
      // External page navigation
      router.push(href);
    }
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
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                🤖
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hidden sm:inline">
                Bihar AI
              </span>
            </motion.div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* User Display / Auth Buttons */}
            {!loading && (
              <>
                {user ? (
                  <div className="hidden sm:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {user.image && (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-8 h-8 rounded-full border border-cyan-500/30"
                        />
                      )}
                      <span className="text-sm font-medium text-cyan-400 truncate max-w-[120px]">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={logout}
                      className="p-2 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Logout"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => login()}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    <LogIn size={18} />
                    <span className="hidden sm:inline">Login</span>
                  </button>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            {!loading && (
              <div className="px-4 py-2 border-t border-slate-700 mt-2 pt-2">
                {user ? (
                  <button
                    onClick={logout}
                    className="w-full text-left text-sm text-red-400 hover:text-red-300"
                  >
                    Logout ({user.name})
                  </button>
                ) : (
                  <button
                    onClick={() => login()}
                    className="w-full text-left text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    Login with Google
                  </button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
