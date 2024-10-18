"use server";

import { animate } from "framer-motion";
import { delay } from "../../_utils/smallUtils";

export async function skipInitialBentoGridAnimation() {
  const animationDefenitions = { x: 0, opacity: 1, y: 0 } as const;
  const options = { delay: 0, duration: 0, type: "tween" } as const;

  await animate("#cell-1-1-3-parent", animationDefenitions, options);
  await animate("#cell-1-3-4-parent", animationDefenitions, options);
  await animate("#cell-1-3-4-parent", animationDefenitions, options);
  await animate("#cell-2-3-4-parent", animationDefenitions, options);
  await animate("#cell-3-2-4-parent", animationDefenitions, options);
  await animate("#cell-3-1-2-parent", animationDefenitions, options);
  await animate("#cell-2-1-2-parent", animationDefenitions, options);
  await animate("#cell-2-2-3-parent", animationDefenitions, options);
}

// bento grid animation
export async function initialBentoGridAnimation() {
  await animate("#cell-1-1-3-parent", { x: 0, opacity: 1 }, { delay: 0.5 });
  await animate("#cell-1-3-4-parent", { y: 0, opacity: 1 });
  await animate("#cell-1-3-4-parent", { y: 0, opacity: 1 });
  await animate("#cell-2-3-4-parent", { x: 0, opacity: 1 });
  await animate("#cell-3-2-4-parent", { y: 0, opacity: 1 });
  await animate("#cell-3-1-2-parent", { y: 0, opacity: 1 });
  await animate("#cell-2-1-2-parent", { x: 0, opacity: 1 });
  await animate(
    "#cell-2-2-3-parent",
    { x: "-210%", opacity: 1 },
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
    "#cell-2-2-3-parent",
    { rotate: 5 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3-parent",
    { y: [0, -10, 0, -10, 0, -10, 0, -10, 0] },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3-parent",
    { y: "-105%", rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2-parent",
    { x: "-105%" },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2-parent",
    { y: "103%" },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3-parent",
    { y: 0, rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-2-3-parent",
    { x: 0, rotate: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2-parent",
    { y: 0 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-2-1-2-parent",
    { x: 0 },
    {
      duration: 1,
    },
  );
  BentoGridCell324Animation();
}

// bento grid animation
async function BentoGridCell324Animation() {
  await delay();
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

  BentoGridCell113Animation();
}

async function BentoGridCell113Animation() {
  await delay();
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

  BentoGridCell324ReverseAnimation();
}

async function BentoGridCell324ReverseAnimation() {
  await delay();
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
  BentoGridCell113ReverseAnimation();
}

async function BentoGridCell113ReverseAnimation() {
  await delay();
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
  BentoGridCell324Animation();
}
