import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerLinks = [
  { name: "Work", href: "#work" },
  { name: "Teaching", href: "#community" },
  { name: "Article", href: "#writing" },
  { name: "Research", href: "#research" },
  { name: "Connect", href: "#connect" },
];

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FAFAF8] pt-14 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top row — name + nav links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-serif text-xl font-bold text-[#FAFAF8] hover:text-[#C85438] transition-colors"
          >
            Kim Theara
          </a>

          <nav className="flex flex-wrap gap-6 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#9A9490] hover:text-[#FAFAF8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row — copyright + socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-[#9A9490]">
          <div>© {new Date().getFullYear()} Kim Theara. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/kimtheara-productdesign-ai-expert/"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href="https://medium.com/@thearakim68"
              target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Medium <ArrowUpRight size={14} />
            </a>
            <a
              href="#top"
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 ml-2"
            >
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
