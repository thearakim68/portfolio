import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Writing() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="writing" className="py-24 lg:py-32 px-6 lg:px-8 bg-card scroll-mt-20 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Writing
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-card-foreground font-semibold mb-4">
            I write to understand.
          </h2>
          <p className="text-muted-foreground">
            Published on Medium · Design Bootcamp · 900+ followers
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.a 
          href="https://medium.com/design-bootcamp/typography-guide-in-user-interface-design-cd70d2590e85"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="group block bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:border-border transition-all duration-300 mb-8"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[45%] h-64 md:h-auto overflow-hidden">
              <img 
                src="https://miro.medium.com/v2/resize:fill:640:428/1*tq9rwGs5cT4Rxu3-GwhmwQ.png" 
                alt="Typography Guide" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded">Most Read</span>
                <span className="text-sm text-muted-foreground">Feb 7, 2024</span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Typography Guide in User Interface Design
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                "The choices most designers make unconsciously — typeface, hierarchy, spacing, contrast — are actually a set of learnable principles. This guide breaks them down, one decision at a time."
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-sm font-medium text-muted-foreground flex gap-4">
                  <span>👏 981 claps</span>
                  <span>💬 7 responses</span>
                </div>
                <span className="flex items-center gap-1 text-primary font-medium">
                  Read on Medium <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.a 
            href="https://medium.com/design-bootcamp/golden-ratio-in-user-interface-d70f4d652872"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="group flex flex-col bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-border">
              <img 
                src="https://miro.medium.com/v2/resize:fill:320:214/1*UjxIihlkqmttsXEymfXzeA.png" 
                alt="Golden Ratio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs text-muted-foreground mb-3">May 25, 2024</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Golden Ratio in User Interface
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                One mathematical proportion quietly governs the layouts, icons, and compositions of the most satisfying designs you've ever used. Here's how to use it deliberately.
              </p>
              <div className="flex items-center justify-between mt-auto text-sm">
                <span className="font-medium text-muted-foreground">👏 620 claps</span>
                <span className="text-primary font-medium flex items-center">Read <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></span>
              </div>
            </div>
          </motion.a>

          <motion.a 
            href="https://medium.com/@thearakim68/two-years-working-in-japan-my-life-journey-86e7da06beb8"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="group flex flex-col bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-border">
              <img 
                src="https://miro.medium.com/v2/resize:fill:320:214/1*eedocQvFOZcoXjMY5gcoqg.png" 
                alt="Japan Journey" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs text-muted-foreground mb-3">Jan 9, 2025</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Two Years Working in Japan — My Life Journey
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                Most people ask me why I came back. Here's an honest answer — and what two years in Japan changed about the way I see work, design, and home.
              </p>
              <div className="flex items-center justify-between mt-auto text-sm">
                <span className="font-medium text-muted-foreground">👏 176 claps</span>
                <span className="text-primary font-medium flex items-center">Read <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></span>
              </div>
            </div>
          </motion.a>

          <motion.a 
            href="https://medium.com/@thearakim68"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
            className="group flex flex-col bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 bg-[#111111] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 border-2 border-[#FAFAF8]/20 rounded-full flex items-center justify-center mb-4 text-white">
                <span className="font-serif italic text-xl">"</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs text-muted-foreground mb-3">2024</span>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Design in the Age of AI
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                AI is changing every creative field. But the question isn't whether AI replaces designers. It's whether designers understand what AI actually is.
              </p>
              <div className="flex items-center justify-between mt-auto text-sm">
                <span className="font-medium text-muted-foreground">Medium</span>
                <span className="text-primary font-medium flex items-center">Read <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></span>
              </div>
            </div>
          </motion.a>

        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://medium.com/@thearakim68" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            See all articles on Medium <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
