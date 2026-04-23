// components/3DMolecule.js
"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple rotating sphere with rings
function SimpleMolecule() {
  const groupRef = useRef();
  const ringRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.003;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01;
      ringRef.current.rotation.x += 0.005;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <Sphere args={[0.9, 64, 64]}>
        <meshStandardMaterial 
          color="#7850ff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#3a0a8a"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      {/* Orbiting ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.05, 64, 200]} />
        <meshStandardMaterial color="#7850ff" emissive="#7850ff" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Second ring at angle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 64, 200]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Third ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 2, 0]}>
        <torusGeometry args={[1.5, 0.05, 64, 200]} />
        <meshStandardMaterial color="#ff3c3c" emissive="#ff3c3c" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Small orbiting spheres */}
      <Sphere position={[2, 0, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#ff3c3c" emissive="#ff3c3c" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[-2, 0, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0, 2, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#008cff" emissive="#008cff" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0, -2, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
}

// Floating particles
function FloatingParticles() {
  const particlesRef = useRef();
  const particleCount = 500;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
  }
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7850ff" size={0.03} transparent opacity={0.4} />
    </points>
  );
}

export default function ThreeDMolecule() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div style={{
      position: "absolute",
      right: "5%",
      top: "50%",
      transform: "translateY(-50%)",
      width: "450px",
      height: "450px",
      zIndex: 5,
      pointerEvents: "none",
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7850ff" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        <SimpleMolecule />
        <FloatingParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}