import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Avatar(props) {
    const group = useRef();
    const avatarUrl = `${import.meta.env.BASE_URL}assets/avatar.glb`;

    const { animations, scene } = useGLTF(avatarUrl);
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        // Attempt to play an idle animation. The animation names depend on the GLB.
        if (names && names.length > 0) {
            // Look for idle animation, otherwise play the first one
            const idleAnimName = names.find((name) => name.toLowerCase().includes('idle')) || names[0];
            if (idleAnimName && actions[idleAnimName]) {
                actions[idleAnimName].reset().fadeIn(0.5).play();
            }
        }
        return () => {
            // Clean up animations
            if (actions) {
                Object.values(actions).forEach(action => action.fadeOut(0.5));
            }
        };
    }, [actions, names]);

    useFrame((state) => {
        // Make the avatar always face the camera
        if (group.current) {
            // We only want the character to rotate on the Y axis to face the camera.
            group.current.rotation.y = Math.atan2(
                state.camera.position.x - group.current.position.x,
                state.camera.position.z - group.current.position.z
            );
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Small vertical offset to stand on the asteroid, assuming asteroid is at y=0 */}
            <primitive object={scene} position={[0, -1, 0]} scale={1.2} />
        </group>
    );
}

// Preload the model
useGLTF.preload(`${import.meta.env.BASE_URL}assets/avatar.glb`);
