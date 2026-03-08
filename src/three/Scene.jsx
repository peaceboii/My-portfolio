import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import Avatar from './Avatar';
import LabGridFloor from './LabGridFloor';
import DataParticles from './DataParticles';
import HolographicPanels from './HolographicPanels';

export default function Scene() {
    const group = useRef();

    useFrame((state) => {
        // Subtle overall scene breathing/movement
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.position.y = Math.sin(t / 1.5) / 10;
        }
    });

    return (
        <>
            {/* Brightened studio lighting for visibility while maintaining lab vibe */}
            <ambientLight intensity={1.5} color="#ffffff" />
            <directionalLight position={[0, 10, 5]} intensity={2.5} color="#ffffff" /> {/* Main white fill */}
            <directionalLight position={[0, 2, 8]} intensity={2.0} color="#e5e7eb" /> {/* Front face light */}
            <directionalLight position={[-5, 5, -5]} intensity={3} color="#06b6d4" /> {/* Cyan rim light */}

            <group ref={group} position={[0, -1, 0]}>
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Avatar />
                    <HolographicPanels />
                </Float>
            </group>

            {/* Ground Shadow positioned just above the grid floor */}
            <ContactShadows
                position={[0, -1.45, 0]}
                opacity={0.8}
                scale={15}
                blur={2}
                far={4}
                resolution={256}
                color="#000000"
            />

            {/* Background/Environment Elements */}
            <LabGridFloor />
            <DataParticles count={150} />
        </>
    );
}
