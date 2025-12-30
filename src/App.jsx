import { NarutoBackground } from './components/naruto/NarutoBackground'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { ChatAssistant } from "./components/naruto/ChatAssistant"
import { BackgroundMusic } from "./components/naruto/BackgroundMusic"

function App() {
  return (
    <div className="relative min-h-screen">
      <NarutoBackground />
      <div className="relative z-10">
        <BackgroundMusic />
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <ChatAssistant />
        
        {/* Village Footer */}
        <footer className="py-8 text-center border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Ninja Developer. All jutsu reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
