import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Connect() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="connect" className="py-24 lg:py-36 px-6 lg:px-8 bg-card scroll-mt-20 border-t border-border/50">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="w-full max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] text-card-foreground font-bold mb-6">
          Let's build something<br className="hidden sm:block" /> that matters
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Whether you're looking for a designer, a collaborator, a researcher, or a speaker — I'd love to hear what you're working on.
        </p>

        <a
          href="mailto:thearakim68@gmail.com?subject=Hello from your portfolio"
          className="px-7 py-4 bg-foreground text-background font-medium rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group text-base mb-16"
        >
          Send me a message
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-10 border-t border-border/50">
          <a
            href="https://www.linkedin.com/in/kimtheara-productdesign-ai-expert/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group text-sm"
          >
            LinkedIn <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://medium.com/@thearakim68"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group text-sm"
          >
            Medium <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://www.seaobservatory.org/team"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group text-sm"
          >
            SEA Observatory <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Based in Phnom Penh, Cambodia · Open to global opportunities
        </p>
      </motion.div>
    </section>
  );
}
