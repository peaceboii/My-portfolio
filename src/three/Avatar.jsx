import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Avatar(props) {
    const avatarRef = useRef();

    useFrame((state) => {
        // Subtle breathing animation and idle orbiting
        const t = state.clock.getElapsedTime();
        if (avatarRef.current) {
            avatarRef.current.scale.y = 1.5 + Math.sin(t * 1.5) * 0.02; // Base scale is 1.5
            avatarRef.current.rotation.y = Math.sin(t / 4) * 0.1; // Slight twist
        }
    });

    try {
        const { scene } = useGLTF('/assets/model.glb');
        return (
            <group ref={avatarRef} {...props}>
                <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} castShadow receiveShadow />
            </group>
        );
    } catch (error) {
        console.warn("Avatar GLB not found, using placeholder.");
        return (
            <group ref={avatarRef} {...props} position={[0, 0, 0]}>
                <mesh castShadow receiveShadow>
                    <capsuleGeometry args={[0.5, 1, 4, 16]} />
                    <meshStandardMaterial color="#22c55e" wireframe />
                </mesh>
            </group>
        );
    }
}

useGLTF.preload('/assets/model.glb');
