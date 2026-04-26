// components/Loader3D.js
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function AnimatedLogo3D() {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.02;
      ring1Ref.current.rotation.x += 0.01;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += 0.015;
      ring2Ref.current.rotation.x += 0.005;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += 0.01;
      ring3Ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center Core */}
      <Sphere args={[0.8, 64, 64]}>
        <meshStandardMaterial 
          color="#7850ff" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#3a0a8a"
          emissiveIntensity={0.6}
        />
      </Sphere>
      
      {/* Outer Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.3, 0.06, 64, 200]} />
        <meshStandardMaterial color="#7850ff" metalness={0.8} roughness={0.2} emissive="#7850ff" emissiveIntensity={0.3} />
      </mesh>
      
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 64, 200]} />
        <meshStandardMaterial color="#a855f7" metalness={0.7} roughness={0.3} emissive="#a855f7" emissiveIntensity={0.2} />
      </mesh>
      
      <mesh ref={ring3Ref} rotation={[Math.PI / 3, Math.PI / 2, 0]}>
        <torusGeometry args={[1.4, 0.05, 64, 200]} />
        <meshStandardMaterial color="#22c55e" metalness={0.6} roughness={0.4} emissive="#22c55e" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function Loader3D() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "#000000",
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#7850ff" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        
        <AnimatedLogo3D />
        <Sparkles count={150} scale={[10, 10, 10]} size={0.08} color="#7850ff" opacity={0.4} />
        
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      
      {/* Loading Text */}
      <div style={{
        position: "absolute",
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
      }}>
        <div style={{
          width: "60px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #7850ff, transparent)",
          marginBottom: "12px",
          animation: "scan 1s ease-in-out infinite",
        }} />
        <p style={{
          color: "#9ca3af",
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}>
          LOADING
        </p>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-20px); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}