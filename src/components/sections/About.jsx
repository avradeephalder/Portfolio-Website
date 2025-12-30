import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">ABOUT</h2>
          <p className="text-muted-foreground italic">
            "Every ninja has their own unique path."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg p-6 shadow-2xl">
              {/* Scroll Handles with Leaf Icon - Top (h-8) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-b from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/icons/leaf-village.svg" 
                  alt="Leaf Village" 
                  className="w-10 h-10 opacity-70"
                />
              </div>
              
              {/* Scroll Handles with Leaf Icon - Bottom (h-8) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-gradient-to-t from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/icons/leaf-village.svg" 
                  alt="Leaf Village" 
                  className="w-10 h-10 opacity-70"
                />
              </div>

              {/* Registration Stamp */}
              <div className="absolute top-4 right-4 w-16 h-16 border-4 border-primary rounded-full flex items-center justify-center rotate-12 opacity-40">
                <span className="text-xs font-bold text-primary">登録</span>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 text-[#f5deb3] pt-4">
                <div className="border-b border-primary/30 pb-3">
                  <div className="text-xs text-muted-foreground mb-1">NAME</div>
                  <div className="text-xl font-bold">Avradeep Halder</div>
                </div>

                <div className="border-b border-primary/30 pb-3">
                  <div className="text-xs text-muted-foreground mb-1">LOCATION</div>
                  <div className="text-lg font-semibold">Kolkata, India 🍃</div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-1">SPECIALIZATION</div>
                  <div className="text-sm">Full-Stack MERN Developer</div>
                  <div className="text-sm">Artificial Intelligence</div>
                  <div className="text-sm">Machine Learning</div>
                  <div className="text-sm">Deep Learning</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Nindo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* My Nindo - Ninja Way */}
            <div className="relative bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg p-8 shadow-2xl h-full">
              {/* Scroll Handles with Leaf Icon - Top (h-9) */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-b from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/icons/leaf-village.svg" 
                  alt="Leaf Village" 
                  className="w-12 h-12 opacity-70"
                />
              </div>
              
              {/* Scroll Handles with Leaf Icon - Bottom (h-9) */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-48 h-9 bg-gradient-to-t from-[#8b6f47] to-[#6b5437] rounded-full shadow-lg flex items-center justify-center">
                <img 
                  src="/icons/leaf-village.svg" 
                  alt="Leaf Village" 
                  className="w-12 h-12 opacity-70"
                />
              </div>

              {/* Decorative Seals */}
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-secondary rounded-sm rotate-45 opacity-20"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-accent rounded-sm rotate-45 opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/30">
                  <span className="text-4xl">🔥</span>
                  <h3 className="text-3xl font-bold text-[#f5deb3]">My Nindo - My Ninja Way</h3>
                </div>

                <div className="bg-black/30 border-l-4 border-primary p-6 rounded-lg mb-6">
                  <blockquote className="text-xl text-foreground italic leading-relaxed">
                    "I never go back on my word, because that's my ninja way! No matter how hard the challenge, I will never give up. 
                    With every line of code, I push forward—because giving up is not in my dictionary. 
                    That is my way of the ninja!"
                  </blockquote>
                  <div className="mt-4 text-right text-sm text-muted-foreground">
                    - Inspired by Naruto Uzumaki & Rock Lee
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary">6+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
