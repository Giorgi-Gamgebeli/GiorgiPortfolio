"use client";

import { KTX2Loader } from "three-stdlib";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import Computer3DModelOptimized from "./Computer3DModelOptimized";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(`/transcoder/`);

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
          <Computer3DModelOptimized ktx2Loader={ktx2Loader} />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default ComputerCanvas;
