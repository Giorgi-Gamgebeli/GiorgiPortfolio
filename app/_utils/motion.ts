import { animate } from "framer-motion";

type FadeSlideInTypes = [string, string, number, number];

export function textVariant(delay?: number) {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
}

export function fadeIn([direction, type, delay, duration]: FadeSlideInTypes) {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
}

export function zoomIn(delay: number, duration: number) {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
}

export function slideIn([direction, type, delay, duration]: FadeSlideInTypes) {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
}

export function staggerContainer(
  staggerChildren?: number,
  delayChildren?: number,
) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
}

export function staggerChild(delay: number) {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        delay: delay || 0,
      },
    },
  };
}

// bento grid animation
export async function initialAnimation() {
  await animate("#cell-1-1-3", { x: 0, opacity: 1 }, { delay: 1 });
  await animate("#cell-1-3-4", { y: 0, opacity: 1 });
  await animate("#cell-1-3-4", { y: 0, opacity: 1 });
  await animate("#cell-2-3-4", { x: 0, opacity: 1 });
  await animate("#cell-3-2-4", { y: 0, opacity: 1 });
  await animate("#cell-3-1-2", { y: 0, opacity: 1 });
  await animate("#cell-2-1-2", { x: 0, opacity: 1 });
  await animate(
    "#cell-2-2-3",
    { x: -550, opacity: 1 },
    {
      duration: 0.5,
      mass: 0.5,
      damping: 12,
      stiffness: 200,
      type: "spring",
      ease: "easeInOut",
    },
  );
  await animate(
    "#cell-2-2-3",
    { rotate: 5 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3",
    { y: [0, -10, 0, -10, 0, -10, 0, -10, 0] },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3",
    { y: "-105%", rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2",
    { x: "-105%" },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2",
    { y: "105%" },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3",
    { y: 0, rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3",
    { x: 0, rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2",
    { y: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2",
    { x: 0 },
    {
      duration: 1,
    },
  );
  loopAnimation1();
}

// bento grid animation
async function loopAnimation1() {
  await animate("#cell-3-2-4", {
    position: "absolute",
    right: 0,
    bottom: 0,
  });
  animate(
    "#cell-2-3-4-parent",
    {
      opacity: 0,
    },
    { duration: 1 },
  );
  await animate("#cell-3-2-4", { width: "49.1%" }, { duration: 1 });
  animate("#cell-3-2-4", { width: "100%" }, { duration: 0 });
  animate(
    "#cell-3-2-4-parent",
    {
      gridColumnStart: 3,
      gridColumnEnd: 4,
    },
    { duration: 0 },
  );

  animate(
    "#cell-3-2-4-parent",
    { gridRowStart: 2, gridRowEnd: 4 },
    { duration: 0 },
  );
  animate(
    "#cell-2-3-4-parent",
    {
      gridRowStart: 3,
      gridRowEnd: 4,
      gridColumnStart: 2,
      gridColumnEnd: 3,
    },
    { duration: 0 },
  );
  animate(
    "#cell-2-3-4-parent",
    {
      opacity: 1,
    },
    { duration: 1 },
  );
  await animate("#cell-3-2-4", { height: "49.1%" }, { duration: 0 });
  await animate("#cell-3-2-4", { height: "100%" }, { duration: 1 });

  loopAnimation2();
}

async function loopAnimation2() {
  await animate("#cell-1-1-3", {
    position: "absolute",
    left: 0,
    top: 0,
  });
  animate(
    "#cell-2-1-2-parent",
    {
      opacity: 0,
    },
    { duration: 1 },
  );
  await animate("#cell-1-1-3", { width: "49.1%" }, { duration: 1 });
  animate("#cell-1-1-3", { width: "100%" }, { duration: 0 });
  animate(
    "#cell-2-1-2-parent",
    {
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 2,
    },
    { duration: 0 },
  );
  animate(
    "#cell-1-1-3-parent",
    {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    { duration: 0 },
  );
  animate(
    "#cell-2-1-2-parent",
    {
      opacity: 1,
    },
    { duration: 1 },
  );

  await animate("#cell-1-1-3", { height: "49.1%" }, { duration: 0 });
  await animate("#cell-1-1-3", { height: "100%" }, { duration: 1 });

  loopAnimation3();
}

async function loopAnimation3() {
  animate(
    "#cell-2-3-4-parent",
    {
      opacity: 0,
    },
    { duration: 1 },
  );
  await animate("#cell-3-2-4", { height: "49.1%" }, { duration: 1 });
  animate("#cell-3-2-4", { height: "100%" }, { duration: 0 });
  animate(
    "#cell-3-2-4-parent",
    {
      gridColumnStart: 2,
      gridColumnEnd: 4,
      gridRowStart: 3,
      gridRowEnd: 4,
    },
    { duration: 0 },
  );
  animate(
    "#cell-2-3-4-parent",
    {
      gridColumnStart: 3,
      gridColumnEnd: 4,
      gridRowStart: 2,
      gridRowEnd: 3,
    },
    { duration: 0 },
  );
  animate(
    "#cell-2-3-4-parent",
    {
      opacity: 1,
    },
    { duration: 1 },
  );
  await animate("#cell-3-2-4", { width: "49.1%" }, { duration: 0 });
  await animate("#cell-3-2-4", { width: "100%" }, { duration: 1 });
  loopAnimation4();
}

async function loopAnimation4() {
  animate(
    "#cell-2-1-2-parent",
    {
      opacity: 0,
    },
    { duration: 1 },
  );
  await animate("#cell-1-1-3", { height: "49.1%" }, { duration: 1 });
  animate("#cell-1-1-3", { height: "100%" }, { duration: 0 });
  animate(
    "#cell-1-1-3-parent",
    {
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 1,
      gridColumnEnd: 3,
    },
    { duration: 0 },
  );
  animate(
    "#cell-2-1-2-parent",
    {
      gridColumnStart: 1,
      gridColumnEnd: 2,
      gridRowStart: 2,
      gridRowEnd: 3,
    },
    { duration: 0 },
  );
  await animate("#cell-1-1-3", { width: "49.1%" }, { duration: 0 });
  animate(
    "#cell-2-1-2-parent",
    {
      opacity: 1,
    },
    { duration: 1 },
  );
  await animate("#cell-1-1-3", { width: "100%" }, { duration: 1 });
}
