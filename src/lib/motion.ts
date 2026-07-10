export const reveal = {
  hidden: { opacity: 0, y: 42, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export const revealTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.095,
      delayChildren: 0.04,
    },
  },
};

export const softHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.012 },
};
