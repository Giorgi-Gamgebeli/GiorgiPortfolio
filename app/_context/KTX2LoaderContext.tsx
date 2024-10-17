"use client";

import React, { createContext, useRef } from "react";
import { KTX2Loader } from "three-stdlib";

type KTX2LoaderContextTypes = {
  ktx2Loader: KTX2Loader;
};

const KTX2LoaderContext = createContext<KTX2LoaderContextTypes | null>(null);

function KTX2LoaderProvider({ children }: { children: React.ReactNode }) {
  const { current: ktx2Loader } = useRef<KTX2Loader>(
    new KTX2Loader().setTranscoderPath(`/transcoder/`),
  );

  return (
    <KTX2LoaderContext.Provider value={{ ktx2Loader }}>
      {children}
    </KTX2LoaderContext.Provider>
  );
}

export { KTX2LoaderProvider, KTX2LoaderContext };
