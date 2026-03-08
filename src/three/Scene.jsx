import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import Avatar from './Avatar';

export default function Scene() {
    const group = useRef();

    useFrame((state) => {
        // Subtle rotation and bobbing for the avatar group
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.y = Math.sin(t / 4) / 8;
            group.current.position.y = Math.sin(t / 2) / 10;
        }
    });

    return (
        <>
            {/* Soft Studio Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[2, 5, 2]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Optional: Gives soft environmental reflections */}
            <Environment preset="city" />

            <group ref={group} position={[0, -1, 0]}>
                <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Avatar />
                </Float>
            </group>

            {/* Ground Shadow */}
            <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4}
                resolution={256}
                color="#000000"
            />
        </>
    );
}
