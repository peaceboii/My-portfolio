import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, Stars } from '@react-three/drei';
import Avatar from './Avatar';
import GridFloor from './GridFloor';
import FloatingParticles from './FloatingParticles';

export default function Scene() {
    const group = useRef();

    useFrame((state) => {
        // Subtle overall scene breathing/movement
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 10;
        group.current.position.y = Math.sin(t / 1.5) / 10;
    });

    return (
        <group ref={group}>
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00f3ff" />
            <directionalLight position={[-5, 5, -5]} intensity={2} color="#bc13fe" />

            {/* Environment & Background */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            {/* Scene Content */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Avatar />
            </Float>

            <GridFloor />
            <FloatingParticles />
        </group>
    );
}
