"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 5000 }) => {
  const ref = useRef(null);
  const sphere = React.useMemo(
    () =>
      random.inSphere(new Float32Array(count * 3), { radius: 1.2 }) as any,
    [count]
  );

  useFrame((state) => {
    if (ref.current) {
      (ref.current as any).rotation.x -= 0.0001;
      (ref.current as any).rotation.y -= 0.0001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2563EB"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const ParticleBackground: React.FC<ParticlesProps> = ({
  count = 5000,
}) => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }} className="!w-full !h-full">
        <Particles count={count} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
