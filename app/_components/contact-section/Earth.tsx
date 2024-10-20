"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three-stdlib";

function Earth() {
  const ktx2Loader = new KTX2Loader().setTranscoderPath(`/transcoder/`);
  // const { scene } = useGLTF("./earthOptimized.glb", true);
  const { gl } = useThree();
  const { scene } = useGLTF("/earthOptimized1.glb", true, true, (loader) =>
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl)),
  );

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
