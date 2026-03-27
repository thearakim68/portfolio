import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-20 px-6 lg:px-8 bg-background overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C85438 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 z-10">
        
        {/* Left Content */}
        <div className="flex-1 w-full flex flex-col justify-center items-start">
          <motion.div 
            custom={1} initial="hidden" animate="visible" variants={textVariants}
            className="mb-6"
          >
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.15em]">
              Product Designer · AI Researcher · Educator
            </span>
          </motion.div>
          
          <motion.h1 
            custom={2} initial="hidden" animate="visible" variants={textVariants}
            className="font-serif text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold text-foreground mb-8"
          >
            Kim Theara
          </motion.h1>
          
          <motion.h2 
            custom={3} initial="hidden" animate="visible" variants={textVariants}
            className="font-serif italic text-2xl sm:text-3xl text-foreground/90 max-w-[640px] leading-relaxed mb-8"
          >
            "Designing human experiences at the intersection of AI, governance, and the people technology is supposed to serve."
          </motion.h2>

          <motion.div 
            custom={4} initial="hidden" animate="visible" variants={textVariants}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
          >
            <span>📍 Based in Phnom Penh, Cambodia</span>
          </motion.div>

          <motion.div 
            custom={5} initial="hidden" animate="visible" variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#work"
              className="px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#writing"
              className="px-6 py-3.5 bg-transparent border border-border text-foreground font-medium rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group"
            >
              Read My Writing
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-primary opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0" />
            </a>
          </motion.div>
        </div>

        {/* Right Photo */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={textVariants}
          className="w-full md:w-[40%] max-w-[440px] shrink-0"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
            {/* Warm overlay to fit the theme */}
            <div className="absolute inset-0 bg-[#C85438]/5 mix-blend-multiply z-10 pointer-events-none" />
            <img 
              src="https://www.seaobservatory.org/_next/image?url=%2Fteam%2Fkim_theara.jpg&w=3840&q=75" 
              alt="Kim Theara Portrait" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
        
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
