import StarsBackground from "./components/StarsBackground"
// import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
// import SkillsSection from "./components/SkillsSection"
// import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarsBackground />
       
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
         
        
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
