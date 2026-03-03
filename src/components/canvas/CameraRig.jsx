import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Camera waypoints per scroll section (0 = hero, 1 = about, etc.)
const WAYPOINTS = [
    new THREE.Vector3(0, 0, 18),    // Hero
    new THREE.Vector3(-8, 2, 14),   // About
    new THREE.Vector3(8, -2, 13),   // Skills
    new THREE.Vector3(0, 5, 11),    // Projects
    new THREE.Vector3(0, -4, 15),   // Contact
]

const LOOK_TARGETS = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0.5, 0),
    new THREE.Vector3(0, -0.5, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, -1, 0),
]

const lerpV3 = (a, b, t) => a.clone().lerp(b, t)

export default function CameraRig({ scrollProgress }) {
    const { camera } = useThree()
    const targetPos = useRef(WAYPOINTS[0].clone())
    const targetLook = useRef(LOOK_TARGETS[0].clone())
    const currentLook = useRef(new THREE.Vector3())

    useFrame((_, delta) => {
        const totalSections = WAYPOINTS.length - 1
        const rawIndex = scrollProgress * totalSections
        const lower = Math.floor(rawIndex)
        const upper = Math.min(lower + 1, totalSections)
        const t = rawIndex - lower

        // Smooth between two waypoints
        targetPos.current.copy(lerpV3(WAYPOINTS[lower], WAYPOINTS[upper], t))
        targetLook.current.copy(lerpV3(LOOK_TARGETS[lower], LOOK_TARGETS[upper], t))

        // Lerp camera position smoothly
        camera.position.lerp(targetPos.current, delta * 2.5)

        // Smooth look-at
        currentLook.current.lerp(targetLook.current, delta * 2.5)
        camera.lookAt(currentLook.current)
    })

    return null
}
