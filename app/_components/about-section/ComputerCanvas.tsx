"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import Computer3DModel from "./Computer3DModel";

function ComputerCanvas() {
  return (
    <Canvas
      className="h-[250px] cursor-grab"
      frameloop="demand"
      shadows
      gl={{
        preserveDrawingBuffer: true,
        // pixelRatio: window.innerWidth <= 768 ? 1 : window.devicePixelRatio,
      }}
    >
      <PerspectiveCamera makeDefault position={[25, 0, 0]} fov={25} />
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={3} />
        <directionalLight position={[0, 10, 0]} intensity={3} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group position={[0, -2.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}>
          <Computer3DModel />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
