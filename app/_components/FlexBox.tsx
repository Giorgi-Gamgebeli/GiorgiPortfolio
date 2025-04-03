import { MutableRefObject } from "react";

type FlexBoxProps = {
  children: React.ReactNode;
  className?: string;
  reactRef?: MutableRefObject<HTMLDivElement | null>;
};

function FlexBox({ children, reactRef, className }: FlexBoxProps) {
  return (
    <div ref={reactRef} className={`flex ${className}`}>
      {children}
    </div>
  );
}

export default FlexBox;
