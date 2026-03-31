"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  label = "Back",
  className = "",
}) => {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className={`flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors hover:bg-cyan-500/10 rounded-lg ${className}`}
    >
      <ArrowLeft size={18} />
      <span className="font-medium">{label}</span>
    </motion.button>
  );
};

export default BackButton;
