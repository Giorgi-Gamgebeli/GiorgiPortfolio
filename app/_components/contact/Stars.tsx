"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { Points as ThreePoints } from "three";

function Stars(props: object) {
  const ref = useRef<ThreePoints>(null);

  const sphere = random.inSphere(new Float32Array(10000), {
    radius: 1.2,
  }) as Float32Array;

  // let wobbleX = 0.01;
  // let wobbleY = 0.015;

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta / 15;

    // ref.current.rotation.x += wobbleX * delta;
    // if (Math.random() > 0.98) {
    //   wobbleX = -wobbleX;
    // }
    // ref.current.rotation.y += wobbleY * delta;
    // if (Math.random() > 0.99) {
    //   wobbleY = -wobbleY;
    // }
  });

  return (
    // <group rotation={[0, 0, Math.PI / 4]}>
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default Stars;
