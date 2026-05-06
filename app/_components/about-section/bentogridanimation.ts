"use client";

type Animate = typeof import("framer-motion").animate;

export async function skipInitialBentoGridAnimation(animate: Animate) {
  const animationDefenitions = { x: 0, opacity: 1, y: 0 } as const;
  const options = { delay: 0, duration: 0, type: "tween" } as const;

  await animate("#cell-1", animationDefenitions, options);
  await animate("#cell-2", animationDefenitions, options);
  await animate("#cell-5", animationDefenitions, options);
  await animate("#cell-7", animationDefenitions, options);
  await animate("#cell-6", animationDefenitions, options);
  await animate("#cell-3", animationDefenitions, options);
  await animate("#cell-4", animationDefenitions, options);
}

// bento grid animation
export async function initialBentoGridAnimation(animate: Animate) {
  const starterAnimationOptions = {
    duration: 0.4,
    type: "spring",
    bounce: 0.5,
  } as const;

  await animate(
    "#cell-1",
    { x: 0, opacity: 1 },
    { delay: 0.5, ...starterAnimationOptions },
  );
  await animate("#cell-2", { y: 0, opacity: 1 }, starterAnimationOptions);
  await animate("#cell-5", { x: 0, opacity: 1 }, starterAnimationOptions);
  await animate("#cell-7", { y: 0, opacity: 1 }, starterAnimationOptions);
  await animate("#cell-6", { y: 0, opacity: 1 }, starterAnimationOptions);
  await animate("#cell-3", { x: 0, opacity: 1 }, starterAnimationOptions);
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
    { x: "-220%" },
    {
      duration: 0.5,
    },
  );

  // Gets angry when bumping
  triggerGlitch(animate, "#cell-4");

  await animate(
    "#cell-4",
    { rotate: 2 },
    {
      duration: 0.3,
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

  // Settles back to normal
  stopGlitch(animate, "#cell-4");

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

export function triggerGlitch(animate: Animate, selector: string) {
  // 1. Entrance / System Reveal
  animate(
    selector,
    {
      opacity: [0, 1],
      scale: [1.1, 1],
      filter: ["blur(10px)", "blur(0px)"],
    },
    { duration: 0.4 },
  );

  // 2. Angry Styles (Colors, Shadows, Noise, Scanline)
  animate(selector, {
    backgroundColor: "var(--angry-bg)",
    borderColor: "var(--angry-border)",
    boxShadow: "0 0 50px -10px var(--angry-glow)",
    color: "var(--angry-text)",
    textShadow: "0 0 10px var(--angry-glow)",
    fontWeight: 700,
  });

  // Icon Swap
  animate(`${selector}-icon-container`, {
    backgroundColor: "var(--angry-bg)",
    borderColor: "var(--angry-border)",
    color: "var(--angry-text)",
  });
  animate(`${selector}-icon-main`, { opacity: 0 });
  animate(`${selector}-icon-angry`, { opacity: 1 });

  animate(`${selector}-noise`, { opacity: 0.03 });
  animate(`${selector}-scanline`, { opacity: 1 });
  animate(`${selector}-glitch-1`, { opacity: 0.8 });
  animate(`${selector}-glitch-2`, { opacity: 0.8 });

  // 3. Jitter Animation
  const glitchKeyframes1 = {
    clipPath: [
      "inset(80% 0 0 0)",
      "inset(10% 0 85% 0)",
      "inset(55% 0 43% 0)",
      "inset(30% 0 60% 0)",
      "inset(85% 0 1% 0)",
      "inset(15% 0 75% 0)",
      "inset(70% 0 25% 0)",
      "inset(5% 0 92% 0)",
      "inset(45% 0 52% 0)",
      "inset(25% 0 70% 0)",
      "inset(95% 0 1% 0)",
    ],
    x: [-5, 5, -10, 10, -5, 5, -10, 10, -5, 5, -10],
    y: [-10, 10, 5, -5, 10, -10, 5, 10, -10, 5, -5],
  };

  const glitchKeyframes2 = {
    clipPath: [
      "inset(25% 0 58% 0)",
      "inset(75% 0 20% 0)",
      "inset(40% 0 45% 0)",
      "inset(10% 0 85% 0)",
      "inset(55% 0 40% 0)",
      "inset(85% 0 10% 0)",
      "inset(15% 0 70% 0)",
      "inset(65% 0 30% 0)",
      "inset(30% 0 62% 0)",
      "inset(90% 0 2% 0)",
      "inset(5% 0 90% 0)",
    ],
    x: [5, -5, 10, -10, 5, -5, 10, -10, 5, -5, 10],
    y: [5, -5, 10, -10, -5, 5, -10, 10, 5, -5, 10],
  };

  animate(`${selector}-glitch-1`, glitchKeyframes1, {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  });
  animate(`${selector}-glitch-2`, glitchKeyframes2, {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  });
}

export function stopGlitch(animate: Animate, selector: string) {
  // Restore normal styles
  animate(selector, {
    backgroundColor: "var(--cell-bg)",
    borderColor: "var(--cell-border)",
    boxShadow: "0 0 0px rgba(0,0,0,0)",
    color: "var(--cell-text)",
    textShadow: "0 0 0px rgba(0,0,0,0)",
    fontWeight: 500,
  });

  // Restore Icon
  animate(`${selector}-icon-container`, {
    backgroundColor: "var(--cell-icon-bg)",
    borderColor: "var(--cell-icon-border)",
    color: "var(--cell-text)",
  });
  animate(`${selector}-icon-main`, { opacity: 1 });
  animate(`${selector}-icon-angry`, { opacity: 0 });

  // Hide all glitch/decor layers
  animate(`${selector}-noise`, { opacity: 0 });
  animate(`${selector}-scanline`, { opacity: 0 });
  animate(`${selector}-glitch-1`, {
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  });
  animate(`${selector}-glitch-2`, {
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  });
}
