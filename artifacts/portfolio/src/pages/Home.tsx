import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Research } from "@/components/sections/Research";
import { Writing } from "@/components/sections/Writing";
import { Community } from "@/components/sections/Community";
import { Connect } from "@/components/sections/Connect";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Research />
        <Writing />
        <Community />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
