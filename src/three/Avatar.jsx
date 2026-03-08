import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ErrorBoundary } from '../components/ErrorBoundary';

function AvatarModel() {
    const { scene, animations } = useGLTF('/assets/model.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Play the first available animation
        const actionNames = Object.keys(actions);
        if (actionNames.length > 0) {
            actions[actionNames[0]].play();
        }
    }, [actions]);

    return <primitive object={scene} scale={2.4} position={[0, -2.4, 0]} castShadow receiveShadow />;
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
