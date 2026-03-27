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
            I'm a product designer based in Phnom Penh, Cambodia — currently designing at ABA Bank and contributing to AI governance at SEA Observatory, alongside teams from Google AI, the World Economic Forum, and the United Nations.
          </p>
          <p>
            My work lives at the edge of two worlds: the financial systems that millions of Cambodians depend on, and the public-interest AI platforms shaping how governments across Southeast Asia make decisions. In both, the challenge is always the same — make the complex feel simple, and make the simple feel right.
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
          className="flex flex-wrap items-center gap-3 mb-16"
        >
          <span className="text-sm text-muted-foreground mr-2">Currently working with</span>
          {["ABA Bank", "SEA Observatory", "IT Academy STEP", "Future.bit Academy"].map(org => (
            <span key={org} className="px-4 py-2 bg-card border border-border/60 rounded-lg text-sm font-medium text-foreground">
              {org}
            </span>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em] block mb-8">What colleagues say</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Kieran Glover */}
            <div className="bg-card border border-border/60 rounded-2xl p-8 flex flex-col">
              <p className="font-serif italic text-foreground/80 text-base leading-relaxed mb-6 flex-1">
                "Theara has a great knowledge of UX/UI design and has demonstrated exceptional skills in creating intuitive, user-centered designs for a variety of projects. He has a deep understanding of user-experience principles, a solid understanding of web development and a keen eye for design aesthetics, resulting in designs that are both functional and aesthetically pleasing. He was constantly seeking new and innovative ways to improve his skills and staying up-to-date with the latest industry trends."
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                <div>
                  <div className="font-semibold text-foreground text-sm">Kieran Glover</div>
                  <div className="text-muted-foreground text-xs mt-0.5">Business Advisor, Cambodia · Managed Kim directly at Mäd</div>
                </div>
              </div>
            </div>

            {/* Him Serey */}
            <div className="bg-card border border-border/60 rounded-2xl p-8 flex flex-col">
              <p className="font-serif italic text-foreground/80 text-base leading-relaxed mb-6 flex-1">
                "I know Mr. Theara is a hardworking, intelligent, thorough and insightful and open minded team member in our firm. His strong relationships with peers, management team and all levels of staff were key to lead him more productive in his job. He was an asset for our company."
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                <div>
                  <div className="font-semibold text-foreground text-sm">Him Serey</div>
                  <div className="text-muted-foreground text-xs mt-0.5">Senior Group Head, HR & Compliance · University Lecturer · Senior to Kim</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
