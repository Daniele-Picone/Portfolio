
import'./context/ThemeContext.jsx';
import HeroSection from "@/components/layout/Hero_section";
import ProjectSection from "@/components/layout/ProjectSection.jsx";
import TimelineSection from "@/components/layout/TimelineSection.jsx";
import SkillsSection from "@/components/layout/SkillsSection.jsx";


export default function Home() {
  return (
  
      <div>
            <HeroSection/>
            <TimelineSection/> 
            <SkillsSection/>
            <ProjectSection/>
      </div>
    
  );
}
