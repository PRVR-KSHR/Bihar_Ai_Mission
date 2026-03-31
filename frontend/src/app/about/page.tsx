"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, Globe } from "lucide-react";

export default function AboutPage() {
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
              About Bihar AI Mission
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Empowering the state of Bihar through AI education and accessible tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card-glass border border-ai-accent/30 p-8"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="font-grotesk text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize Artificial Intelligence education and make
                cutting-edge AI tools accessible to every citizen, student, and
                developer in Bihar. We believe AI is not just for tech experts -
                it's for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card-glass border border-ai-accent/30 p-8"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="font-grotesk text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A digitally transformed Bihar where AI empowers government
                efficiency, enables economic growth, and enhances citizen
                services. We envision Bihar as an AI-forward state leading
                innovation across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Accessibility",
                description:
                  "AI tools and education should be accessible to everyone, regardless of background.",
              },
              {
                icon: Globe,
                title: "Inclusion",
                description:
                  "We focus on underrepresented communities in tech and AI adoption.",
              },
              {
                icon: Target,
                title: "Impact",
                description:
                  "Every tool and guide is designed to create measurable positive change.",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We stay updated with the latest AI advancements and share them with Bihar.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass border border-ai-accent/30 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={40} className="text-ai-accent" />
                  </div>
                  <h3 className="font-grotesk font-bold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            What We Provide
          </motion.h2>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: "📚",
                title: "Comprehensive Learning Resources",
                description:
                  "Structured learning paths from beginner to advanced, covering AI fundamentals, machine learning, deep learning, and more.",
                items: [
                  "Beginner-friendly tutorials",
                  "Advanced concepts",
                  "Hands-on projects",
                  "Case studies for government",
                ],
              },
              {
                icon: "🛠️",
                title: "Curated AI Tools Directory",
                description:
                  "A carefully selected collection of AI tools organized by category with detailed guides and examples.",
                items: [
                  "6+ categories of tools",
                  "15+ curated tools",
                  "Step-by-step guides",
                  "Real-world use cases",
                ],
              },
              {
                icon: "💡",
                title: "Prompt Engineering Mastery",
                description:
                  "Learn to write effective prompts and get the best results from AI models.",
                items: [
                  "Prompt structure guide",
                  "Common patterns",
                  "Best practices",
                  "Example prompts",
                ],
              },
              {
                icon: "🤝",
                title: "Government-Specific Guidance",
                description:
                  "AI tools and strategies tailored for government use cases and public sector applications.",
                items: [
                  "Policy document generation",
                  "Citizen communication",
                  "Data analysis",
                  "E-governance solutions",
                ],
              },
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30 p-8"
              >
                <div className="flex gap-6">
                  <div className="text-5xl flex-shrink-0">{offering.icon}</div>
                  <div className="flex-grow">
                    <h3 className="font-grotesk text-2xl font-bold mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{offering.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {offering.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <span className="text-ai-accent">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Who is Bihar AI Mission For?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🎓",
                title: "Students",
                description:
                  "Learn AI fundamentals and prepare for AI-driven careers.",
              },
              {
                emoji: "👨‍💼",
                title: "Government Employees",
                description:
                  "Understand and use AI tools for better governance and efficiency.",
              },
              {
                emoji: "💻",
                title: "Developers",
                description:
                  "Explore AI tools and techniques for your projects and applications.",
              },
              {
                emoji: "🌍",
                title: "Citizens",
                description:
                  "Understand AI and how it's transforming our world and society.",
              },
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30 text-center"
              >
                <div className="text-5xl mb-4">{audience.emoji}</div>
                <h3 className="font-grotesk font-bold text-lg mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-400 text-sm">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-ai-bg/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-grotesk text-3xl font-bold mb-12 text-center"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                time: "2024",
                title: "Bihar AI Mission Launched",
                description:
                  "We launched the Bihar AI Mission to democratize AI education and tools across the state.",
              },
              {
                time: "2024",
                title: "Content & Tools Curation",
                description:
                  "Built a comprehensive database of AI tools and educational resources.",
              },
              {
                time: "2024-2025",
                title: "Community Building",
                description:
                  "Engaged with students, developers, and government entities to understand their needs.",
              },
              {
                time: "Future",
                title: "Government Partnerships",
                description:
                  "Partner with government departments for AI adoption in public services.",
              },
              {
                time: "Future",
                title: "Training Programs",
                description:
                  "Launch certification programs and training workshops across Bihar.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass border border-ai-accent/30 p-6 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-ai-primary/20 flex items-center justify-center">
                    <span className="font-grotesk font-bold text-ai-accent">
                      {milestone.time}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-grotesk font-bold text-lg mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="card-glass border border-ai-accent/50 p-12 text-center"
          >
            <h2 className="font-grotesk text-3xl font-bold mb-4">
              Join the Bihar AI Mission
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Be part of Bihar's AI revolution. Learn, explore, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary glow-blue">
                Start Learning Now
              </button>
              <button className="btn-secondary">Get in Touch</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
