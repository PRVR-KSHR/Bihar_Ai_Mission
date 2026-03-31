"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap } from "lucide-react";
import { learningResources } from "@/data/content";

export default function LearningPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="w-full pt-24">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-transparent to-ai-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h1 className="font-grotesk text-5xl font-bold mb-4">
              AI Learning Hub
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Structured learning paths from beginner to advanced, designed to help you master
              Artificial Intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Learning Tracks
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {learningResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30 overflow-hidden group hover:border-ai-accent/60 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
                  {/* Icon */}
                  <div className="flex items-start justify-start md:justify-center">
                    <div className="text-6xl">{resource.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-grotesk text-2xl font-bold">
                        {resource.title}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          resource.level === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : resource.level === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {resource.level}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{resource.description}</p>

                    <ul className="space-y-2">
                      {resource.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle size={16} className="text-ai-accent flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col items-start md:items-center justify-start md:justify-center gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-ai-accent font-grotesk font-bold text-lg mb-2">
                        <Clock size={20} />
                        {resource.duration}
                      </div>
                      <p className="text-gray-400 text-sm">Duration</p>
                    </div>
                    <button className="btn-primary text-sm">
                      Start Learning
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Tips for Effective Learning
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "⏱️",
                title: "Consistency",
                description:
                  "Dedicate regular time to learning. Even 30 minutes daily is better than occasional long sessions.",
              },
              {
                icon: "💻",
                title: "Practice",
                description:
                  "Don't just watch or read - actively code, experiment with tools, and build projects.",
              },
              {
                icon: "🤝",
                title: "Join Communities",
                description:
                  "Connect with other learners, share your progress, and learn from their experiences.",
              },
              {
                icon: "📌",
                title: "Take Notes",
                description:
                  "Document key concepts, code snippets, and insights as you learn.",
              },
              {
                icon: "🔄",
                title: "Review & Revise",
                description:
                  "Regularly revisit earlier material to solidify your understanding.",
              },
              {
                icon: "🎯",
                title: "Build Projects",
                description:
                  "Apply what you've learned by building real-world projects and solutions.",
              },
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card-glass border border-ai-accent/30"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-grotesk font-bold text-lg mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Path */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Getting Started: Beginner Path
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                week: "Week 1",
                topic: "AI Fundamentals",
                description:
                  "Understand what AI is, types of AI (Narrow vs General), and real-world applications.",
                resources: [
                  "What is Artificial Intelligence?",
                  "History and Evolution of AI",
                  "AI in Daily Life",
                  "Ethics in AI",
                ],
              },
              {
                week: "Week 2",
                topic: "Machine Learning Basics",
                description:
                  "Learn about supervised learning, unsupervised learning, and basic algorithms.",
                resources: [
                  "Machine Learning Overview",
                  "Supervised vs Unsupervised Learning",
                  "Classification and Regression",
                  "Decision Trees",
                ],
              },
              {
                week: "Week 3",
                topic: "Neural Networks Introduction",
                description:
                  "Explore how neural networks work and their basic architecture.",
                resources: [
                  "Neurons and Perceptrons",
                  "Forward and Backward Propagation",
                  "Activation Functions",
                  "Training Neural Networks",
                ],
              },
              {
                week: "Week 4",
                topic: "Deep Learning & LLMs",
                description:
                  "Introduction to deep learning and Large Language Models.",
                resources: [
                  "Deep Learning Fundamentals",
                  "Convolutional Neural Networks",
                  "Recurrent Neural Networks",
                  "Introduction to Transformers",
                ],
              },
            ].map((pathItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg bg-ai-primary/20 flex items-center justify-center">
                      <span className="font-grotesk font-bold text-ai-accent text-lg">
                        {pathItem.week}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-grotesk font-bold text-xl mb-2">
                      {pathItem.topic}
                    </h4>
                    <p className="text-gray-400 mb-4">{pathItem.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pathItem.resources.map((resource, resIndex) => (
                        <span
                          key={resIndex}
                          className="text-xs px-3 py-1 rounded-full bg-ai-accent/20 text-ai-accent"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Recommended Resources
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Online Platforms",
                items: [
                  "Coursera - AI Courses",
                  "edX - Machine Learning",
                  "Udacity - AI Nanodegree",
                  "Fast.ai - Practical Deep Learning",
                ],
              },
              {
                title: "Books",
                items: [
                  "Introduction to Machine Learning",
                  "Deep Learning by Goodfellow et al",
                  "AI: A Guide for Thinking Humans",
                  "The Master Algorithm",
                ],
              },
              {
                title: "YouTube Channels",
                items: [
                  "3Blue1Brown - Neural Networks",
                  "StatQuest - Statistics & ML",
                  "Sentdex - Python & ML",
                  "Jeremy Howard - Practical AI",
                ],
              },
              {
                title: "Hands-on Tools",
                items: [
                  "Google Colab - Free Jupyter Notebooks",
                  "Kaggle - Datasets & Competitions",
                  "GitHub - Code & Projects",
                  "Hugging Face - Model Hub",
                ],
              },
            ].map((resourceGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30"
              >
                <h3 className="font-grotesk font-bold text-xl mb-4">
                  {resourceGroup.title}
                </h3>
                <ul className="space-y-2">
                  {resourceGroup.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Zap size={16} className="text-ai-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
