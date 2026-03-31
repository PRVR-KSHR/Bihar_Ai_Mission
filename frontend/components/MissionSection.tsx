"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Rocket, Users } from "lucide-react";

export const MissionSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Education",
      description: "Learn artificial intelligence from basics to advanced concepts",
    },
    {
      icon: Rocket,
      title: "Modern Tools",
      description: "Access curated AI tools to boost your productivity",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a community of AI enthusiasts and learners",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Stay updated with latest AI breakthroughs and trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Bihar AI Mission
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We are dedicated to empowering the people of Bihar with artificial intelligence knowledge,
            modern tools, and the skills needed to thrive in the digital age. Our mission is to make AI
            accessible, understandable, and applicable for everyone.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
                className="p-6 rounded-lg bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
