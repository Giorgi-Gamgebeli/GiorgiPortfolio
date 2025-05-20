"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import Earth from "./Earth";

function EarthCanvas() {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera
          makeDefault
          fov={45}
          position={[-4, 3, 6]}
          near={0.1}
          far={200}
        />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
