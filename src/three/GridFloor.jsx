import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GridFloor() {
    const gridRef = useRef();

    useFrame((state) => {
        // Animate the grid movement along the Z-axis to create a scrolling effect
        const t = state.clock.getElapsedTime();
        if (gridRef.current) {
            // Modulo to loop the movement seamlessly
            gridRef.current.position.z = (t * 0.5) % 1;
        }
    });

    return (
        <group position={[0, -2, 0]}>
            {/* Black floor to block objects below */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#0a0a0f" />
            </mesh>

            {/* Neon glowing grid */}
            <gridHelper
                ref={gridRef}
                args={[100, 100, '#bc13fe', '#004455']}
                position={[0, 0, 0]}
            />
        </group>
    );
}
