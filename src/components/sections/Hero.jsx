import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { sounds } from "../../lib/soundEffects"

export function Hero() {
  // Scroll to Projects Section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🍃</div>
        <div className="absolute bottom-20 right-10 text-6xl">⚡</div>
        <div className="absolute top-1/2 right-20 text-5xl">🔥</div>
        <div className="absolute bottom-1/3 left-20 text-5xl">💧</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Profile Photo with Orange Border */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-primary overflow-hidden shadow-2xl">
                <img
                  src="/profile/profile-photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Headband Symbol - Larger Size */}
              <div className="absolute -bottom-[92px] left-1/2 -translate-x-1/2">
                <img 
                  src="/icons/headband.svg" 
                  alt="Headband" 
                  className="w-[200px] h-[200px] drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-4 text-lg"
            >
              MERN Stack Developer | Machine Learning Enthusiast
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight"
            >
              Exploring Technology with the Spirit of a Ninja
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap"
            >
              {/* Summon Projects Button - Scrolls to Projects Section */}
              <Button 
                variant="jutsu" 
                size="lg" 
                onClick={() => {
                  sounds.kuchiyose()
                  scrollToProjects()
                }}
              >
                SUMMON PROJECTS
                <span className="ml-2 text-xs">KUCHIYOSE NO JUTSU!</span>
              </Button>
              
              {/* View Resume Button - Opens PDF */}
              <Button variant="outline" onClick={sounds.narutoJutsu} size="lg" asChild>
                <a href="/profile/Avradeep_Halder_CV.pdf" target="_blank" rel="noopener noreferrer">
                  View Scroll (Resume)
                </a>
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator - Fixed Position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, repeat: Infinity, duration: 2 }}
          className="absolute bottom left-1/2 -translate-x-1/2 text-center w-full"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll to continue your journey</p>
          <div className="animate-bounce text-2xl text-muted-foreground">↓</div>
        </motion.div>
      </div>
    </section>
  )
}
