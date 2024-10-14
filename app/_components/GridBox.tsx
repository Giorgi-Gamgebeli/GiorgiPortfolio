import { MutableRefObject } from "react";

type GridBoxTypes = {
  children: React.ReactNode;
  className?: string;
  reactRef?: MutableRefObject<HTMLDivElement | null>;
};

function GridBox({ children, reactRef, className }: GridBoxTypes) {
  return (
    <div ref={reactRef} className={`grid ${className}`}>
      {children}
    </div>
  );
}

export default GridBox;
