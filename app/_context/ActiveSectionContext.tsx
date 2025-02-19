"use client";
import { createContext, useContext, useState } from "react";
import { navLinks } from "../_utils/constants";

type SectionNameTypes = (typeof navLinks)[number];

type ActiveSectionContextProviderTypes = {
  children: React.ReactNode;
};

type ActiveSectionContextTypes = {
  activeSection: SectionNameTypes;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameTypes>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextTypes | null>(
  null,
);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderTypes) {
  const [activeSection, setActiveSection] = useState<SectionNameTypes>("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null)
    throw new Error(
      "ActiveSectionContext was used outside of ActiveSectionProvider",
    );

  return context;
}

export { ActiveSectionContextProvider, useActiveSectionContext };
