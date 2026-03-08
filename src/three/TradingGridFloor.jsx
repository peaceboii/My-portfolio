import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function TradingGridFloor() {
    const gridRef = useRef();

    useFrame((state) => {
        // Smooth infinite scroll towards the camera like a data stream
        const t = state.clock.getElapsedTime();
        if (gridRef.current) {
            gridRef.current.position.z = (t * 0.5) % 1;
        }
    });

    return (
        <group position={[0, -1.5, 0]}>
            {/* Black floor to block objects below */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#0b0f19" />
            </mesh>

            {/* Subtle green/cyan trading grid */}
            <gridHelper
                ref={gridRef}
                args={[100, 100, '#06b6d4', '#22c55e']}
                position={[0, 0, 0]}
            />
        </group>
    );
}
