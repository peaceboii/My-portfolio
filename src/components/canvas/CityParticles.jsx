import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// City light particles instead of stars — automotive atmosphere
export default function CityParticles() {
    const pointsRef = useRef()
    const count = 3000

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const palette = [
            [1.0, 0.4, 0.2],  // warm amber
            [0.0, 0.4, 0.9],  // cold blue
            [1.0, 1.0, 0.9],  // white
            [0.8, 0.3, 0.9],  // purple
        ]
        for (let i = 0; i < count; i++) {
            const radius = 30 + Math.random() * 80
            const theta = Math.random() * Math.PI * 2
            const phi = (Math.random() - 0.5) * Math.PI

            positions[i * 3] = radius * Math.cos(phi) * Math.cos(theta)
            positions[i * 3 + 1] = radius * Math.sin(phi) * 0.4 - 10
            positions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta)

            const [r, g, b] = palette[Math.floor(Math.random() * palette.length)]
            colors[i * 3] = r
            colors[i * 3 + 1] = g
            colors[i * 3 + 2] = b
        }
        return { positions, colors }
    }, [])

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.elapsedTime * 0.012
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.18}
                vertexColors
                transparent
                opacity={0.75}
                sizeAttenuation
            />
        </points>
    )
}
