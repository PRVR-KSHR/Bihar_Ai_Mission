"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, aiTools } from "@/data/aiTools";

export const AIToolsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Tools Directory
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore curated AI tools across 6 categories to enhance your productivity
          </p>
        </motion.div>

        {/* All 6 Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {categories.map((category) => {
            const toolCount = aiTools.filter((t) => t.category === category.name).length;
            return (
              <Link key={category.id} href={`/ai-tools/${category.slug}`}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -8, boxShadow: `0 0 30px ${category.color}40` }}
                  className="p-8 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer group h-full"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition">
                    <span className="text-sm font-semibold">{toolCount} Tools</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsSection;
