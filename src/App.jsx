import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './three/Scene';
import Layout from './components/Layout';
import Loader from './components/Loader';

function App() {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden select-none">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Overlay Container */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden scroll-smooth">
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
