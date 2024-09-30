"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "../_context/useActiveSectionContext";

type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  idName: "Home" | "About" | "Skills" | "Projects" | "Contact";
};

function Section({ children, className, idName }: SectionTypes) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(idName);
  }, [inView, setActiveSection, idName, timeOfLastClick]);

  return (
    <section
      className={`min-h-[40rem] w-full scroll-m-40 ${className}`}
      id={idName}
      ref={ref}
    >
      <div className="mx-auto w-full max-w-[90%]">{children}</div>
    </section>
  );
}

export default Section;
