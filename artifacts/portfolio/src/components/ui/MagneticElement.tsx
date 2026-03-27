import { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticElement({ children, strength = 0.3, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 20, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 20, mass: 0.4 });

  // Desktop only: window width >= 1024px
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width  / 2)) * strength);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * strength);
  }

  function onMouseLeave() {
    if (!isDesktop) return;
    x.set(0);
    y.set(0);
  }

  // On mobile/tablet: plain div wrapper, zero spring values, no handlers
  if (!isDesktop) {
    return <div className={className}>{children}</div>;
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
