import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  cursorLabel?: string;
};

export default function Button({ children, href, className, type = 'button', cursorLabel = 'Go' }: ButtonProps) {
  const classes = cn('button-pill', className);

  if (href) {
    return (
      <motion.span whileHover={{ y: -3, scale: 1.025 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
        <Link className={classes} to={href} data-cursor-label={cursorLabel}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button className={classes} type={type} data-cursor-label={cursorLabel} whileHover={{ y: -3, scale: 1.025 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.button>
  );
}
