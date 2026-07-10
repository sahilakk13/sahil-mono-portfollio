import { motion } from 'framer-motion';
import { reveal, revealTransition } from '../lib/motion';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}
