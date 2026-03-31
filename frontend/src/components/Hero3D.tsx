"use client";

import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AIOrb from "@/3d/AIOrb";

export const Hero3D = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const checkScroll = () => {
      // Hide "Scroll to explore" when user scrolls down more than 100px
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      animationFrameId = requestAnimationFrame(checkScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(checkScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleExploreClick = () => {
    const element = document.getElementById("tools");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* 3D Orb Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0">
          <AIOrb />
        </div>
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div 
          className="absolute bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundPosition: "center",
            width: "850px",
            height: "850px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl relative z-10">
          <h1 className="text-5xl sm:text-7xl font-bold font-grotesk mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Bihar AI Mission
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Empowering Bihar with Artificial Intelligence Education, Modern Tools, and Limitless
            Possibilities
          </p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleExploreClick}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all cursor-pointer"
            >
              Explore AI Tools
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              Learn Prompt Engineering
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on scroll */}
        {!isScrolled && (
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2"
          >
            <div className="text-cyan-400 text-sm font-medium whitespace-nowrap">
              Scroll to explore
            </div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-cyan-400" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero3D;
