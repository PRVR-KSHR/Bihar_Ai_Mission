"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { aiTools, categories } from "@/data/aiTools";
import BackButton from "@/components/BackButton";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categoryData = categories.find((c) => c.slug === categorySlug);
  const categoryTools = useMemo(
    () => aiTools.filter((tool) => tool.category === categoryData?.name),
    [categoryData?.name]
  );

  if (!categoryData) {
    return (
      <div className="w-full pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

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
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-transparent to-slate-900/50 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton label="Back to All Tools" className="mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">{categoryData.icon}</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {categoryData.name}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
              {categoryData.description}
            </p>
            <p className="text-cyan-400 font-semibold">
              {categoryTools.length} Tools Available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-900/50 to-transparent reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categoryTools.map((tool) => (
              <Link key={tool.id} href={`/ai-tools/${categorySlug}/${tool.slug}`}>
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer h-full"
                >
                  <div className="text-5xl mb-4">{tool.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                      {tool.category}
                    </span>
                    <span className="text-cyan-400 group-hover:text-cyan-300 transition">
                      →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {categoryTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No tools found in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-slate-900/30 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Other Categories
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories
              .filter((cat) => cat.id !== categoryData.id)
              .map((category) => (
                <Link key={category.id} href={`/ai-tools/${category.slug}`}>
                  <motion.div
                    variants={item}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer group h-full"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {aiTools.filter((t) => t.category === category.name).length} Tools
                    </p>
                  </motion.div>
                </Link>
              ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
