"use client";

import { useGLTF } from "@react-three/drei";

function Earth() {
  const { scene } = useGLTF("./earthOptimized.glb", true);

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
