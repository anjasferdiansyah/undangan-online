export const slideUp = {
  initial: { y: "100px" },
  open: (i) => ({ y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
  closed: { y: "100%" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  open: { opacity: 1, y: 0, transition: { duration: 1 } },
  closed: { opacity: 0 },
};
