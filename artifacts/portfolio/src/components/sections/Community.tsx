import { motion } from "framer-motion";

export function Community() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const timeline = [
    {
      year: "2025",
      title: "GenAI UX & UI Instructor",
      org: "IT Academy STEP Cambodia",
      desc: "Teaching students to use generative AI tools before most institutions know what to teach. The curriculum had to be practical from day one — real tools, real workflows, real design problems."
    },
    {
      year: "2023 – Present",
      title: "UX & UI Instructor",
      org: "Future.bit Academy",
      desc: "Building design foundations for the next generation of Cambodian designers — user research, design thinking, Figma, and the discipline of putting people before pixels."
    },
    {
      year: "Dec 2025",
      title: "Guest Speaker",
      org: "PSE — Pour un Sourire d'enfant",
      desc: "Spoke to students about design thinking, front-end work, and how UX solves real problems — alongside peers covering web development and career preparation. One of those rooms where you leave more energised than when you walked in."
    },
    {
      year: "Ongoing",
      title: "Director, Individual Committee",
      org: "JCI Cambodia",
      desc: "Developing programs that connect young Cambodians with professional skills, civic leadership, and a community that takes growth seriously."
    }
  ];

  return (
    <section id="community" className="py-20 lg:py-28 px-6 lg:px-8 bg-background scroll-mt-20">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Teaching & Community
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground font-semibold leading-[1.1]">
            Design is more valuable when it's shared
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-24">

          {/* Left — Intro + Quote */}
          <div className="flex-1 lg:max-w-md">
            <div className="space-y-5 text-base sm:text-lg text-foreground/75 leading-relaxed mb-12">
              <p>
                Since 2023, I've been teaching Digital Marketing and UX/UI Design across Cambodia — in academies, universities, and community classrooms. Over 600 students and counting. Some of the most meaningful moments of my career have happened in front of a whiteboard, not a screen.
              </p>
              <p>
                Design education in Southeast Asia still has wide gaps. I don't think that changes by waiting.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-1">
              <p className="font-serif italic text-2xl sm:text-3xl text-primary leading-snug mb-3">
                "A field only advances when the knowledge inside it moves."
              </p>
              <footer className="text-foreground font-medium text-sm">— Kim Theara</footer>
            </blockquote>
          </div>

          {/* Right — Timeline */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative border-l border-border pl-7 pb-2 space-y-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.08 } } }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1.5 w-[10px] h-[10px] bg-background border-2 border-primary rounded-full" />
                  <span className="text-xs font-bold text-primary mb-1.5 block uppercase tracking-wider">{item.year}</span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-0.5">{item.title}</h3>
                  <div className="text-foreground/80 font-medium text-sm mb-2">{item.org}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
