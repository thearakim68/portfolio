import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps children with a subtle magnetic pull toward the cursor.
 * On touch devices, mousemove never fires so there's no effect.
 */
export function MagneticElement({ children, strength = 0.3, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.5 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.5 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width  / 2)) * strength);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
