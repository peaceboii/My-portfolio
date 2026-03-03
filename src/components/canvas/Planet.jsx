import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Planet({ scrollY = 0 }) {
    const meshRef = useRef()
    const glowRef = useRef()
    const ringRef = useRef()

    // Lava-like animated planet surface via vertex displacement
    const shaderArgs = useMemo(() => ({
        vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vNormal = normal;
        vPosition = position;
        float displaced = sin(position.x * 4.0 + uTime) * 0.04
                        + sin(position.y * 3.0 + uTime * 1.3) * 0.04
                        + sin(position.z * 5.0 + uTime * 0.7) * 0.02;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * displaced, 1.0);
      }
    `,
        fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;

      void main() {
        vec3 col1 = vec3(0.48, 0.42, 0.98); // purple
        vec3 col2 = vec3(0.0,  0.81, 1.0);  // cyan
        vec3 col3 = vec3(0.98, 0.49, 0.87); // pink

        float n = sin(vPosition.x * 5.0 + uTime * 0.5) * 0.5 + 0.5;
        float m = sin(vPosition.y * 4.0 + uTime * 0.3) * 0.5 + 0.5;

        vec3 color = mix(mix(col1, col2, n), col3, m * 0.4);

        // Rim lighting
        float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
        rim = pow(rim, 2.5);
        color += rim * col2 * 0.8;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
        uniforms: { uTime: { value: 0 } },
    }), [])

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003
            meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.1
            // Bob up/down
            meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.15
            // Update shader time
            meshRef.current.material.uniforms.uTime.value = clock.elapsedTime
        }
        if (glowRef.current) {
            glowRef.current.position.y = meshRef.current.position.y
            glowRef.current.rotation.y -= 0.001
        }
        if (ringRef.current) {
            ringRef.current.position.y = meshRef.current.position.y
            ringRef.current.rotation.z += 0.001
        }
    })

    return (
        <group>
            {/* Core planet */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2.2, 8]} />
                <shaderMaterial
                    args={[shaderArgs]}
                    side={THREE.FrontSide}
                />
            </mesh>

            {/* Inner glow sphere */}
            <mesh ref={glowRef} scale={1.08}>
                <sphereGeometry args={[2.2, 32, 32]} />
                <meshStandardMaterial
                    color="#7c6cfa"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                    emissive="#7c6cfa"
                    emissiveIntensity={1.5}
                />
            </mesh>

            {/* Planetary ring */}
            <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
                <torusGeometry args={[3.4, 0.12, 8, 80]} />
                <meshStandardMaterial
                    color="#00cfff"
                    emissive="#00cfff"
                    emissiveIntensity={1.2}
                    transparent
                    opacity={0.55}
                />
            </mesh>

            {/* Second thinner ring */}
            <mesh rotation={[Math.PI / 2.2, 0.3, 0]}>
                <torusGeometry args={[3.9, 0.06, 8, 80]} />
                <meshStandardMaterial
                    color="#fa7cdf"
                    emissive="#fa7cdf"
                    emissiveIntensity={1.0}
                    transparent
                    opacity={0.35}
                />
            </mesh>

            {/* Atmospheric point lights */}
            <pointLight position={[0, 0, 4]} intensity={2} color="#7c6cfa" distance={10} />
            <pointLight position={[4, 2, 0]} intensity={1} color="#00cfff" distance={10} />
            <pointLight position={[-4, -2, 0]} intensity={0.8} color="#fa7cdf" distance={10} />
        </group>
    )
}
