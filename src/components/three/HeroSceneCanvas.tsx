"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function AbstractShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.14;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.3}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <MeshDistortMaterial
          color="#00c8d7"
          emissive="#00c8d7"
          emissiveIntensity={0.18}
          roughness={0.2}
          metalness={0.4}
          distort={0.32}
          speed={1.4}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y -= delta * 0.2;
  });
  return (
    <mesh ref={meshRef} scale={0.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#6ee7f9" emissive="#6ee7f9" emissiveIntensity={0.4} roughness={0.3} />
    </mesh>
  );
}

export default function HeroSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#6ee7f9" />
      <pointLight position={[-4, -3, -2]} intensity={0.7} color="#00c8d7" />
      <AbstractShape />
      <InnerCore />
      <Sparkles count={45} scale={5.2} size={1.8} speed={0.3} color="#6ee7f9" opacity={0.5} />
    </Canvas>
  );
}
