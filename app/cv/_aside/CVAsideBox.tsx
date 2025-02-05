import React from "react";
import CVh3 from "../CVh3";

type CVAsideProps = {
  children: React.ReactNode;
  icon: string;
  h3: string;
};

function CVAsideBox({ children, icon, h3 }: CVAsideProps) {
  return (
    <div className="border-b border-white/20 pb-6">
      <CVh3 icon={icon} text={h3} />

      {children}
    </div>
  );
}

export default CVAsideBox;
