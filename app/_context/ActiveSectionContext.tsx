"use client";
import { createContext, useState } from "react";

type SectionNameTypes = "Home" | "About" | "Skills" | "Projects" | "Contact";

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
  null
);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderTypes) {
  const [activeSection, setActiveSection] = useState<SectionNameTypes>("Home");
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

export { ActiveSectionContextProvider, ActiveSectionContext };
