import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import Avatar from './Avatar';
import TradingGridFloor from './TradingGridFloor';
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
            {/* Dark studio lighting with rim and neon accents */}
            <ambientLight intensity={0.4} color="#111827" />
            <directionalLight position={[0, 10, 5]} intensity={1.5} color="#22c55e" /> {/* Green top light */}
            <directionalLight position={[-5, 5, -5]} intensity={2.5} color="#3b82f6" /> {/* Blue rim light */}

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
            <TradingGridFloor />
            <DataParticles count={150} />
        </>
    );
}
