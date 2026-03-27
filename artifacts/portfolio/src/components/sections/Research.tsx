import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Research() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="research" className="py-24 lg:py-32 px-6 lg:px-8 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Research
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground font-semibold mb-4">
            Where design meets governance.
          </h2>
          <p className="font-serif italic text-xl text-muted-foreground">
            "Some of the most important design work happens before anyone opens Figma."
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Card 1 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Academic Research
                </span>
                <span className="text-foreground font-medium">
                  Kagawa University, Japan
                </span>
              </div>
              <span className="px-3 py-1 bg-white border border-border text-xs font-medium rounded-full w-fit">
                2024
              </span>
            </div>

            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4">
              Exploring AI-Driven Solutions in Cross-Cultural UX Adaptation (Cambodia & Japan)
            </h3>

            <p className="text-foreground/80 leading-relaxed mb-8">
              How do AI systems need to adapt when the user changes culture? This research explored the intersection of generative AI and cross-cultural design, specifically examining how interfaces need to shift between Cambodian and Japanese user contexts — in language, expectation, trust, and interaction pattern.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/60">
              <div className="text-sm text-muted-foreground">
                Supervisor: <span className="font-medium text-foreground">Kitamura-sensei</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded">Generative AI</span>
                <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded">Cross-Cultural UX</span>
                <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded">HCI</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/40" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                  Contributor
                </span>
                <span className="text-foreground font-medium">
                  AI Safety Asia
                </span>
              </div>
              <span className="px-3 py-1 bg-white border border-border text-xs font-medium rounded-full w-fit">
                2025
              </span>
            </div>

            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-4">
              AI Safety Asia — 2025 Annual Report Contributor
            </h3>

            <p className="text-foreground/80 leading-relaxed mb-8">
              Contributed research insights on how AI governance frameworks affect public-interest design decisions in Southeast Asia. Part of a broader effort to make AI safety conversations accessible and actionable for the region.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground font-medium border border-border px-2 py-1 rounded">AI Safety</span>
                <span className="text-xs text-muted-foreground font-medium border border-border px-2 py-1 rounded">Governance</span>
                <span className="text-xs text-muted-foreground font-medium border border-border px-2 py-1 rounded">Southeast Asia</span>
              </div>
              <a 
                href="https://aisafety.asia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Visit AI Safety Asia <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
