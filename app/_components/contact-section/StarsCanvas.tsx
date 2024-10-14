"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {

  PerspectiveCamera,
} from "@react-three/drei";
import Stars from "./Stars";
import useDarkModeContext from "@/app/_context/useDarkModeContext";

function StarsCanvas() {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div
      className={`absolute inset-0 z-[-1] h-auto w-full transition ${isDarkMode ? "opacity-100" : "opacity-0"}`}
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
