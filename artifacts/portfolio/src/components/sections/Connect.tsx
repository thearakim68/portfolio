import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Connect() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="connect" className="py-32 px-6 lg:px-8 bg-card scroll-mt-20 flex justify-center border-t border-border/50">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
        className="w-full max-w-3xl text-center flex flex-col items-center"
      >
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] text-card-foreground font-bold mb-8">
          Let's build something<br />that matters.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Whether you're looking for a designer, a collaborator, a researcher, or a speaker — I'd love to hear what you're working on.
        </p>
        
        <a 
          href="mailto:thearakim68@gmail.com?subject=Hello from your portfolio"
          className="px-8 py-4 bg-foreground text-background font-medium rounded-xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group text-lg mb-20"
        >
          Send me a message
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-border/60">
          <a 
            href="https://www.linkedin.com/in/kimtheara-productdesign-ai-expert/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group"
          >
            LinkedIn <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="https://medium.com/@thearakim68" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group"
          >
            Medium <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="https://www.seaobservatory.org/team" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors group"
          >
            SEA Observatory <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          Based in Phnom Penh, Cambodia. Open to global opportunities.
        </p>
      </motion.div>
    </section>
  );
}
