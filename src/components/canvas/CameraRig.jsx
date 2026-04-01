import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Camera waypoints: cinematic M4 interior angles
const WAYPOINTS = [
    new THREE.Vector3(0, 2, 10),    // Hero  — wide driver's view
    new THREE.Vector3(-3, 0.5, 6.5),   // About — left (driver) side angle
    new THREE.Vector3(3, -0.5, 6),     // Skills — right angled view
    new THREE.Vector3(0, -0.5, 7),     // Specs — straight ahead lower
    new THREE.Vector3(-1, 1.5, 8.5),   // Projects — elevated angle
    new THREE.Vector3(0, 0.5, 9.5),    // Contact — pull back
]

const LOOK_TARGETS = [
    new THREE.Vector3(0, -1.2, 0),
    new THREE.Vector3(-1, -1, -0.5),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(0, -1.5, -1.5),
    new THREE.Vector3(0, -0.8, 0),
    new THREE.Vector3(0, -1, 0),
]

export default function CameraRig({ scrollProgress }) {
    const { camera } = useThree()
    const targetPos = useRef(WAYPOINTS[0].clone())
    const targetLook = useRef(LOOK_TARGETS[0].clone())
    const currentLook = useRef(new THREE.Vector3())

    useFrame((_, delta) => {
        const total = WAYPOINTS.length - 1
        const raw = scrollProgress * total
        const lower = Math.floor(raw)
        const upper = Math.min(lower + 1, total)
        const t = raw - lower

        targetPos.current.lerpVectors(WAYPOINTS[lower], WAYPOINTS[upper], t)
        targetLook.current.lerpVectors(LOOK_TARGETS[lower], LOOK_TARGETS[upper], t)

        camera.position.lerp(targetPos.current, delta * 2.2)
        currentLook.current.lerp(targetLook.current, delta * 2.2)
        camera.lookAt(currentLook.current)
    })

    return null
}
