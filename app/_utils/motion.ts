type FadeSlideInProps = [string, string, number, number];

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

export function slideIn([direction, type, delay, duration]: FadeSlideInProps) {
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

export const skillsFloatVariants = [
  {
    y: [0, -5, 0, 10, 0, -5, -10, -5, 0],
    rotate: [0, -5, 0, 10, 0, -5, -10, -5, 0],
  },
  {
    y: [0, 5, 0, -10, 0, 5, 10, 5, 0],
    rotate: [0, 5, 0, -10, 0, 5, 10, 5, 0],
  },
];
