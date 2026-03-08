import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Avatar(props) {
    // Try to load the model. If it's missing, useGLTF will throw an error caught by Suspense,
    // but if the path is genuinely 404, we want a fallback.
    // We'll wrap the actual model in a separate component to handle useGLTF gracefully if possible.
    // Actually, Vite public assets are served at root.

    try {
        const { scene } = useGLTF('/assets/avatar.glb');
        return <primitive object={scene} {...props} scale={1.5} position={[0, -1.5, 0]} />;
    } catch (error) {
        // Fallback simple mesh if the GLB is not found yet
        console.warn("Avatar GLB not found, using placeholder.");
        return (
            <mesh position={[0, 0, 0]} {...props}>
                <capsuleGeometry args={[0.5, 1, 4, 16]} />
                <meshStandardMaterial color="#00f3ff" wireframe />
            </mesh>
        );
    }
}

// Preload to avoid hanging on first render if it exists
useGLTF.preload('/assets/avatar.glb');
