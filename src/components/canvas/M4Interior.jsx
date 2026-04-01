import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// BMW M4 Interior — built entirely from Three.js primitives
export default function M4Interior({ scrollProgress = 0 }) {
    const groupRef = useRef()
    const needleRef = useRef()
    const needle2Ref = useRef()
    const glowRef = useRef()

    // Carbon-like dark material
    const carbonMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#111118',
        roughness: 0.3,
        metalness: 0.7,
    }), [])

    const accentBlueMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#0066B2',
        emissive: '#003366',
        emissiveIntensity: 1.2,
        roughness: 0.2,
        metalness: 0.9,
    }), [])

    const accentRedMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#E63946',
        emissive: '#7a1520',
        emissiveIntensity: 1.5,
        roughness: 0.2,
        metalness: 0.5,
    }), [])

    const chromeMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#C8A96E',
        roughness: 0.05,
        metalness: 1.0,
        envMapIntensity: 1.5,
    }), [])

    const glassMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#001a33',
        transparent: true,
        opacity: 0.55,
        roughness: 0.05,
        metalness: 0.1,
        side: THREE.DoubleSide,
    }), [])

    const glowMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#0066B2',
        emissive: '#0066B2',
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0.85,
    }), [])

    useFrame(({ clock }) => {
        const t = clock.elapsedTime
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.12
            groupRef.current.position.y = Math.sin(t * 0.35) * 0.06
        }
        // Tachometer needle sweeps up and settles at ~70%
        if (needleRef.current) {
            const sweep = Math.sin(t * 0.4) * 0.15 + 0.7
            needleRef.current.rotation.z = -Math.PI * 0.75 + sweep * Math.PI * 1.5
        }
        // Speedometer needle
        if (needle2Ref.current) {
            const sweep2 = Math.sin(t * 0.3 + 1) * 0.12 + 0.55
            needle2Ref.current.rotation.z = -Math.PI * 0.75 + sweep2 * Math.PI * 1.5
        }
        // Glow pulse
        if (glowRef.current) {
            glowRef.current.material.emissiveIntensity = 1.5 + Math.sin(t * 2) * 0.5
        }
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]} scale={1}>

            {/* ── Dashboard main body ─────────────────────────────── */}
            <mesh position={[0, -1.2, -1.5]} material={carbonMat}>
                <boxGeometry args={[8, 1.6, 1.2]} />
            </mesh>

            {/* Dashboard curve (upper) */}
            <mesh position={[0, -0.45, -2.2]} rotation={[0.35, 0, 0]} material={carbonMat}>
                <boxGeometry args={[8, 0.7, 1.2]} />
            </mesh>

            {/* Instrument cluster housing */}
            <mesh position={[-1.8, -0.55, -1.6]} rotation={[0.2, 0.08, 0]} material={carbonMat}>
                <cylinderGeometry args={[1.1, 1.15, 0.25, 32]} />
            </mesh>
            <mesh position={[1.8, -0.55, -1.6]} rotation={[0.2, -0.08, 0]} material={carbonMat}>
                <cylinderGeometry args={[1.1, 1.15, 0.25, 32]} />
            </mesh>

            {/* Gauge glass covers */}
            <mesh position={[-1.8, -0.43, -1.6]} rotation={[0.2, 0.08, 0]} material={glassMat}>
                <cylinderGeometry args={[1.05, 1.05, 0.06, 32]} />
            </mesh>
            <mesh position={[1.8, -0.43, -1.6]} rotation={[0.2, -0.08, 0]} material={glassMat}>
                <cylinderGeometry args={[1.05, 1.05, 0.06, 32]} />
            </mesh>

            {/* Tachometer ring (left) */}
            <mesh position={[-1.8, -0.46, -1.6]} rotation={[Math.PI / 2 - 0.2, -0.08, 0]} material={accentRedMat}>
                <torusGeometry args={[0.95, 0.035, 8, 60, Math.PI * 1.5]} />
            </mesh>

            {/* Speedometer ring (right) */}
            <mesh position={[1.8, -0.46, -1.6]} rotation={[Math.PI / 2 - 0.2, 0.08, 0]} material={accentBlueMat}>
                <torusGeometry args={[0.95, 0.035, 8, 60, Math.PI * 1.5]} />
            </mesh>

            {/* Tachometer needle */}
            <mesh
                ref={needleRef}
                position={[-1.8, -0.37, -1.72]}
                rotation={[0.2, 0.08, 0]}
            >
                <boxGeometry args={[0.06, 0.78, 0.04]} />
                <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={2} />
            </mesh>

            {/* Speedometer needle */}
            <mesh
                ref={needle2Ref}
                position={[1.8, -0.37, -1.72]}
                rotation={[0.2, -0.08, 0]}
            >
                <boxGeometry args={[0.06, 0.78, 0.04]} />
                <meshStandardMaterial color="#0066B2" emissive="#0088ff" emissiveIntensity={2} />
            </mesh>

            {/* Centre console / infotainment screen */}
            <mesh position={[0, -0.45, -1.62]} rotation={[0.25, 0, 0]} material={glassMat}>
                <boxGeometry args={[2.8, 1.5, 0.08]} />
            </mesh>

            {/* Screen bezel */}
            <mesh position={[0, -0.45, -1.66]} rotation={[0.25, 0, 0]} material={carbonMat}>
                <boxGeometry args={[2.95, 1.65, 0.06]} />
            </mesh>

            {/* Screen glow plane */}
            <mesh ref={glowRef} position={[0, -0.45, -1.59]} rotation={[0.25, 0, 0]}>
                <boxGeometry args={[2.78, 1.48, 0.01]} />
                <meshStandardMaterial color="#001a66" emissive="#0044bb" emissiveIntensity={1.8} transparent opacity={0.9} />
            </mesh>

            {/* BMW roundel (centre screen) — small glowing torus */}
            <mesh position={[0, -0.18, -1.5]} rotation={[0.25, 0, 0]}>
                <torusGeometry args={[0.22, 0.04, 16, 40]} />
                <meshStandardMaterial color="#0066B2" emissive="#0066B2" emissiveIntensity={3} />
            </mesh>
            <mesh position={[0, -0.18, -1.5]} rotation={[0.25, 0, 0]}>
                <circleGeometry args={[0.18, 40]} />
                <meshStandardMaterial color="#001133" emissive="#002266" emissiveIntensity={2} transparent opacity={0.85} />
            </mesh>

            {/* M-Sport steering wheel main ring */}
            <mesh position={[0, -1.7, -0.2]} rotation={[0.85, 0, 0]}>
                <torusGeometry args={[1.05, 0.09, 16, 60]} />
                <meshStandardMaterial color="#0c0c18" roughness={0.35} metalness={0.6} />
            </mesh>

            {/* Steering wheel M-Sport stripe top */}
            <mesh position={[0, -0.65, -0.2]} rotation={[0.85, 0, 0]}>
                <boxGeometry args={[0.12, 0.45, 0.1]} />
                <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={1.5} />
            </mesh>

            {/* Wheel spokes */}
            {[-0.72, 0.72].map((x, i) => (
                <mesh key={i} position={[x, -1.48, -0.12]} rotation={[0.85, 0, i === 0 ? 0.55 : -0.55]}>
                    <boxGeometry args={[0.08, 0.9, 0.06]} />
                    <meshStandardMaterial color="#111" roughness={0.3} metalness={0.8} />
                </mesh>
            ))}

            {/* Centre hub */}
            <mesh position={[0, -1.48, -0.14]} rotation={[0.85, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.12, 20]} />
                <meshStandardMaterial color="#0066B2" emissive="#0033aa" emissiveIntensity={1.2} roughness={0.2} metalness={0.9} />
            </mesh>

            {/* M-stripe on hub */}
            {[['#E63946', -0.05], ['#7B2FBE', 0], ['#0066B2', 0.05]].map(([color, x], i) => (
                <mesh key={i} position={[x, -1.43, -0.05]} rotation={[0.85, 0, 0]}>
                    <boxGeometry args={[0.025, 0.1, 0.01]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
                </mesh>
            ))}

            {/* Shifter knob */}
            <mesh position={[0.9, -1.55, 0.5]} material={carbonMat}>
                <cylinderGeometry args={[0.12, 0.1, 0.5, 16]} />
            </mesh>
            <mesh position={[0.9, -1.32, 0.5]}>
                <sphereGeometry args={[0.18, 20, 20]} />
                <meshStandardMaterial color="#111" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Seat (driver, stylized) */}
            <mesh position={[-0.8, -3.2, 1.8]} material={carbonMat}>
                <boxGeometry args={[2, 3, 1.2]} />
            </mesh>
            <mesh position={[-0.8, -1.7, 1.5]} rotation={[-0.2, 0, 0]} material={carbonMat}>
                <boxGeometry args={[2, 2.8, 0.4]} />
            </mesh>
            {/* M seat stitching lines */}
            {[-0.2, 0, 0.2].map((z, i) => (
                <mesh key={i} position={[-0.8, -3.17, 1.8 + z]}>
                    <boxGeometry args={[1.8, 0.02, 0.03]} />
                    <meshStandardMaterial color="#0066B2" emissive="#0066B2" emissiveIntensity={0.5} transparent opacity={0.6} />
                </mesh>
            ))}

            {/* Passenger seat */}
            <mesh position={[2.5, -3.2, 1.8]} material={carbonMat}>
                <boxGeometry args={[2, 3, 1.2]} />
            </mesh>
            <mesh position={[2.5, -1.7, 1.5]} rotation={[-0.2, 0, 0]} material={carbonMat}>
                <boxGeometry args={[2, 2.8, 0.4]} />
            </mesh>

            {/* Floor / footwell */}
            <mesh position={[0, -4, 0.5]} material={carbonMat}>
                <boxGeometry args={[8, 0.1, 4]} />
            </mesh>

            {/* Door panels */}
            {[[-4.1, 0], [4.1, 0]].map(([x], i) => (
                <group key={i} position={[x, -1.8, 1]}>
                    <mesh material={carbonMat}>
                        <boxGeometry args={[0.15, 4, 4.5]} />
                    </mesh>
                    {/* Trim strip */}
                    <mesh position={[i === 0 ? 0.06 : -0.06, 0.5, 0]}>
                        <boxGeometry args={[0.04, 0.08, 4.4]} />
                        <meshStandardMaterial color="#C8A96E" emissive="#5a3a00" emissiveIntensity={0.5} roughness={0.1} metalness={1} />
                    </mesh>
                    {/* Door handle */}
                    <mesh position={[i === 0 ? 0.12 : -0.12, 0, -0.5]}>
                        <boxGeometry args={[0.06, 0.08, 0.5]} />
                        <meshStandardMaterial color="#C8A96E" roughness={0.05} metalness={1} />
                    </mesh>
                </group>
            ))}

            {/* Ambient LED strip — dashboard underside */}
            <mesh position={[0, -2.1, -0.9]}>
                <boxGeometry args={[7.5, 0.04, 0.04]} />
                <meshStandardMaterial color="#0066B2" emissive="#0066B2" emissiveIntensity={3} transparent opacity={0.9} />
            </mesh>

            {/* Ambient LED strip — door sills */}
            {[-3.5, 3.5].map((x, i) => (
                <mesh key={i} position={[x, -3.8, 1.5]}>
                    <boxGeometry args={[0.04, 0.04, 4]} />
                    <meshStandardMaterial color="#E63946" emissive="#E63946" emissiveIntensity={2.5} transparent opacity={0.85} />
                </mesh>
            ))}

            {/* Sunroof outline glow */}
            <mesh position={[0, 2.0, 1]}>
                <boxGeometry args={[4, 0.04, 2.5]} />
                <meshStandardMaterial color="#0066B2" emissive="#0066B2" emissiveIntensity={1.2} transparent opacity={0.5} />
            </mesh>

            {/* Lighting */}
            <pointLight position={[0, -0.5, -1.2]} intensity={3} color="#0055bb" distance={8} />
            <pointLight position={[0, -2, 0]} intensity={1.5} color="#E63946" distance={6} />
            <pointLight position={[-2, 0.5, 0]} intensity={1.2} color="#C8A96E" distance={8} />
            <pointLight position={[0, -0.4, -1.55]} intensity={4} color="#002299" distance={4} />
        </group>
    )
}
