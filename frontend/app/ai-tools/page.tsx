"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aiTools, categories } from "@/data/aiTools";

export default function AIToolsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full pt-24">
      <section className="py-12 bg-gradient-to-b from-transparent to-slate-900/50 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Tools Directory
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose a category, then pick a tool to view the full guide.
            </p>
          </motion.div>

          {/* Category Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {categories.map((category) => (
              <Link key={category.id} href={`/ai-tools/${category.slug}`}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -8, boxShadow: `0 0 30px ${category.color}40` }}
                  className="p-8 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer group h-full"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition">
                    <span className="text-sm font-semibold">
                      {aiTools.filter((t) => t.category === category.name).length} Tools
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
