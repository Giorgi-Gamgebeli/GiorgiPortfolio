import { useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { KTX2Loader } from "three-stdlib";

function Earth() {
  // { ktx2Loader }: { ktx2Loader: KTX2Loader }
  // const { gl } = useThree();

  // const earth = useGLTF("./earthOptimized.glb", true, true, (loader) => {
  //   loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  // });

  const { scene } = useGLTF("./planet/scene.gltf");

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
