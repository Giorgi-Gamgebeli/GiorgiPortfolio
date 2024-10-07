"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useActiveSectionContext from "../_context/useActiveSectionContext";

type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  idName: "Home" | "About" | "Skills" | "Projects" | "Contact";
  viewThreshold?: number;
  divClassName?: string;
};

function Section({
  children,
  className,
  idName,
  viewThreshold,
  divClassName,
}: SectionTypes) {
  const { ref, inView } = useInView({ threshold: viewThreshold || 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(idName);
  }, [inView, setActiveSection, idName, timeOfLastClick]);

  return (
    <section
      className={`min-h-[40rem] w-full scroll-m-32 overflow-x-hidden ${className}`}
      id={idName}
      ref={ref}
    >
      <div
        className={`mx-auto w-full max-w-[90%] xl:max-w-[1214px] ${divClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
