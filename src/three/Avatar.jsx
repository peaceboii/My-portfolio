import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ErrorBoundary } from '../components/ErrorBoundary';

function AvatarModel() {
    const { scene } = useGLTF('/assets/model.glb');
    return <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} castShadow receiveShadow />;
}

function AvatarPlaceholder() {
    return (
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
            <capsuleGeometry args={[0.5, 1, 4, 16]} />
            <meshStandardMaterial color="#2563eb" wireframe emissive="#2563eb" emissiveIntensity={0.5} />
        </mesh>
    );
}

export default function Avatar(props) {
    const avatarRef = useRef();

    useFrame((state) => {
        // Noticeable breathing animation and idle orbiting
        const t = state.clock.getElapsedTime();
        if (avatarRef.current) {
            // More pronounced breathing
            avatarRef.current.scale.y = 1 + Math.sin(t * 2) * 0.05;
            avatarRef.current.scale.x = 1 + Math.sin(t * 2 + Math.PI) * 0.02;
            avatarRef.current.scale.z = 1 + Math.sin(t * 2 + Math.PI) * 0.02;

            // Continuous slow rotation like a 3D showcase
            avatarRef.current.rotation.y += 0.005;

            // Floating up and down
            avatarRef.current.position.y = Math.sin(t) * 0.1;
        }
    });

    return (
        <group ref={avatarRef} {...props}>
            <ErrorBoundary fallback={<AvatarPlaceholder />}>
                <AvatarModel />
            </ErrorBoundary>
        </group>
    );
}
