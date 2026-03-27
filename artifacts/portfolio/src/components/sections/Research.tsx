import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Research() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="research" className="py-20 lg:py-28 px-6 lg:px-8 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Research
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground font-semibold leading-[1.1] mb-4">
            Where design meets governance
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-muted-foreground">
            "Some of the most important design work happens before anyone opens Figma."
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Card 1 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="relative bg-card rounded-2xl p-7 lg:p-10 border border-border shadow-sm overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Academic Research
                </span>
                <span className="text-foreground font-medium">Kagawa University, Japan</span>
              </div>
              <span className="px-3 py-1 bg-background border border-border text-xs font-medium rounded-full w-fit shrink-0">
                2024
              </span>
            </div>

            <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground leading-snug mb-4">
              Exploring AI-Driven Solutions in Cross-Cultural UX Adaptation (Cambodia & Japan)
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-7 text-sm sm:text-base">
              How do AI systems need to adapt when the user changes culture? This research explored the intersection of generative AI and cross-cultural design — examining how interfaces need to shift between Cambodian and Japanese user contexts in language, expectation, trust, and interaction pattern.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border/60">
              <div className="text-sm text-muted-foreground">
                Supervisor: <span className="font-medium text-foreground">Kitamura-sensei</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary font-medium bg-primary/8 px-2.5 py-1 rounded-md">Generative AI</span>
                <span className="text-xs text-primary font-medium bg-primary/8 px-2.5 py-1 rounded-md">Cross-Cultural UX</span>
                <span className="text-xs text-primary font-medium bg-primary/8 px-2.5 py-1 rounded-md">HCI</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="relative bg-card rounded-2xl p-7 lg:p-10 border border-border shadow-sm overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/35 rounded-l-2xl" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Human-Centred AI Design
                </span>
                <span className="text-foreground font-medium">SEA Observatory · AI Safety Asia</span>
              </div>
              <span className="px-3 py-1 bg-background border border-border text-xs font-medium rounded-full w-fit shrink-0">
                2025
              </span>
            </div>

            <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground leading-snug mb-4">
              Translating governance complexity into public-interest user experiences
            </h3>

            <p className="text-foreground/75 leading-relaxed mb-7 text-sm sm:text-base">
              Working across SEA Observatory and AI Safety Asia, my role is human-centred AI design — making governance frameworks legible, navigable, and genuinely useful for non-specialist users across Southeast Asia. AI Safety Asia's 2025 flagship work, <em>AI Safety Governance: The Southeast Asian Way</em>, was co-published with the Brookings Institution across 11 countries. The design challenge: when policy is the product, clarity is the craft.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground font-medium border border-border px-2.5 py-1 rounded-md">Human-Centred AI</span>
                <span className="text-xs text-muted-foreground font-medium border border-border px-2.5 py-1 rounded-md">Design</span>
                <span className="text-xs text-muted-foreground font-medium border border-border px-2.5 py-1 rounded-md">SEA</span>
              </div>
              <a
                href="https://www.aisafety.asia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Visit aisafety.asia <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
