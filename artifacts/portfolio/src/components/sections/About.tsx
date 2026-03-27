import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stats = [
    { value: "5+", label: "Years of professional experience" },
    { value: "2", label: "Countries worked in (Cambodia & Japan)" },
    { value: "3,000+", label: "Students introduced to design & AI" },
    { value: "981", label: "Claps on most-read article" }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8 bg-background scroll-mt-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            About
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-semibold">
            I turn complexity into clarity.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Text */}
          <div className="flex-1 space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-[680px]">
            <p>
              I'm a product designer based in Phnom Penh, Cambodia — currently designing at ABA Bank and contributing to AI governance at SEA Observatory, alongside teams from Google AI, the World Economic Forum, and the United Nations.
            </p>
            <p>
              My work lives at the edge of two worlds: the financial systems that millions of Cambodians depend on every day, and the public-interest AI platforms shaping how governments across Southeast Asia make decisions. In both, the challenge is always the same — make the complex feel simple, and make the simple feel right.
            </p>
            <p>
              I also teach. At IT Academy STEP, Future.bit Academy, and community classrooms across Phnom Penh, I've introduced hundreds of students to design thinking and generative AI. Not because it's a side project — but because a field only advances when the knowledge inside it moves.
            </p>

            <div className="pt-8 border-t border-border/60">
              <span className="text-sm font-medium text-muted-foreground block mb-3">Currently working with:</span>
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground">
                <span className="px-3 py-1.5 bg-card rounded-md">ABA Bank</span>
                <span className="px-3 py-1.5 bg-card rounded-md">SEA Observatory</span>
                <span className="px-3 py-1.5 bg-card rounded-md">IT Academy STEP</span>
                <span className="px-3 py-1.5 bg-card rounded-md">Future.bit Academy</span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
