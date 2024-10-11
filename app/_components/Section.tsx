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
      className={`h-full min-h-[40rem] w-full scroll-mt-24 py-10 ${className}`}
      ref={ref}
    >
      <div
        className={`mx-auto h-full min-h-[40rem] w-full max-w-[90%] xl:max-w-[1214px] ${divClassName}`}
        id={idName}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
