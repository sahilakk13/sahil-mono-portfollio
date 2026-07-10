import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, { stiffness: 190, damping: 28, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 190, damping: 28, mass: 0.45 });
  const [label, setLabel] = useState('');
  const [dark, setDark] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1025px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return undefined;
    setEnabled(true);

    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      const target = event.target as HTMLElement | null;
      const hit = target?.closest<HTMLElement>('[data-cursor-label]');
      const darkSection = target?.closest('.vision-scroll-scene, .showreel-pinned-scene, .stats-success-story, .contact-footer');
      setLabel(hit?.dataset.cursorLabel ?? '');
      setDark(Boolean(darkSection));
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [pointerX, pointerY]);

  if (!enabled) return null;

  return (
    <>
      <motion.span className={dark ? 'cursor-dot is-dark' : 'cursor-dot'} style={{ x, y }} />
      <motion.span
        className={dark ? 'cursor-label is-dark' : 'cursor-label'}
        style={{ x, y }}
        animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.92 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
    </>
  );
}
