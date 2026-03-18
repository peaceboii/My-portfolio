import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const AVATAR_URL = `${import.meta.env.BASE_URL}assets/model.glb`;

function AvatarModel() {
    const group = useRef();
    const headBone = useRef();
    const neckBone = useRef();
    const rightArmBone = useRef();
    const rightForeArmBone = useRef();
    const modelRef = useRef();
    const baseScale = useRef(1);
    const baseY = useRef(-1.05);

    const { scene, animations } = useGLTF(AVATAR_URL);
    const model = useMemo(() => scene.clone(true), [scene]);
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        model.traverse((child) => {
            if (!headBone.current && child.isBone && /(head|neck|spine)/i.test(child.name)) {
                headBone.current = child;
            }

            if (!neckBone.current && child.isBone && /neck/i.test(child.name)) {
                neckBone.current = child;
            }

            if (!rightArmBone.current && child.isBone && /rightarm/i.test(child.name)) {
                rightArmBone.current = child;
            }

            if (!rightForeArmBone.current && child.isBone && /rightforearm/i.test(child.name)) {
                rightForeArmBone.current = child;
            }

            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                if (child.material) {
                    child.material.envMapIntensity = 0.8;
                    child.material.needsUpdate = true;
                }
            }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        if (modelRef.current && size.y > 0) {
            // Normalize any source model size so the full character stays visible.
            const targetHeight = 2.18;
            baseScale.current = targetHeight / size.y;
            modelRef.current.scale.setScalar(baseScale.current);
            modelRef.current.position.set(-center.x * baseScale.current, -center.y * baseScale.current, -center.z * baseScale.current);
        }
    }, [model]);

    useEffect(() => {
        if (!names?.length || !actions) {
            return;
        }

        const idleName = names.find((name) => /idle/i.test(name)) || names[0];
        const idleAction = actions[idleName];

        if (idleAction) {
            idleAction.reset().fadeIn(0.45).play();
        }

        return () => {
            Object.values(actions).forEach((action) => action?.fadeOut(0.35));
        };
    }, [actions, names]);

    useFrame((state, delta) => {
        if (!group.current) {
            return;
        }

        const t = state.clock.getElapsedTime();
        const breathe = Math.sin(t * 1.8) * 0.024;
        const waveLift = 0.8 + Math.sin(t * 2.8) * 0.22;

        group.current.position.y = THREE.MathUtils.damp(group.current.position.y, baseY.current + breathe, 4, delta);
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.24, 4, delta);

        if (headBone.current) {
            const smileNod = Math.sin(t * 1.35) * 0.05;
            headBone.current.rotation.y = THREE.MathUtils.damp(headBone.current.rotation.y, state.pointer.x * 0.16, 4.5, delta);
            headBone.current.rotation.x = THREE.MathUtils.damp(headBone.current.rotation.x, -state.pointer.y * 0.06 + smileNod, 4.5, delta);
        }

        if (neckBone.current) {
            neckBone.current.rotation.z = THREE.MathUtils.damp(neckBone.current.rotation.z, Math.sin(t * 1.35) * 0.03, 4.2, delta);
        }

        if (rightArmBone.current) {
            rightArmBone.current.rotation.z = THREE.MathUtils.damp(rightArmBone.current.rotation.z, -waveLift, 5, delta);
            rightArmBone.current.rotation.x = THREE.MathUtils.damp(rightArmBone.current.rotation.x, 0.26, 5, delta);
        }

        if (rightForeArmBone.current) {
            const foreWave = Math.sin(t * 5.4) * 0.28 + 0.26;
            rightForeArmBone.current.rotation.y = THREE.MathUtils.damp(rightForeArmBone.current.rotation.y, foreWave, 6, delta);
            rightForeArmBone.current.rotation.z = THREE.MathUtils.damp(rightForeArmBone.current.rotation.z, -0.15, 6, delta);
        }
    });

    return (
        <group ref={group}>
            <primitive ref={modelRef} object={model} />
        </group>
    );
}

export default function Avatar() {
    return (
        <Canvas
            camera={{ position: [0.3, 1.2, 3.1], fov: 35 }}
            shadows
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.35} color="#ffffff" />
            <directionalLight
                castShadow
                intensity={1.1}
                color="#f8fbff"
                position={[2.2, 3.2, 2.4]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <directionalLight intensity={0.45} color="#60a5fa" position={[-2.5, 1.8, -2.4]} />

            <AvatarModel />

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.22, 0]}>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.18} />
            </mesh>

            <ContactShadows position={[0, -1.21, 0]} opacity={0.3} blur={2.4} scale={3.6} far={2.2} />
        </Canvas>
    );
}

useGLTF.preload(AVATAR_URL);
