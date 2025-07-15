"use client";

import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import useIsMobile from "../../_hooks/useIsMobile";
import {
  initialBentoGridAnimation,
  skipInitialBentoGridAnimation,
} from "./bentogridanimation";

type GridBoxProps = {
  children: React.ReactNode;
};

function GridBox({ children }: GridBoxProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [animationHasHappend, setAnimationHasHappend] = useState(false);
  const [wasMobile, setWasMobile] = useState(false);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.addEventListener("scroll", () => {}, { passive: true });
    window.addEventListener("touchmove", () => {}, { passive: true });

    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("touchmove", () => {});
    };
  }, []);

  useEffect(() => {
    if (isMobile === null) return;

    if (isInView && !animationHasHappend) {
      initialBentoGridAnimation(animate);
      setAnimationHasHappend(true);
    }

    if (wasMobile !== isMobile) {
      skipInitialBentoGridAnimation(animate);
      setWasMobile(isMobile);
    }
  }, [animate, isInView, animationHasHappend, wasMobile, isMobile]);

  return (
    <div
      className="hidden md:mx-auto md:my-20 md:grid md:h-[700px] md:w-[700px] md:grid-cols-3 md:grid-rows-3 md:gap-2 lg:h-[800px] lg:w-[800px] lg:gap-3"
      ref={scope}
    >
      {children}
    </div>
  );
}

export default GridBox;
