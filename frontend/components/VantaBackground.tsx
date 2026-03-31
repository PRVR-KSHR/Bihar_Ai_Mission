"use client";

import React, { useEffect, useRef } from "react";

declare global {
  namespace window {
    var VANTA: any;
    var THREE: any;
  }
}

export const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    // Load THREE.js
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script1.onload = () => {
      // Load VANTA.js after THREE.js loads
      const script2 = document.createElement("script");
      script2.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta.js/0.5.24/vanta.net.min.js";
      script2.onload = () => {
        // Initialize VANTA effect
        if (window.VANTA && vantaRef.current && !effectRef.current) {
          try {
            effectRef.current = window.VANTA.NET({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x0066ff,
              backgroundColor: 0x0a0a0a,
              points: 5.0,
              maxDistance: 20.0,
              spacing: 15.0,
            });
          } catch (error) {
            console.error("Error initializing Vanta:", error);
          }
        }
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-50 w-full h-full"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
};

export default VantaBackground;
