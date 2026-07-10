import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 0.9 }}>
        Sahil™ 100%
      </motion.span>
    </motion.div>
  );
}
