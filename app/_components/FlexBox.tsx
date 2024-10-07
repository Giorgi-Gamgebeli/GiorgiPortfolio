import { MutableRefObject } from "react";

type FlexBoxTypes = {
  children: React.ReactNode;
  className?: string;
  reactRef?: MutableRefObject<HTMLDivElement | null>;
};

function FlexBox({ children, reactRef, className }: FlexBoxTypes) {
  return (
    <div ref={reactRef} className={`flex ${className}`}>
      {children}
    </div>
  );
}

export default FlexBox;
