import { Variants } from 'framer-motion';

// Fade in with upward motion
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// Individual stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// Scale in effect
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Pop in effect for cards/buttons
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring', stiffness: 200 } }
};

// Slide in from bottom
export const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Float animation for decorative elements
export const float: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    y: [0, -10, 0],
    transition: { 
      opacity: { duration: 0.5 },
      y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  }
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  margin: '-100px' as const
};
