// components/LogoLoader.js
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Sparkles, Text3D } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Custom 3D Logo Component
function AnimatedLogo() {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation
      groupRef.current.rotation.y += 0.008;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
      
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ring */}
      <mesh>
        <torusGeometry args={[1.4, 0.08, 64, 200]} />
        <meshStandardMaterial 
          color="#7850ff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#3a0a8a"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Second Ring at angle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.4, 0.06, 64, 200]} />
        <meshStandardMaterial 
          color="#a855f7" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#4a1a9a"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Third Ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 2, 0]}>
        <torusGeometry args={[1.4, 0.06, 64, 200]} />
        <meshStandardMaterial 
          color="#22c55e" 
          metalness={0.6} 
          roughness={0.4}
          emissive="#0a5a2a"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Center Sphere / Core Logo */}
      <mesh>
        <sphereGeometry args={[0.7, 64, 64]} />
        <meshStandardMaterial 
          color="#7850ff" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#2a0a5a"
          emissiveIntensity={0.6}
        />
      </mesh>
      
      {/* Floating Particles Around Logo */}
      {[...Array(30)].map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const radius = 1.9;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle + Date.now() * 0.002) * radius,
              Math.sin(angle * 2 + Date.now() * 0.003) * radius * 0.5,
              Math.sin(angle + Date.now() * 0.002) * radius,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#a855f7" emissive="#7850ff" emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

// Floating Text "MEDIWILL"
function FloatingText() {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });
  
  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.3}
      height={0.05}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelSegments={5}
      position={[0, -1.2, 0]}
    >
      MEDIWILL
      <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} emissive="#7850ff" emissiveIntensity={0.2} />
    </Text3D>
  );
}

// Loading Text with Glow
function LoadingText() {
  const [opacity, setOpacity] = useState(0.4);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prev => prev === 0.4 ? 1 : 0.4);
    }, 800);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div style={{
      position: "absolute",
      bottom: "80px",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
    }}>
      <p style={{
        color: "#9ca3af",
        fontSize: "12px",
        letterSpacing: "6px",
        textTransform: "uppercase",
        opacity: opacity,
        transition: "opacity 0.8s ease",
      }}>
        LOADING
      </p>
      <div style={{
        width: "60px",
        height: "2px",
        background: "linear-gradient(90deg, transparent, #7850ff, transparent)",
        marginTop: "12px",
        animation: "scan 1.5s ease-in-out infinite",
      }} />
      
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Main Component
export default function LogoLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          background: "#000",
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#7850ff" />
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#22c55e" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        {/* Main 3D Logo */}
        <AnimatedLogo />
        
        {/* Floating Text */}
        <FloatingText />
        
        {/* Sparkles Effect */}
        <Sparkles 
          count={200} 
          scale={[8, 8, 8]} 
          size={0.1} 
          color="#7850ff" 
          opacity={0.4}
        />
        
        {/* Camera Controls - Disabled for loader */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
        />
      </Canvas>
      
      {/* Loading Text Overlay */}
      <LoadingText />
    </div>
  );
}