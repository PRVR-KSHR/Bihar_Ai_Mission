"use client";

import React from "react";
import Hero3D from "@/components/Hero3D";
import AIToolsSection from "@/components/AIToolsSection";
import MissionSection from "@/components/MissionSection";
import PromptGuideSection from "@/components/PromptGuideSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero3D />
      <AIToolsSection />
      <PromptGuideSection />
      <MissionSection />
      <Footer />
    </>
  );
}
