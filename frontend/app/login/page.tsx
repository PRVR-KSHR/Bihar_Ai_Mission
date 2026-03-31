"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const callbackUrl = searchParams.get("callbackUrl") || "/ai-tools";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Set a mock authenticated user
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: "Demo User",
        email: "user@example.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
      };
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      // Force a hard redirect to refresh auth state
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = callbackUrl;
      }, 300);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full pt-24 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        {/* Grid Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-md w-full mx-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to Bihar AI
            </h1>
            <p className="text-gray-400 text-lg">
              Sign in to access AI tools and guides
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-xl"
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Sign in with Google</h2>
              <p className="text-sm text-gray-400 mb-6">
                Use your Google account to access all features and save your progress.
              </p>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.461,2.268,15.365,1.156,12.545,1.156 c-6.29,0-11.381,5.091-11.381,11.381s5.091,11.381,11.381,11.381c6.29,0,11.381-5.091,11.381-11.381 c0-0.821-0.084-1.617-0.235-2.391H12.545z" />
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-xs text-gray-500 text-center">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {[
              { icon: "🤖", title: "AI Tools", desc: "26+ tools" },
              { icon: "📚", title: "Guides", desc: "Prompt examples" },
              { icon: "🎓", title: "Learning", desc: "Free courses" },
              { icon: "⚡", title: "Fast Access", desc: "Instant features" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30 text-center hover:bg-slate-800/50 transition-colors"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <p className="text-xs font-semibold text-gray-300">{feature.title}</p>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
