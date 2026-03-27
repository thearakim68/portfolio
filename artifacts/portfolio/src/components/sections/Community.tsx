import { motion } from "framer-motion";

export function Community() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const timeline = [
    {
      year: "2025",
      title: "GenAI UX & UI Instructor",
      org: "IT Academy STEP Cambodia Institute",
      desc: "Teaching generative AI tools and UX principles to design students."
    },
    {
      year: "2023 – Present",
      title: "UX & UI Instructor",
      org: "Future.bit Academy",
      desc: "Introducing design thinking and Figma to the next generation of Cambodian designers."
    },
    {
      year: "2024",
      title: "Guest Educator",
      org: "PSE (Phare Ponleu Selpak)",
      desc: "Delivered STEM design sessions for female students. Received a handmade STEM Guide Manual as a thank-you gift — one of the most meaningful days on record."
    },
    {
      year: "Ongoing",
      title: "Director, Individual Committee",
      org: "JCI Cambodia (Junior Chamber International)",
      desc: "Community leadership and youth development across Cambodia."
    }
  ];

  return (
    <section id="community" className="py-24 lg:py-32 px-6 lg:px-8 bg-background scroll-mt-20">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Teaching & Community
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground font-semibold">
            Design is more valuable when it's shared.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Intro + Quote */}
          <div className="flex-1">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-16 max-w-xl">
              <p>
                Since 2023, I've been teaching UX design and generative AI across Cambodia — in academies, universities, and community classrooms. Some of the most meaningful moments of my career have happened in front of a whiteboard, not a screen.
              </p>
              <p>
                Design education in Southeast Asia still has wide gaps. I don't think that changes by waiting.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="font-serif italic text-3xl md:text-4xl text-primary leading-tight mb-4">
                "A field only advances when the knowledge inside it moves."
              </p>
              <footer className="text-foreground font-medium">— Kim Theara</footer>
            </blockquote>
          </div>

          {/* Right Timeline */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative border-l border-border pl-8 pb-4 space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] top-1.5 w-[11px] h-[11px] bg-background border-2 border-primary rounded-full" />
                  
                  <span className="text-sm font-bold text-primary mb-2 block">{item.year}</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                  <div className="text-foreground font-medium mb-3">{item.org}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
