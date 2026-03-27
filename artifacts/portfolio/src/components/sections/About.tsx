import { motion } from "framer-motion";

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
            I'm a product designer at ABA Bank — working on the financial tools millions of Cambodians use every day. In my spare time, I contribute to AI governance research at SEA Observatory, helping translate complex policy into accessible design across Southeast Asia. One role is my profession. The other is a commitment I choose to keep.
          </p>
          <p>
            On Saturdays and Sundays, I'm in a classroom — by choice. Teaching UX and AI across Cambodia is how I stay honest about what the field actually needs. You learn differently when you have to explain it to someone who's never heard of it.
          </p>
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
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground w-16">Work</span>
            <span className="px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium text-foreground">ABA Bank</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground w-16">Research</span>
            <span className="px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium text-foreground">SEA Observatory</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground w-16">Teaching</span>
            {["IT Academy STEP", "Future.bit Academy"].map(org => (
              <span key={org} className="px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium text-foreground">
                {org}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
