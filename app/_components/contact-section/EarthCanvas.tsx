"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import Earth from "./Earth";
import { KTX2Loader } from "three-stdlib";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(`/transcoder/`);

function EarthCanvas() {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <PerspectiveCamera
        makeDefault
        fov={45}
        position={[-4, 3, 6]}
        near={0.1}
        far={200}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth ktx2Loader={ktx2Loader} />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
