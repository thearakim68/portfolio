import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <section
      id="top"
      className="relative flex flex-col justify-center min-h-dvh pt-24 pb-16 px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C85438 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 lg:gap-16">

          {/* Animated visual — top on mobile, right on desktop */}
          <motion.div
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] shrink-0 md:order-2"
          >
            <HeroVisual />
          </motion.div>

          {/* Text content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:order-1">

            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="mb-5">
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                Product Designer · AI Researcher · Educator
              </span>
            </motion.div>

            <motion.h1
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] font-bold text-foreground mb-6"
            >
              Kim Theara
            </motion.h1>

            <motion.p
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="font-serif italic text-lg sm:text-xl lg:text-2xl text-foreground/75 max-w-lg leading-relaxed mb-10"
            >
              "Designing human experiences at the intersection of AI, governance, and the people technology is supposed to serve."
            </motion.p>

            <motion.div
              custom={5} initial="hidden" animate="visible" variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#writing"
                className="px-6 py-3.5 bg-transparent border border-border text-foreground font-medium rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Read My Writing
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground"
      >
        <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
        <ArrowDown size={13} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
