"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "../_context/ActiveSectionContext";
import { navLinks } from "../_utils/constants";

type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  idName: (typeof navLinks)[number];
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
  const ref = useRef<HTMLTableSectionElement | null>(null);
  const inView = useInView(ref, { amount: viewThreshold || 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(idName);
  }, [inView, setActiveSection, idName, timeOfLastClick]);

  return (
    <section
      className={`h-full min-h-[40rem] w-full overflow-hidden pb-10 ${className}`}
      ref={ref}
    >
      <span className="scroll-mt-48 opacity-0" id={idName} />
      <div
        className={`mx-auto h-full min-h-[40rem] w-full max-w-[90%] xl:max-w-[1214px] ${divClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
