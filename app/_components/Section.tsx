import React from "react";

type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  idName: string;
};

function Section({ children, className, idName }: SectionTypes) {
  return (
    <section className={`min-h-[40rem] w-full ${className}`} id={idName}>
      <div className="mx-auto max-w-[90%] w-full">{children}</div>
    </section>
  );
}

export default Section;
