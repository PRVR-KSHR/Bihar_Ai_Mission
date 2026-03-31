"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NetworkNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate nodes
  const nodeCount = 50;
  const nodes = React.useMemo(() => {
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
      });
    }
    return nodes;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      nodes.forEach((node, index) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (Math.abs(node.x) > 5) node.vx *= -1;
        if (Math.abs(node.y) > 5) node.vy *= -1;
        if (Math.abs(node.z) > 5) node.vz *= -1;

        const sphere = groupRef.current?.children[index] as THREE.Mesh;
        if (sphere) {
          sphere.position.set(node.x, node.y, node.z);
        }
      });
    }

    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0005;
    }
  });

  // Create lines between nodes
  const linePositions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dz = nodes[j].z - nodes[i].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 3) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(positions);
  }, []);

  return (
    <group>
      <group ref={groupRef}>
        {nodes.map((node, index) => (
          <mesh key={index} position={[node.x, node.y, node.z]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#06B6D4" />
          </mesh>
        ))}
      </group>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2563EB" transparent opacity={0.6} />
      </lineSegments>

      <pointLight position={[5, 5, 5]} intensity={1} color="#2563EB" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#06B6D4" />
      <ambientLight intensity={0.3} />
    </group>
  );
};

export const NeuralNetwork: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <NetworkNodes />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;
