"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Molecule() {
  return (
    <group>
      {/* central sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#7850ff" emissive="#7850ff" emissiveIntensity={0.6} />
      </mesh>

      {/* orbit spheres */}
      {[2.5, -2.5].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

export default function Molecule3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />

      <Molecule />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}