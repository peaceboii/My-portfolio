import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars as DreiStars } from '@react-three/drei'

export default function Stars() {
    const groupRef = useRef()

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.008
            groupRef.current.rotation.x += delta * 0.002
        }
    })

    return (
        <group ref={groupRef}>
            <DreiStars
                radius={120}
                depth={60}
                count={6000}
                factor={5}
                saturation={0.2}
                fade
                speed={0.5}
            />
        </group>
    )
}
