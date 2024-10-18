"use client";

import { useRef } from "react";
import { KTX2Loader } from "three-stdlib";
function useKTX2Loader() {
  const { current: ktx2Loader } = useRef(
    new KTX2Loader().setTranscoderPath("/transcoder/"),
  );

  return ktx2Loader;
}

export default useKTX2Loader;
