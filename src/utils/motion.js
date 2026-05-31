/** Premium easing curves for Tanya Dance Academy */
export const easePremium = [0.22, 1, 0.36, 1];
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const springSnappy = { type: 'spring', stiffness: 260, damping: 22 };
export const springSoft = { type: 'spring', stiffness: 120, damping: 18 };

export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easePremium },
  },
};

export const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easePremium },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easePremium },
  },
};

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easePremium },
  },
};

export const springPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSnappy,
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: easePremium },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease: easePremium },
  },
};

export const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

export const heroChild = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    y: -12,
    scale: 1.02,
    transition: springSoft,
  },
};

export const viewportOnce = { once: true, margin: '-80px' };
