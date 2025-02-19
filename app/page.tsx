import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";  
import { Grid } from "@/components/Grid";

const navItems = [
  { name: "Home", link: "/", iconName: "Home" },
  { name: "About", link: "/about", iconName: "User" },
  { name: "Education", link: "/education", iconName: "GraduationCap" },
  { name: "Experience", link: "/experience", iconName: "Briefcase" },
  { name: "Skills", link: "/skills", iconName: "Code2" },
  { name: "Projects", link: "/projects", iconName: "FolderGit2" },
  { name: "Resume", link: "/assets/resumes/resume.pdf", iconName: "FileText" },
  { name: "Contact", link: "/contact", iconName: "Mail" }
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="fixed top-0 left-0 w-full z-50" />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
