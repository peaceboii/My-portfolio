import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController() {
    const { camera, mouse } = useThree();
    const target = new THREE.Vector3(0, 0, 0);

    useFrame((state) => {
        const targetX = mouse.x * 1.2;
        const targetY = -mouse.y * 0.6 + 1.5;
        const targetZ = 5.8 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (targetY - camera.position.y) * 0.03;
        camera.position.z += (targetZ - camera.position.z) * 0.02;
        camera.lookAt(target);
    });

    return null;
}
