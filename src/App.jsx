import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, Loader } from '@react-three/drei';
import Scene from './components/Scene';
import CameraController from './components/CameraController';
import PortfolioPanels from './components/PortfolioPanels';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="w-full h-screen relative bg-dark-bg text-white overflow-hidden">
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="bg-orb orb-one" />
                <div className="bg-orb orb-two" />
                <div className="bg-orb orb-three" />
                <div className="grid-overlay" />
            </div>

            <Navbar />

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 1.5, 6], fov: 45 }}
                    gl={{ antialias: true, alpha: false }}
                    dpr={[1, 2]}
                >
                    <color attach="background" args={['#262B40']} />
                    <Suspense fallback={null}>
                        <Scene />
                        <CameraController />
                        <Preload all />
                    </Suspense>
                </Canvas>
            </div>

            {/* 2D UI Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <PortfolioPanels />
            </div>

            {/* Loading Screen */}
            <Loader
                containerStyles={{ background: '#262B40' }}
                innerStyles={{ background: '#0474C4', width: '30vh' }}
                barStyles={{ background: '#A8C4EC' }}
                dataStyles={{ color: '#A8C4EC', fontSize: '14px', fontFamily: 'Space Grotesk' }}
            />
        </div>
    );
}

export default App;
