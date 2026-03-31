"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { aiTools, categories } from "@/data/aiTools";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import BackButton from "@/components/BackButton";

export default function ToolDetailPage({
  params,
}: {
  params: { category: string; tool: string };
}) {
  const { isAuthenticated, loading } = useProtectedRoute();
  const categorySlug = params.category;
  const toolSlug = params.tool;

  const tool = aiTools.find((t) => t.slug === toolSlug);
  const categoryData = categories.find((c) => c.slug === categorySlug);

  if (loading) {
    return (
      <div className="w-full pt-24 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (!tool || !categoryData) {
    return (
      <div className="w-full pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tool Not Found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 pb-20">
      {/* Navigation */}
      <div className="bg-slate-900/50 border-b border-slate-700/50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justified-between">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/ai-tools" className="hover:text-blue-400 transition">
                AI Tools
              </Link>
              <span>/</span>
              <Link href={`/ai-tools/${categorySlug}`} className="hover:text-blue-400 transition">
                {categoryData.name}
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">{tool.name}</span>
            </div>
            <div className="ml-auto">
              <BackButton label="Back" className="text-sm" />
            </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="text-6xl mb-4">{tool.icon}</div>
                <h1 className="text-5xl font-bold text-white mb-2">{tool.name}</h1>
                <p className="text-xl text-blue-400">{tool.category}</p>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {tool.description}
              </p>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Visit {tool.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 h-fit"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
              
              {tool.pricingModel && (
                <div className="mb-6 pb-6 border-b border-slate-700">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-2">Pricing</p>
                  <p className="text-white">{tool.pricingModel}</p>
                </div>
              )}

              {tool.useCases && tool.useCases.length > 0 && (
                <div>
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">Use Cases</p>
                  <ul className="space-y-2">
                    {tool.useCases.slice(0, 3).map((useCase, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        {tool.aboutTool && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-t border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">About {tool.name}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{tool.aboutTool}</p>
          </motion.section>
        )}

        {/* Features Section */}
        {tool.features && tool.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-t border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30"
                >
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Use Cases Section */}
        {tool.useCases && tool.useCases.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-t border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-lg"
                >
                  <p className="text-gray-200 flex items-center gap-2">
                    <span className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full"></span>
                    {useCase}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Prompt Guide Section */}
        {tool.promptGuide && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-t border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Prompt Guide & Best Practices</h2>
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 text-gray-200">
                <div dangerouslySetInnerHTML={{ __html: tool.promptGuide.replace(/\n/g, "<br />").replace(/^# /gm, "<h3 class='text-xl font-bold text-white mt-6 mb-4'>").replace(/^## /gm, "<h4 class='text-lg font-bold text-cyan-400 mt-4 mb-2'>").replace(/^- /gm, "<li class='ml-4 mb-2'>• ").replace(/```[\w]*\n([\s\S]*?)\n```/g, "<pre class='bg-slate-900/50 p-4 rounded my-4 overflow-x-auto'><code>$1</code></pre>") }} />
              </div>
            </div>
          </motion.section>
        )}

        {/* Screenshots Section */}
        {tool.screenshots && tool.screenshots.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 border-t border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.screenshots.map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                >
                  <img
                    src={screenshot}
                    alt={`${tool.name} screenshot ${idx + 1}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-t border-slate-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Other Tools in {categoryData.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools
              .filter((t) => t.category === categoryData.name && t.id !== tool.id)
              .slice(0, 3)
              .map((relatedTool) => (
                <Link key={relatedTool.id} href={`/ai-tools/${categorySlug}/${relatedTool.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    <div className="text-4xl mb-3">{relatedTool.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{relatedTool.name}</h3>
                    <p className="text-sm text-gray-400">{relatedTool.description}</p>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
