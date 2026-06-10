'use client';

/**
 * InteractiveMesh3D.tsx - React Three Fiber 3D Canvas Component
 */

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Octahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += (mouseRef.current.y * 0.3 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mouseRef.current.x * 0.3 - meshRef.current.rotation.y) * 0.05;

      const scale = 1 + Math.sin(Date.now() * 0.001) * 0.02;
      meshRef.current.scale.set(scale, scale, scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  const particleCount = 128;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 8;
    positions[i + 1] = (Math.random() - 0.5) * 8;
    positions[i + 2] = (Math.random() - 0.5) * 8;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return (
    <group ref={meshRef}>
      <Icosahedron args={[2, 4]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#00f2fe"
          emissive="#00a8cc"
          emissiveIntensity={0.4}
          wireframe={false}
          opacity={0.85}
          transparent
        />
      </Icosahedron>

      <Octahedron args={[3, 2]} position={[0, 0, 0]} rotation={[0.5, 0.5, 0]}>
        <meshPhongMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.3}
          wireframe={true}
          opacity={0.4}
          transparent
        />
      </Octahedron>

      <points ref={particlesRef} geometry={geometry}>
        <pointsMaterial
          color="#8b5cf6"
          size={0.08}
          transparent
          opacity={0.6}
        />
      </points>

      <Sphere args={[5, 32, 32]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#030303"
          emissive="#1e0a3f"
          emissiveIntensity={0.2}
          side={THREE.BackSide}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
};

const SceneLighting: React.FC = () => {
  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#8b5cf6" />
      <pointLight position={[3, 2, 3]} intensity={1} color="#00f2fe" distance={20} />
      <pointLight position={[-3, -2, 3]} intensity={0.8} color="#10b981" distance={20} />
      <ambientLight intensity={0.4} color="#64748b" />
    </>
  );
};

export const InteractiveMesh3D: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: 'transparent' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <SceneLighting />
        <AnimatedMesh />
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveMesh3D;
