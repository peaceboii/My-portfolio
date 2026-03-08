import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataParticles({ count = 200 }) {
    const meshRef = useRef();

    // Generate random positions resembling a dense data point cloud
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const colorPrimary = new THREE.Color('#22c55e'); // Quant green
        const colorAccent = new THREE.Color('#06b6d4');  // Quant cyan

        for (let i = 0; i < count; i++) {
            // Cylindrical spread targeting the avatar's area
            const r = 1.5 + Math.random() * 8;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 10;

            temp[i * 3] = r * Math.cos(theta);
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = r * Math.sin(theta);

            // Randomly mix colors
            const mixedColor = colorPrimary.clone().lerp(colorAccent, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { positions: temp, colors };
    }, [count]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Slow rotation like a data vortex
            meshRef.current.rotation.y -= delta * 0.08;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
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
            {/* Box shapes to resemble data chunks/pixels */}
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
