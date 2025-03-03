import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";  
import { Grid } from "@/components/Grid";
import { navItems } from "@/data";
import { RecentProjects } from "@/components/RecentProjects";
import { TypewriterEffect } from "@/components/ui/TypeWriterEffect";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="fixed top-5 left-0 w-full z-50" />
        <Hero />
        <TypewriterEffect words={[{ text: "Hi👋, I'm Vinit, Thanks for checking out my portfolio! I’m Vinit, a Full Stack Developer currently pursuing my Master’s in Information Systems at Northeastern University (graduating May 2025). I hold a Bachelor’s in Computer Engineering from the University of Mumbai.", className: "your-class-name" }]} />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
