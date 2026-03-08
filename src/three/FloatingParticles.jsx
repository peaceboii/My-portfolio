import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles({ count = 150 }) {
    const meshRef = useRef();

    // Generate random positions and colors for particles
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const color1 = new THREE.Color('#00f3ff');
        const color2 = new THREE.Color('#bc13fe');

        for (let i = 0; i < count; i++) {
            // Random positions in a cylinder-like area
            const r = 2 + Math.random() * 8;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 15;

            temp[i * 3] = r * Math.cos(theta);
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = r * Math.sin(theta);

            // Randomly mix the two neon colors
            const mixedColor = color1.clone().lerp(color2, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { positions: temp, colors };
    }, [count]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particles.colors.length / 3}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
