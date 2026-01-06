"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x += 0.005 * speed;
        mesh.current.rotation.y += 0.006 * speed;
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.2}
                    roughness={0.1}
                    transmission={0.6}
                    thickness={0.5}
                    clearcoat={1}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#1A56DB" />

                {/* Floating Shapes */}
                <FloatingShape position={[3, 1, 0]} color="#1A56DB" speed={1.5} />
                <FloatingShape position={[-3, -1, 1]} color="#22c55e" speed={2} />
                <FloatingShape position={[-2, 2, -2]} color="#60a5fa" speed={1} />
                <FloatingShape position={[2, -2, -1]} color="#1A56DB" speed={1.2} />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
