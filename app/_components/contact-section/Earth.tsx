import { useGLTF } from "@react-three/drei";

function Earth() {
  const { scene } = useGLTF("./planet/scene.gltf");

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
