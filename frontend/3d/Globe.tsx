"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const GlobeContent: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]} castShadow receiveShadow>
        <meshPhongMaterial
          color="#2563EB"
          emissive="#06B6D4"
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </Sphere>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-1, 0, 0, 1, 0, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#06B6D4" linewidth={2} />
      </lineSegments>

      <pointLight position={[10, 10, 10]} intensity={1} color="#2563EB" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#06B6D4" />
      <ambientLight intensity={0.4} />
    </group>
  );
};

export const Globe: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <GlobeContent />
      </Canvas>
    </div>
  );
};

export default Globe;
