"use client";

type Animate = typeof import("framer-motion").animate;

export async function skipInitialBentoGridAnimation(animate: Animate) {
  const animationDefenitions = { x: 0, opacity: 1, y: 0 } as const;
  const options = { delay: 0, duration: 0, type: "tween" } as const;

  await animate("#cell-1", animationDefenitions, options);
  await animate("#cell-2", animationDefenitions, options);
  await animate("#cell-2", animationDefenitions, options);
  await animate("#cell-5", animationDefenitions, options);
  await animate("#cell-7", animationDefenitions, options);
  await animate("#cell-6", animationDefenitions, options);
  await animate("#cell-3", animationDefenitions, options);
  await animate("#cell-4", animationDefenitions, options);
}

// bento grid animation
export async function initialBentoGridAnimation(animate: Animate) {
  await animate("#cell-1", { x: 0, opacity: 1 }, { delay: 0.5 });
  await animate("#cell-2", { y: 0, opacity: 1 });
  await animate("#cell-2", { y: 0, opacity: 1 });
  await animate("#cell-5", { x: 0, opacity: 1 });
  await animate("#cell-7", { y: 0, opacity: 1 });
  await animate("#cell-6", { y: 0, opacity: 1 });
  await animate("#cell-3", { x: 0, opacity: 1 });
  await animate(
    "#cell-4",
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
    "#cell-4",
    { rotate: 5 },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-4",
    { y: [0, -10, 0, -10, 0, -10, 0, -10, 0] },
    {
      duration: 1,
    },
  );
  await animate(
    "#cell-4",
    { y: "-105%", rotate: 0 },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-3",
    { x: "-105%" },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-3",
    { y: "103%" },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-4",
    { y: 0, rotate: 0 },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-4",
    { x: 0, rotate: 0 },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-3",
    { y: 0 },
    {
      duration: 0.5,
    },
  );
  await animate(
    "#cell-3",
    { x: 0 },
    {
      duration: 0.5,
    },
  );
}
