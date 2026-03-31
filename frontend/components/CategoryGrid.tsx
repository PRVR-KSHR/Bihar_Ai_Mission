"use client";

import React from "react";
import { motion } from "framer-motion";

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  tools: number;
}

interface CategoryGridProps {
  categories: CategoryItem[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="card-glass border border-ai-accent/30 group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-5xl">{category.icon}</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ai-accent">
                {category.tools}
              </div>
              <p className="text-xs text-gray-400">Tools</p>
            </div>
          </div>

          <h3 className="font-grotesk font-bold text-lg mb-2 text-white group-hover:text-ai-accent transition-colors">
            {category.name}
          </h3>

          <p className="text-sm text-gray-400">{category.description}</p>

          <div className="mt-6 pt-4 border-t border-ai-accent/20">
            <button className="text-ai-accent hover:text-ai-glow transition-colors text-sm font-medium">
              Explore →
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
