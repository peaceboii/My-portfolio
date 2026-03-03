import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, AdaptiveDpr } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import Stars from './Stars'
import Planet from './Planet'
import Satellites from './Satellites'
import CameraRig from './CameraRig'

export default function SpaceCanvas({ scrollProgress }) {
    return (
        <div id="canvas-root">
            <Canvas
                camera={{ fov: 45, position: [0, 0, 18], near: 0.1, far: 300 }}
                gl={{ antialias: true, alpha: false }}
                shadows={false}
                dpr={[1, 2]}
            >
                {/* Adaptive performance */}
                <PerformanceMonitor>
                    <AdaptiveDpr pixelated />
                </PerformanceMonitor>

                {/* Ambient light */}
                <ambientLight intensity={0.15} color="#1a1040" />
                <directionalLight position={[10, 10, 5]} intensity={0.3} color="#ffffff" />

                <Suspense fallback={null}>
                    <Stars />
                    <Planet scrollProgress={scrollProgress} />
                    <Satellites />
                    <CameraRig scrollProgress={scrollProgress} />

                    {/* Post-processing */}
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.15}
                            luminanceSmoothing={0.9}
                            intensity={1.8}
                            mipmapBlur
                        />
                        <Vignette offset={0.3} darkness={0.7} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    )
}
