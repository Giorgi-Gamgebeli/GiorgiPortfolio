import useKTX2LoaderContext from "@/app/_context/useKTX2LoaderContext";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function Earth() {
  const { gl } = useThree();
  const { ktx2Loader } = useKTX2LoaderContext();

  const { scene } = useGLTF("./earthOptimized.glb", true, true, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default Earth;
