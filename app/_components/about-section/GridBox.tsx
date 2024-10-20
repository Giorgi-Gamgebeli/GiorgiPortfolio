"use client";

import { MutableRefObject } from "react";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import useIsMobile from "../../_hooks/useIsMobile";
import {
  initialBentoGridAnimation,
  skipInitialBentoGridAnimation,
} from "./bentogridanimation";

type GridBoxTypes = {
  children: React.ReactNode;
  className?: string;
  reactRef?: MutableRefObject<HTMLDivElement | null>;
};

function GridBox({ children, className }: GridBoxTypes) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [animationHasHappend, setAnimationHasHappend] = useState(false);
  const [wasMobile, setWasMobile] = useState(false);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.addEventListener("scroll", () => {}, { passive: true });
    window.addEventListener("touchmove", () => {}, { passive: true });

    // return () => {
    //   window.removeEventListener("scroll", () => {});
    //   window.removeEventListener("touchmove", () => {});
    // };
  }, []);

  useEffect(() => {
    if (isInView && !animationHasHappend) {
      initialBentoGridAnimation(animate);
      setAnimationHasHappend(true);
    }

    if (isMobile && wasMobile !== isMobile) {
      skipInitialBentoGridAnimation(animate);
      setWasMobile(isMobile);
    }
  }, [animate, isInView, animationHasHappend, wasMobile, isMobile]);

  return (
    <div ref={scope} className={`grid ${className}`}>
      {children}
    </div>
  );
}

export default GridBox;
