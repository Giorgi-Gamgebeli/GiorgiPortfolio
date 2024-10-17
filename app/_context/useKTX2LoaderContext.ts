import { useContext } from "react";
import { KTX2LoaderContext } from "./KTX2LoaderContext";

function useKTX2LoaderContext() {
  const context = useContext(KTX2LoaderContext);
  if (context === null)
    throw new Error("KTX2LoaderContext was used outside of KTX2LoaderProvider");

  return context;
}

export default useKTX2LoaderContext;
