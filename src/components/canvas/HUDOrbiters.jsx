import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

// HUD data panels that orbit the M4 interior
const HUD_NODES = [
    { id: 'about', label: 'DRIVER PROFILE', radius: 6, speed: 0.22, phase: 0, inclination: 0.2, color: '#0066B2' },
    { id: 'skills', label: 'TECH STACK', radius: 7.5, speed: 0.16, phase: Math.PI / 2, inclination: -0.3, color: '#C8A96E' },
    { id: 'specs', label: 'M4 SPECS', radius: 8.5, speed: 0.12, phase: Math.PI, inclination: 0.4, color: '#E63946' },
    { id: 'projects', label: 'PROJECTS', radius: 6.8, speed: 0.19, phase: Math.PI * 1.5, inclination: -0.2, color: '#7B2FBE' },
]

function HUDNode({ label, radius, speed, phase, inclination, color, href }) {
    const ref = useRef()

    useFrame(({ clock }) => {
        const t = clock.elapsedTime * speed + phase
        if (ref.current) {
            ref.current.position.x = Math.cos(t) * radius
            ref.current.position.y = Math.sin(t) * radius * Math.sin(inclination) * 0.5
            ref.current.position.z = Math.sin(t) * radius * 0.6
            ref.current.rotation.y += 0.015
        }
    })

    const handleClick = () => {
        const el = document.querySelector(href || `#${label.toLowerCase().replace(/ /g, '-')}`)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <mesh ref={ref}>
            <boxGeometry args={[0.18, 0.18, 0.18]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} roughness={0.1} metalness={0.8} />
            <pointLight color={color} intensity={0.5} distance={3} />
            <Html center distanceFactor={14} zIndexRange={[1, 0]}>
                <div
                    className="orbit-label"
                    onClick={handleClick}
                    style={{ borderColor: color + '66', color: '#fff' }}
                >
                    {label}
                </div>
            </Html>
        </mesh>
    )
}

export default function HUDOrbiters() {
    const hrefs = { 'about': '#about', 'skills': '#skills', 'specs': '#specs', 'projects': '#projects' }
    return (
        <group>
            {HUD_NODES.map((n) => (
                <HUDNode key={n.id} {...n} href={hrefs[n.id]} />
            ))}
        </group>
    )
}
