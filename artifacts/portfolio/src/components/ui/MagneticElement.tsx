import { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticElement({ children, strength = 0.3, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.5 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.5 });

  // Only enable on devices with a fine pointer (mouse), not touch/tablet
  const [hasMouse, setHasMouse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasMouse(mq.matches);
    const handler = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasMouse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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
      style={hasMouse ? { x, y } : {}}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
