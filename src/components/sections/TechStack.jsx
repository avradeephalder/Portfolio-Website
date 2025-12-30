import { motion } from "framer-motion"

export function TechStack() {
  const technologies = [
    { name: "C", icon: "/c.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" },
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">🍃</div>
        <div className="absolute bottom-10 right-10 text-6xl">⚡</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🔥</div>
        <div className="absolute top-1/4 right-1/4 text-4xl">💧</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">TECH STACK</h2>
          <p className="text-muted-foreground italic text-lg">
            "Knowledge is the greatest weapon in a ninja's arsenal."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Single Scroll Container - REMOVED overflow-hidden */}
          <div className="relative bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg p-10 shadow-2xl">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] pointer-events-none rounded-lg"></div>
            
            {/* Scroll Handles with Leaf Icon - Top */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-b from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
              <img 
                src="/icons/leaf-village.svg" 
                alt="Leaf Village" 
                className="w-12 h-12 opacity-70"
              />
            </div>
            
            {/* Scroll Handles with Leaf Icon - Bottom */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-t from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
              <img 
                src="/icons/leaf-village.svg" 
                alt="Leaf Village" 
                className="w-12 h-12 opacity-70"
              />
            </div>

            {/* Approval Stamp */}
            <div className="absolute top-6 right-6 w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center rotate-12 opacity-30">
              <span className="text-sm font-bold text-primary">承認</span>
            </div>

            {/* Decorative Corner Seals */}
            <div className="absolute top-6 left-6 w-10 h-10 border-2 border-secondary rounded-sm rotate-45 opacity-20"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-secondary rounded-sm rotate-45 opacity-20"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-accent rounded-sm rotate-45 opacity-20"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-primary/30 text-[#f5deb3]">
                Ninja Arsenal
              </h3>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-[#1a1410] to-[#2d2416] p-4 rounded-lg border-l-4 border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img 
                          src={tech.icon} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-medium text-sm text-center text-foreground group-hover:text-accent transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
