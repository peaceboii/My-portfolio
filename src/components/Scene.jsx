import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';
import Avatar from './Avatar';

export default function Scene() {
    const asteroidRef = useRef();
    const ringRef = useRef();
    const orbiterRefs = useRef([]);

    const orbiters = useMemo(
        () => Array.from({ length: 10 }, (_, index) => ({
            angle: (Math.PI * 2 * index) / 10,
            radius: 2.9 + (index % 3) * 0.35,
            speed: 0.45 + index * 0.03,
            height: -0.1 + (index % 2) * 0.15,
            size: 0.04 + (index % 4) * 0.012,
        })),
        []
    );

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (asteroidRef.current) {
            asteroidRef.current.rotation.y += 0.0018;
            asteroidRef.current.position.y = -0.6 + Math.sin(time * 0.8) * 0.04;
        }

        if (ringRef.current) {
            ringRef.current.rotation.z = time * 0.2;
            const pulse = 0.24 + Math.sin(time * 2) * 0.06;
            ringRef.current.material.opacity = pulse;
        }

        orbiterRefs.current.forEach((mesh, index) => {
            if (!mesh) {
                return;
            }
            const orb = orbiters[index];
            const angle = time * orb.speed + orb.angle;
            mesh.position.x = Math.cos(angle) * orb.radius;
            mesh.position.z = Math.sin(angle) * orb.radius;
            mesh.position.y = orb.height + Math.sin(time * 2 + index) * 0.08;
        });
    });

    return (
        <>
            <ambientLight intensity={0.42} color="#A8C4EC" />
            <directionalLight position={[5, 9, 6]} intensity={1.2} color="#0474C4" castShadow />
            <directionalLight position={[-5, 4, -4]} intensity={0.68} color="#5379AE" />
            <pointLight position={[0, 2, 2]} intensity={1} color="#A8C4EC" />
            <pointLight position={[0, -1.2, 0]} intensity={0.45} color="#2C444C" />

            <Stars radius={95} depth={52} count={5200} factor={4} saturation={0} fade speed={1.2} />
            <Sparkles count={170} scale={13} size={2.2} speed={0.45} opacity={0.4} color="#A8C4EC" />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.65}>
                <group position={[0, -1, 0]}>
                    <mesh ref={asteroidRef} position={[0, -0.6, 0]} receiveShadow>
                        <cylinderGeometry args={[2.5, 1.1, 1, 8]} />
                        <meshStandardMaterial color="#2C444C" roughness={0.88} metalness={0.16} flatShading />
                    </mesh>

                    <mesh ref={ringRef} position={[0, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[3.1, 0.03, 18, 120]} />
                        <meshBasicMaterial color="#A8C4EC" transparent opacity={0.24} />
                    </mesh>

                    {orbiters.map((orb, index) => (
                        <mesh
                            key={index}
                            ref={(element) => {
                                orbiterRefs.current[index] = element;
                            }}
                        >
                            <sphereGeometry args={[orb.size, 16, 16]} />
                            <meshStandardMaterial color={index % 2 ? '#5379AE' : '#0474C4'} emissive="#06457F" emissiveIntensity={0.45} />
                        </mesh>
                    ))}

                    <Avatar />
                </group>
            </Float>
        </>
    );
}
