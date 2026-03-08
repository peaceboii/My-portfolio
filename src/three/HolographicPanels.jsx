import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const panelsData = [
    { text: 'PYTHON', radius: 3, speed: 0.5, yOffset: 0.5, color: '#2563eb' },
    { text: 'APIs', radius: 2.5, speed: -0.6, yOffset: 1.5, color: '#06b6d4' },
    { text: 'DATA', radius: 3.5, speed: 0.4, yOffset: -0.5, color: '#2563eb' },
    { text: 'FINANCE', radius: 2.8, speed: -0.5, yOffset: 2, color: '#e5e7eb' },
];

export default function HolographicPanels() {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            // Orbiting logic handled individually by children, but we can give the whole group a slight bob
            groupRef.current.position.y = Math.sin(t) * 0.1;
        }
    });

    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            {panelsData.map((panel, idx) => (
                <OrbitingPanel key={idx} {...panel} index={idx} />
            ))}
        </group>
    );
}

function OrbitingPanel({ text, radius, speed, yOffset, color, index }) {
    const panelRef = useRef();
    // Offset start position so they don't clump
    const startAngle = index * (Math.PI * 2 / 4);

    useFrame((state) => {
        if (panelRef.current) {
            const t = state.clock.getElapsedTime();
            const currentAngle = startAngle + (t * speed);

            panelRef.current.position.x = Math.cos(currentAngle) * radius;
            panelRef.current.position.z = Math.sin(currentAngle) * radius;
            // Make them always face the center/camera somewhat
            panelRef.current.lookAt(0, yOffset, 0);
        }
    });

    return (
        <group ref={panelRef} position={[0, yOffset, 0]}>
            {/* Background panel */}
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[1.5, 0.4]} />
                <meshBasicMaterial color="#111827" transparent opacity={0.6} side={2} />
            </mesh>
            {/* Glowing Border */}
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[1.52, 0.42]} />
                <meshBasicMaterial color={color} transparent opacity={0.3} side={2} />
            </mesh>
            {/* Text */}
            <Text
                color={color}
                fontSize={0.2}
                maxWidth={2}
                lineHeight={1}
                letterSpacing={0.05}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </group>
    );
}
