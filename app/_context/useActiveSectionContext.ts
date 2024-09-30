import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null)
    throw new Error(
      "ActiveSectionContext was used outside of ActiveSectionProvider"
    );

  return context;
}

export default useActiveSectionContext;
