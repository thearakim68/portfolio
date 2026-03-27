import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Theara has a great knowledge of UX/UI design and has demonstrated exceptional skills in creating intuitive, user-centered designs for a variety of projects. He has a deep understanding of user-experience principles, a solid understanding of web development and a keen eye for design aesthetics, resulting in designs that are both functional and aesthetically pleasing. He was constantly seeking new and innovative ways to improve his skills and staying up-to-date with the latest industry trends.",
    name: "Kieran Glover",
    title: "Business Advisor, Cambodia",
    context: "Managed Kim directly at Mäd"
  },
  {
    quote: "I know Mr. Theara is a hardworking, intelligent, thorough and insightful and open minded team member in our firm. His strong relationships with peers, management team and all levels of staff were key to lead him more productive in his job. He was an asset for our company.",
    name: "Him Serey",
    title: "Senior Group Head, HR & Compliance · University Lecturer",
    context: "Senior to Kim"
  }
];

export function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-6 lg:px-8 bg-card scroll-mt-20">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Recommendations
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground font-semibold leading-[1.1]">
            What colleagues say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } } }}
              className="bg-background border border-border/60 rounded-2xl p-8 lg:p-10 flex flex-col"
            >
              <span className="font-serif text-5xl text-primary/30 leading-none mb-4 select-none">"</span>
              <p className="font-serif italic text-foreground/80 text-base sm:text-lg leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>
              <div className="pt-6 border-t border-border/40">
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs mt-1">{t.title}</div>
                <div className="text-muted-foreground/70 text-xs mt-0.5">{t.context}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
