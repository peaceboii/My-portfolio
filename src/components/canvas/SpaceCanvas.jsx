import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, AdaptiveDpr, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import CityParticles from './CityParticles'
import M4Interior from './M4Interior'
import HUDOrbiters from './HUDOrbiters'
import CameraRig from './CameraRig'

export default function SpaceCanvas({ scrollProgress }) {
    return (
        <div id="canvas-root">
            <Canvas
                camera={{ fov: 55, position: [0, 2, 10], near: 0.1, far: 300 }}
                gl={{ antialias: true, alpha: false, toneMapping: 4, toneMappingExposure: 1.1 }}
                shadows={false}
                dpr={[1, 2]}
            >
                <PerformanceMonitor>
                    <AdaptiveDpr pixelated />
                </PerformanceMonitor>

                {/* Scene lighting */}
                <ambientLight intensity={0.08} color="#050510" />
                <directionalLight position={[5, 8, 5]} intensity={0.4} color="#8ab4ff" />
                <directionalLight position={[-5, -2, -5]} intensity={0.15} color="#ff4466" />

                <Suspense fallback={null}>
                    <CityParticles />
                    <M4Interior scrollProgress={scrollProgress} />
                    <HUDOrbiters />
                    <CameraRig scrollProgress={scrollProgress} />

                    <EffectComposer>
                        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.85} intensity={2.2} mipmapBlur />
                        <ChromaticAberration offset={new Vector2(0.0008, 0.0008)} />
                        <Vignette offset={0.25} darkness={0.8} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    )
}
