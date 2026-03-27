import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Work() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projects = [
    {
      id: 1,
      role: "Human-Centred AI Design",
      org: "SEA Observatory / AI Safety Asia",
      tags: ["AI Governance", "UX Research", "Public Interest", "Southeast Asia"],
      challenge: "AI governance policy is dense, multilingual, and built for specialists. How do you design a platform that makes it usable for regulators, journalists, and civil society organizations across 11 countries — without losing the rigor?",
      action: "Translated complex governance frameworks into clear, navigable user experiences. Designed public-interest interfaces for the Observatory, AI Assistant, and GovSim modules — ensuring every interaction could be trusted and verified by non-specialist users.",
      outcome: "A live platform used across 11 ASEAN jurisdictions, tracking 317+ policy resources.",
      note: "Part of a team that includes alumni from Google AI, the World Economic Forum, the United Nations, and the World Bank.",
      link: "https://www.seaobservatory.org",
      linkText: "Visit seaobservatory.org",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1200&fit=crop" // abstract data interface
    },
    {
      id: 2,
      role: "UX & UI Designer",
      org: "ABA Bank, Cambodia",
      tags: ["FinTech", "Mobile UX", "User Research", "Accessibility"],
      challenge: "Banking apps in Cambodia serve users across a wide range of digital literacy. When money is involved, confusion is not an option. Clarity isn't a nice-to-have — it is the product.",
      action: "Led UX design for mobile banking features. Conducted stakeholder interviews and user testing sessions, facilitated design workshops to define pain points, and created high-fidelity prototypes that balanced regulatory requirements with genuine usability.",
      outcome: "Improved key flows for one of Cambodia's largest and most trusted financial institutions — serving hundreds of thousands of daily users.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=1600&h=1200&fit=crop" // mobile banking finance
    },
    {
      id: 3,
      role: "Lead UX Designer",
      org: "Kirirom Digital",
      tags: ["Mobile App", "IoT", "UX/UI", "Figma", "Prototyping"],
      challenge: "Controlling every electronic device in your home from a single screen sounds simple. But the moment you add schedules, automations, and multiple users — it becomes a usability problem that most smart home apps get wrong.",
      action: "Designed the full UX/UI from user research to interactive Figma prototype. Built user flows, wireframes, and a visual system that made complexity feel effortless.",
      outcome: "A complete, testable prototype with a clear design system — used as the design reference for the development team.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&h=1200&fit=crop" // smart home mobile app
    },
    {
      id: 4,
      role: "UX Designer",
      org: "Unseentra, Cambodia",
      tags: ["Web Design", "Responsive", "Case Study", "Travel"],
      challenge: "Unseentra is Cambodia's first dedicated travel guide platform — covering trips, rentals, activities, and packages. It needed to serve both international tourists discovering Cambodia and local operators managing their listings. Two very different users. One interface.",
      action: "Conducted user research to understand both user groups. Designed a fully responsive website with clear information architecture, consistent visual language, and localized content strategy.",
      outcome: "A responsive, accessible travel platform with a published UX case study documenting the full design process.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=1200&fit=crop" // responsive travel website
    }
  ];

  return (
    <section id="work" className="py-24 lg:py-32 bg-card scroll-mt-20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            Work
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-card-foreground font-semibold mb-4">
            Selected projects.
          </h2>
          <p className="font-serif italic text-xl text-muted-foreground">
            "Each one started with a question no one had fully answered yet."
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 !== 0;
          return (
            <motion.div 
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={containerVariants}
              className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              
              {/* Project Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/5 group">
                <div className="w-full h-full bg-border relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.org} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle warm wash overlay */}
                  <div className="absolute inset-0 bg-[#C85438]/5 mix-blend-multiply pointer-events-none" />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-border/60 text-xs font-medium text-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-serif text-3xl font-bold text-card-foreground mb-2">
                  {project.org}
                </h3>
                <p className="text-primary font-medium mb-8">
                  {project.role}
                </p>

                <div className="space-y-6 text-foreground/80">
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">The Challenge</h4>
                    <p className="leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">What I Did</h4>
                    <p className="leading-relaxed">{project.action}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">The Outcome</h4>
                    <p className="leading-relaxed font-medium">{project.outcome}</p>
                  </div>
                  
                  {project.note && (
                    <div className="p-4 bg-white/50 rounded-xl border border-border/50 text-sm text-muted-foreground mt-4">
                      {project.note}
                    </div>
                  )}
                </div>

                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {project.linkText || "View Project"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
        className="mt-32 text-center"
      >
        <p className="text-muted-foreground mb-4">These are a few selected pieces. There's more behind each one.</p>
        <a href="#connect" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
          Get in touch to see more <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
