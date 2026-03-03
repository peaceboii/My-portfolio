import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Sphere } from '@react-three/drei'

const SATELLITES = [
    { id: 'about', label: '◉ About', radius: 5.2, speed: 0.35, phase: 0, inclination: 0.28, color: '#7c6cfa', href: '#about' },
    { id: 'skills', label: '◈ Skills', radius: 6.5, speed: 0.25, phase: Math.PI / 2, inclination: -0.22, color: '#00cfff', href: '#skills' },
    { id: 'projects', label: '◆ Projects', radius: 7.8, speed: 0.18, phase: Math.PI, inclination: 0.35, color: '#fa7cdf', href: '#projects' },
    { id: 'contact', label: '★ Contact', radius: 5.8, speed: 0.30, phase: Math.PI * 1.5, inclination: -0.15, color: '#ffd93d', href: '#contact' },
]

function SatelliteNode({ label, radius, speed, phase, inclination, color, href }) {
    const meshRef = useRef()
    const trailRef = useRef([])

    useFrame(({ clock }) => {
        const t = clock.elapsedTime * speed + phase
        if (meshRef.current) {
            meshRef.current.position.x = Math.cos(t) * radius
            meshRef.current.position.y = Math.sin(t) * Math.sin(inclination) * radius * 0.6
            meshRef.current.position.z = Math.sin(t) * radius * 0.7
            meshRef.current.rotation.y += 0.02
        }
    })

    const handleClick = () => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                roughness={0.2}
                metalness={0.8}
            />
            {/* Satellite glow */}
            <pointLight
                color={color}
                intensity={0.6}
                distance={3}
            />
            <Html center distanceFactor={12} zIndexRange={[1, 0]}>
                <div className="orbit-label" onClick={handleClick} style={{ borderColor: color + '55' }}>
                    {label}
                </div>
            </Html>
        </mesh>
    )
}

export default function Satellites() {
    return (
        <group>
            {SATELLITES.map((s) => (
                <SatelliteNode key={s.id} {...s} />
            ))}
        </group>
    )
}

export { SATELLITES }
