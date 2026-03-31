"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingIconsContent: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const icons = [
    { position: [-3, 3, 0], angle: 0 },
    { position: [3, 3, 0], angle: Math.PI * 0.5 },
    { position: [-3, -3, 0], angle: Math.PI },
    { position: [3, -3, 0], angle: Math.PI * 1.5 },
    { position: [0, 0, 0], angle: 0 },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;

      groupRef.current.children.forEach((child, index) => {
        const time = state.clock.getElapsedTime();
        child.position.y += Math.sin(time + index) * 0.001;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <mesh key={index} position={icon.position as [number, number, number]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshPhongMaterial
            color="#2563EB"
            emissive="#06B6D4"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={10}
            array={
              new Float32Array([
                -3, 3, 0, 3, 3, 0, 3, 3, 0, 3, -3, 0, 3, -3, 0, -3, -3, 0,
                -3, -3, 0, -3, 3, 0, 0, 0, 0, 0, 0, 0,
              ])
            }
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#06B6D4" transparent opacity={0.3} />
      </lineSegments>

      <pointLight position={[0, 0, 3]} intensity={1} color="#2563EB" />
      <ambientLight intensity={0.4} />
    </group>
  );
};

export const FloatingIcons: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <FloatingIconsContent />
      </Canvas>
    </div>
  );
};

export default FloatingIcons;
