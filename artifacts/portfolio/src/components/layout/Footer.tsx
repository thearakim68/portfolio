import { ArrowUpRight, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FAFAF8] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-sm text-[#6B6860]">
          © {new Date().getFullYear()} Kim Theara. All rights reserved.
        </div>
        
        <div className="text-sm text-center md:text-left">
          <span className="font-medium text-[#FAFAF8]">Kim Theara</span>
          <span className="text-[#6B6860] mx-2">·</span>
          <span className="text-[#6B6860]">Product Designer · AI Researcher · Educator</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-[#6B6860]">
          <a 
            href="https://www.linkedin.com/in/kimtheara-productdesign-ai-expert/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a 
            href="https://medium.com/@thearakim68" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Medium <ArrowUpRight size={14} />
          </a>
          <a 
            href="#top" 
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1 ml-4"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
