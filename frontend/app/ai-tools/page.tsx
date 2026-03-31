"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { aiTools, categories } from "@/data/aiTools";

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch = tool.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-transparent to-slate-900/50">
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
              Explore our curated collection of AI tools across 6 powerful categories.
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

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !selectedCategory
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                  : "bg-slate-800 border border-slate-700 text-gray-300 hover:border-slate-600"
              }`}
            >
              All Tools
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-slate-800 border border-slate-700 text-gray-300 hover:border-slate-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTools.map((tool, index) => (
              <motion.a
                key={tool.id}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{tool.description}</p>
                <span className="inline-block text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                  {tool.category}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No tools found matching your search.
              </p>
            </motion.div>
          )}

          {filteredTools.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 text-gray-400"
            >
              <p>
                Found {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
