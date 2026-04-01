"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginAsDemo } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const callbackUrl = searchParams.get("callbackUrl") || "/ai-tools";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Demo mode: instant login + redirect back to intended page
      loginAsDemo(callbackUrl);
      // Hard navigation guarantees we land on the intended tool page
      window.location.assign(callbackUrl);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full pt-24 flex items-center justify-center" style={{ background: "var(--navy)" }}>
      {/* Grid Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Sora', sans-serif" }}>
            Welcome to Bihar AI
          </h1>
          <p className="text-gray-400 text-lg">
            Sign in to access AI tools and guides
          </p>
        </div>

        <div
          className="p-8 rounded-2xl backdrop-blur-xl"
          style={{
            background: "rgba(13, 31, 74, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
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
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #F4622A, #FF8A50)",
              color: "white",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.5 : 1,
              transition: "all 0.2s",
            }}
          >
            {isLoading ? (
              <>
                <div style={{width: "20px", height: "20px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid white", borderRadius: "50%", animation: "spin 0.8s linear infinite"}} />
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

          <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
            <p className="text-xs text-gray-500 text-center">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          {[
            { icon: "🤖", title: "AI Tools", desc: "26+ tools" },
            { icon: "📚", title: "Guides", desc: "Prompt examples" },
            { icon: "🎓", title: "Learning", desc: "Free courses" },
            { icon: "⚡", title: "Fast Access", desc: "Instant features" },
          ].map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: "16px",
                borderRadius: "8px",
                background: "rgba(13, 31, 74, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(13, 31, 74, 0.5)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(13, 31, 74, 0.3)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{feature.icon}</div>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#ccc", margin: "4px 0" }}>
                {feature.title}
              </p>
              <p style={{ fontSize: "12px", color: "#888" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
