import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    num: "01",
    role: "Human-Centred AI Design",
    org: "SEA Observatory",
    tags: ["AI Governance", "UX Research", "Public Interest", "Southeast Asia"],
    description: "AI governance policy is dense, technical, and built for specialists — not for the 11 countries it's supposed to govern. My role was to close that gap: turning the Observatory's frameworks, AI Assistant, and GovSim modules into clear, navigable experiences that non-specialist users could actually trust and act on.",
    outcome: "A live platform across 11 ASEAN jurisdictions tracking 317+ policy resources — built alongside alumni from Google AI, the World Economic Forum, the United Nations, and the World Bank.",
    link: "https://www.seaobservatory.org",
    linkText: "Visit seaobservatory.org",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.seaobservatory.org&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 2,
    num: "02",
    role: "UX & UI Designer",
    org: "ABA Bank, Cambodia",
    tags: ["FinTech", "Mobile UX", "Internet Banking", "Web Portal"],
    description: "Business banking users aren't browsing — they're managing cash flow, approving transfers, and making decisions under pressure. I designed four products in ABA's business suite: Mobile Banking for Business, Internet Banking for Business, a landing page, and the web portal. Each one required understanding what a busy finance manager actually needs, then removing every obstacle between them and the task.",
    outcome: "End-to-end design across mobile, web, and marketing for one of Cambodia's largest and most trusted financial institutions.",
    link: "https://www.ababank.com/aba-business/",
    linkText: "View ABA Business",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.ababank.com%2Faba-business%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 3,
    num: "03",
    role: "UX/UI Designer, Brand & Web",
    org: "Kirirom Digital, Japan",
    tags: ["UX/UI Design", "Branding", "Web Development", "Creative Tech"],
    description: "Kirirom Digital is a Japan-based tech and creative studio. I worked across the full stack — UX and UI design, brand identity, and web development. When design and implementation sit in the same hands, there are no handoff gaps. Every decision had to hold up visually, functionally, and in code.",
    outcome: "End-to-end creative and technical delivery across UX/UI, branding, and web development for a Japan-based technology studio.",
    link: "https://www.kirirom-digital.com/",
    linkText: "Visit kirirom-digital.com",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.kirirom-digital.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 4,
    num: "04",
    role: "Web Designer & Developer",
    org: "Mirai Kikai, Japan",
    tags: ["Web Design", "Web Development", "Robotics", "Corporate Site"],
    description: "Mirai Kikai builds autonomous robots for demanding real-world environments — solar panel cleaning in deserts, precision marking on construction sites. Their technology is serious engineering; their online presence needed to match. I designed and developed the English-language corporate website, giving a high-precision robotics company a digital face that communicates trust, capability, and vision.",
    outcome: "A live corporate website for a Japanese robotics company, presenting cutting-edge autonomous technology to a global audience.",
    link: "https://miraikikai.jp/en/",
    linkText: "Visit miraikikai.jp",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fmiraikikai.jp%2Fen%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 5,
    num: "05",
    role: "Web Designer & Developer",
    org: "Language House, Japan",
    tags: ["Web Design", "Web Development", "Education", "Corporate Site"],
    description: "Fifty years of history is a lot to carry into a website. Language House has trained over 400,000 employees at Japanese companies — a track record that speaks for itself, as long as the website gets out of the way. I designed and built the English-language site around one goal: make the expertise immediately obvious, and the next step immediately clear.",
    outcome: "A clean, trustworthy corporate site for one of Japan's most established English training institutions, built for a global audience.",
    link: "https://www.languagehouse.jp/en/",
    linkText: "Visit languagehouse.jp",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.languagehouse.jp%2Fen%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 6,
    num: "06",
    role: "UX Research & Testing",
    org: "OWSO — Cambodia Government",
    tags: ["UX Testing", "Government", "Accessibility", "Public Service"],
    description: "The One Window Service Office (OWSO) is a Cambodian government digital platform for public services. Government websites carry an invisible weight — when citizens can't complete a task, the cost isn't a bounced session, it's a missed permit, a delayed service, a wasted day. I conducted structured UX testing sessions, surfacing the friction points where real users got stuck and translating those into actionable design recommendations.",
    outcome: "A structured UX research report with prioritised findings and recommendations for Cambodia's public-facing government service portal.",
    link: "https://www.owso.gov.kh/en/",
    linkText: "Visit owso.gov.kh",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.owso.gov.kh%2Fen%2F&screenshot=true&meta=false&embed=screenshot.url",
    imageFallback: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=1050&fit=crop&auto=format"
  },
  {
    id: 7,
    num: "07",
    role: "UX Designer",
    org: "Unseentra, Cambodia",
    tags: ["Web Design", "Responsive", "Travel", "Case Study"],
    description: "Cambodia's first dedicated travel platform had two audiences who almost never think the same way: international tourists looking for discovery, and local operators who just need to be found. I led user research across both groups, then designed a responsive site that gave each visitor what they came for — without either one noticing it was built for the other.",
    outcome: "A responsive, accessible travel platform with a full UX case study documenting the research and design process.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1400&h=1050&fit=crop&auto=format"
  }
];

function BrowserBar({ url }: { url?: string }) {
  const display = url
    ? url.replace("https://www.", "").replace("https://", "")
    : "project preview";
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-card border-b border-border/40 shrink-0">
      <div className="flex gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/55" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/55" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/55" />
      </div>
      <div className="flex-1 bg-background/70 border border-border/30 rounded-md px-2.5 py-[3px] text-[11px] font-mono text-muted-foreground truncate min-w-0">
        {display}
      </div>
    </div>
  );
}

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      // rootMargin creates a narrow detection band at ~35-65% from viewport top
      // so the image only switches when the user is clearly reading that project
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(idx); },
        { threshold: 0, rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="work" className="scroll-mt-20 bg-card border-y border-border/50">

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 75, damping: 20, mass: 1 }}
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

      {/* ── DESKTOP: sticky image + scrollable content ── */}
      <div className="hidden lg:block max-w-6xl mx-auto px-6 lg:px-8 pb-28">
        <div className="flex gap-14 items-start">

          {/* Left: sticky browser mockup */}
          <div className="w-[42%] sticky top-24 self-start">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/30 bg-background">
              <BrowserBar url={projects[activeIndex].link} />
              <div className="relative aspect-[4/3] bg-card overflow-hidden">
                {projects.map((p, idx) => (
                  <img
                    key={p.id}
                    src={p.image}
                    alt={p.org}
                    onError={(e) => {
                      if (p.imageFallback) (e.currentTarget as HTMLImageElement).src = p.imageFallback;
                    }}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                      idx === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {/* Bottom fade to blend the screenshot edge */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
                {/* Counter */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-foreground text-[11px] font-semibold px-2.5 py-1 rounded-full border border-border/20">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-5 px-1">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View project ${idx + 1}`}
                  className={`rounded-full transition-all duration-500 ${
                    idx === activeIndex ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: scrollable project list */}
          <div className="flex-1 divide-y divide-border/40">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                ref={el => { itemRefs.current[idx] = el; }}
                className={idx === 0 ? "pb-20" : "py-20"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  {/* Number + role */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.14em]">
                      {project.num}
                    </span>
                    <span className="w-6 h-px bg-border" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.1em]">
                      {project.role}
                    </span>
                  </div>

                  {/* Org name */}
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground mb-5 leading-tight">
                    {project.org}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-background border border-border/50 text-xs font-medium text-foreground/70 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Outcome callout */}
                  <div className="pl-4 border-l-2 border-primary/60 py-1 mb-7">
                    <p className="text-sm font-medium text-foreground/85 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/70 transition-colors"
                    >
                      {project.linkText || "View Project"}
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── MOBILE: stacked cards ── */}
      <div className="lg:hidden max-w-2xl md:max-w-3xl mx-auto px-5 md:px-8 pb-20 space-y-16">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: idx * 0.08 }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 350, damping: 28 } }}
          >
            {/* Number + role header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest">
                {project.num}
              </span>
              <span className="w-4 h-px bg-border" />
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider truncate">
                {project.role}
              </span>
            </div>

            {/* Org name */}
            <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4 leading-tight">
              {project.org}
            </h3>

            {/* Browser mockup image */}
            <div className="rounded-xl overflow-hidden border border-border/30 shadow-md bg-background mb-5">
              <BrowserBar url={project.link} />
              <div className="relative aspect-[16/9] overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.org}
                  onError={(e) => {
                    if (project.imageFallback) (e.currentTarget as HTMLImageElement).src = project.imageFallback;
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-background border border-border/50 text-[11px] font-medium text-foreground/65 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-foreground/70 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Outcome callout */}
            <div className="pl-4 border-l-2 border-primary/60 py-0.5 mb-5">
              <p className="text-sm font-medium text-foreground/85 leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium"
              >
                {project.linkText || "View Project"}
                <ArrowUpRight size={14} />
              </a>
            )}
          </motion.article>
        ))}
      </div>

    </section>
  );
}
