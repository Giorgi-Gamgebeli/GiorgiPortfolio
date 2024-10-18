"use client";

import useKTX2Loader from "@/app/_hooks/useKTX2Loader";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function Earth() {
  const { gl } = useThree();

  const ktx2Loader = useKTX2Loader();

  const { scene } = useGLTF("/earthOptimized1.glb", true, true, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });

  // const { scene } = useGLTF("./earthOptimized.glb", true);

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
