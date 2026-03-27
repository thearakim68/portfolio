import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function MarqueeChip({ label }: { label: string }) {
  const clipRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const check = () => {
      if (!clipRef.current || !measureRef.current) return;
      setOverflow(measureRef.current.scrollWidth > clipRef.current.clientWidth);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [label]);

  const duration = `${Math.max(label.length * 0.28, 4)}s`;

  return (
    /* Outer chip: fixed width on mobile, natural width on sm+ */
    <span className="inline-flex items-center px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium text-foreground w-[118px] sm:w-auto shrink-0">
      {/* Inner clip zone — this is what actually hides overflow */}
      <span ref={clipRef} className="relative flex-1 overflow-hidden" style={{ minWidth: 0 }}>
        {/* Hidden measurement node */}
        <span ref={measureRef} className="absolute invisible whitespace-nowrap pointer-events-none">
          {label}
        </span>

        {overflow ? (
          <>
            <span
              className="flex whitespace-nowrap"
              style={{ animation: `chip-marquee ${duration} linear infinite` }}
            >
              <span className="pr-10">{label}</span>
              <span aria-hidden className="pr-10">{label}</span>
            </span>
            {/* Fade only on the right edge of the clip zone */}
            <span
              className="absolute right-0 top-0 h-full w-6 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--color-card), transparent)" }}
            />
          </>
        ) : (
          <span className="whitespace-nowrap">{label}</span>
        )}
      </span>
    </span>
  );
}

export function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const stats = [
    { value: "5+", label: "Years of\nprofessional experience" },
    { value: "2", label: "Countries\nworked in" },
    { value: "600+", label: "Students taught\ndesign & AI" },
    { value: "981", label: "Claps on\nmost-read article" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-8 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">About</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="mt-4 mb-12 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground font-semibold leading-[1.1] max-w-3xl"
        >
          I turn complexity into clarity
        </motion.h2>

        {/* Body text — full width, editorial */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-16 text-base sm:text-lg text-foreground/75 leading-[1.8]"
        >
          <p>
            I'm a product designer based in Phnom Penh, Cambodia — designing at ABA Bank and, in my free time, contributing to AI governance at SEA Observatory, alongside teams from Google AI, the World Economic Forum, and the United Nations.
          </p>
          <div className="flex flex-col gap-5">
            <p>
              My work lives at the edge of two worlds: the financial systems that millions of Cambodians depend on, and the public-interest AI platforms shaping how governments across Southeast Asia make decisions. In both, the challenge is always the same — make the complex feel simple, and make the simple feel right.
            </p>
            <p className="text-foreground/60 text-base italic border-l-2 border-primary/40 pl-4">
              On weekends, I take that same challenge into the classroom — teaching UX and AI to the next generation of Cambodian designers.
            </p>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-background px-6 py-8 flex flex-col">
              <span className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-none">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground leading-snug whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Affiliations */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-x-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-16 shrink-0">Work</span>
            {["ABA Bank", "SEA Observatory"].map(org => (
              <MarqueeChip key={org} label={org} />
            ))}
          </div>
          <span className="text-border/60 select-none hidden sm:inline">|</span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-16 shrink-0">Teaching</span>
            {["IT Academy STEP", "Future.bit Academy"].map(org => (
              <MarqueeChip key={org} label={org} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
