import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const AVATAR_URL = `${import.meta.env.BASE_URL}assets/model.glb`;

function AvatarModel() {
    const group = useRef();
    const headBone = useRef();
    const waveBone = useRef();
    const smileMesh = useRef();
    const smileIndex = useRef(-1);

    const { scene, animations } = useGLTF(AVATAR_URL);
    const model = useMemo(() => scene.clone(true), [scene]);
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        model.traverse((child) => {
            if (!headBone.current && child.isBone && /(head|neck|spine)/i.test(child.name)) {
                headBone.current = child;
            }

            if (!waveBone.current && child.isBone && /(rightarm|rightforearm|arm_r|mixamorigrightarm)/i.test(child.name)) {
                waveBone.current = child;
            }

            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                if (child.material) {
                    child.material.envMapIntensity = 0.8;
                    child.material.needsUpdate = true;
                }

                if (!smileMesh.current && child.morphTargetDictionary && child.morphTargetInfluences) {
                    const keys = Object.keys(child.morphTargetDictionary);
                    const key = keys.find((morphKey) => /(smile|happy|grin|mouth)/i.test(morphKey));

                    if (key) {
                        smileMesh.current = child;
                        smileIndex.current = child.morphTargetDictionary[key];
                    }
                }
            }
        });
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
        const breathe = Math.sin(t * 1.8) * 0.03;
        const wave = Math.sin(t * 3.2) * 0.28 + 0.58;

        group.current.position.y = THREE.MathUtils.damp(group.current.position.y, -1.04 + breathe, 4, delta);
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.24, 4, delta);

        if (headBone.current) {
            headBone.current.rotation.y = THREE.MathUtils.damp(headBone.current.rotation.y, state.pointer.x * 0.18, 4.5, delta);
            headBone.current.rotation.x = THREE.MathUtils.damp(headBone.current.rotation.x, -state.pointer.y * 0.08, 4.5, delta);
        }

        if (waveBone.current) {
            waveBone.current.rotation.z = THREE.MathUtils.damp(waveBone.current.rotation.z, -wave, 5, delta);
            waveBone.current.rotation.x = THREE.MathUtils.damp(waveBone.current.rotation.x, 0.28, 5, delta);
        }

        if (smileMesh.current && smileIndex.current >= 0) {
            const targetSmile = 0.15 + Math.sin(t * 1.4) * 0.04;
            const influences = smileMesh.current.morphTargetInfluences;
            influences[smileIndex.current] = THREE.MathUtils.damp(
                influences[smileIndex.current] ?? 0,
                targetSmile,
                3.4,
                delta
            );
        }
    });

    return <primitive ref={group} object={model} scale={1.17} position={[0, -1.04, 0]} />;
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
