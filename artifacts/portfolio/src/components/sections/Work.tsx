import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    role: "Human-Centred AI Design",
    org: "SEA Observatory",
    tags: ["AI Governance", "UX Research", "Public Interest", "Southeast Asia"],
    challenge: "AI governance policy is dense, multilingual, and built for specialists. How do you design a platform that makes it usable for regulators, journalists, and civil society organizations across 11 countries — without losing the rigor?",
    action: "Translated complex governance frameworks into clear, navigable user experiences. Designed public-interest interfaces for the Observatory, AI Assistant, and GovSim modules — ensuring every interaction could be trusted and verified by non-specialist users.",
    outcome: "A live platform used across 11 ASEAN jurisdictions, tracking 317+ policy resources.",
    note: "Part of a team that includes alumni from Google AI, the World Economic Forum, the United Nations, and the World Bank.",
    link: "https://www.seaobservatory.org",
    linkText: "Visit seaobservatory.org",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.seaobservatory.org&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 2,
    role: "UX & UI Designer",
    org: "ABA Bank, Cambodia",
    tags: ["FinTech", "Mobile UX", "User Research", "Accessibility"],
    challenge: "Banking apps in Cambodia serve users across a wide range of digital literacy. When money is involved, confusion is not an option. Clarity isn't a nice-to-have — it is the product.",
    action: "Led UX design for mobile banking features. Conducted stakeholder interviews and user testing sessions, facilitated design workshops to define pain points, and created high-fidelity prototypes that balanced regulatory requirements with genuine usability.",
    outcome: "Improved key flows for one of Cambodia's largest and most trusted financial institutions — serving hundreds of thousands of daily users.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.ababank.com&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 3,
    role: "Lead UX Designer",
    org: "Kirirom Digital — Smart Home App",
    tags: ["Mobile App", "IoT", "UX/UI", "Figma", "Prototyping"],
    challenge: "Controlling every electronic device in your home from a single screen sounds simple. But the moment you add schedules, automations, and multiple users — it becomes a usability problem that most smart home apps get wrong.",
    action: "Designed the full UX/UI from user research to interactive Figma prototype. Built user flows, wireframes, and a visual system that made complexity feel effortless.",
    outcome: "A complete, testable prototype with a clear design system — used as the design reference for the development team.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 4,
    role: "UX Designer",
    org: "Unseentra, Cambodia",
    tags: ["Web Design", "Responsive", "Case Study", "Travel"],
    challenge: "Unseentra is Cambodia's first dedicated travel guide platform — covering trips, rentals, activities, and packages. It needed to serve both international tourists discovering Cambodia and local operators managing their listings. Two very different users. One interface.",
    action: "Conducted user research to understand both user groups. Designed a fully responsive website with clear information architecture, consistent visual language, and localized content strategy.",
    outcome: "A responsive, accessible travel platform with a published UX case study documenting the full design process.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1400&h=1050&fit=crop&auto=format"
  }
];

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(idx); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="work" className="scroll-mt-20 bg-card border-y border-border/50">

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">Work</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-card-foreground font-semibold leading-[1.1]">
            Selected projects
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-muted-foreground max-w-xl">
            "Each one started with a question no one had fully answered yet."
          </p>
        </motion.div>
      </div>

      {/* Sticky scroll layout — desktop only */}
      <div className="hidden lg:block max-w-6xl mx-auto px-6 lg:px-8 pb-28">
        <div className="flex gap-16 items-start">

          {/* Left: sticky image */}
          <div className="w-5/12 sticky top-24 self-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/8">
              {projects.map((p, idx) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.org}
                  onError={(e) => { if (p.imageFallback) (e.currentTarget as HTMLImageElement).src = p.imageFallback; }}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-[#C85438]/6 mix-blend-multiply pointer-events-none" />
              {/* Project counter */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-6">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all duration-500 ${
                    idx === activeIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: scrollable project list */}
          <div className="w-7/12 space-y-28 py-4">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                ref={el => { itemRefs.current[idx] = el; }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex flex-col items-start"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-background border border-border/60 text-xs font-medium text-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project info */}
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-1">{project.org}</h3>
                  <p className="text-primary font-medium mb-8">{project.role}</p>

                  {/* Content */}
                  <div className="space-y-5 text-foreground/75 leading-relaxed">
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">The Challenge</h4>
                      <p>{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">What I Did</h4>
                      <p>{project.action}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">The Outcome</h4>
                      <p className="font-medium text-foreground/90">{project.outcome}</p>
                    </div>
                    {project.note && (
                      <div className="p-4 bg-card rounded-xl border border-border/40 text-sm text-muted-foreground">
                        {project.note}
                      </div>
                    )}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 group flex items-center gap-1.5 text-primary font-medium hover:text-primary/70 transition-colors"
                    >
                      {project.linkText || "View Project"}
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile layout — stacked cards */}
      <div className="lg:hidden max-w-2xl mx-auto px-6 pb-20 space-y-20">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md mb-8">
              <img
                src={project.image}
                alt={project.org}
                onError={(e) => { if (project.imageFallback) (e.currentTarget as HTMLImageElement).src = project.imageFallback; }}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-background border border-border/60 text-xs font-medium text-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="font-serif text-2xl font-bold text-card-foreground mb-1">{project.org}</h3>
            <p className="text-primary font-medium mb-6">{project.role}</p>

            <div className="space-y-5 text-foreground/75 leading-relaxed text-sm">
              <div>
                <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">The Challenge</h4>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">What I Did</h4>
                <p>{project.action}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">The Outcome</h4>
                <p className="font-medium text-foreground/90">{project.outcome}</p>
              </div>
              {project.note && (
                <div className="p-4 bg-background rounded-xl border border-border/40 text-sm text-muted-foreground">
                  {project.note}
                </div>
              )}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 group flex items-center gap-1.5 text-primary font-medium"
              >
                {project.linkText || "View Project"}
                <ArrowUpRight size={16} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
}
