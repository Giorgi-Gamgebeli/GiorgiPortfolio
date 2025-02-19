"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Stars from "./Stars";

function StarsCanvas() {
  return (
    <div
      className={`absolute inset-0 z-[-1] h-auto w-full opacity-0 transition dark:opacity-100`}
    >
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 1]} />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
