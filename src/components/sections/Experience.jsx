import { motion } from "framer-motion"
import { KunaiBullet } from "../naruto/KunaiBullet"

export function Experience() {
  const missions = [
    {
      rank: "A-Rank",
      role: "Data Science Intern",
      company: "ShadowFox",
      period: "1st November, 2025 - 30th November, 2025",
      report: [
        "Authored technical documentation for Matplotlib and Seaborn visualization libraries, detailing 15+ plot types with Python code examples and API comparison.",
        "Engineered a three-class sentiment analysis pipeline using Python (NLTK, TF-IDF, scikit-learn) to classify text reviews into Negative, Neutral, and Positive categories.",
        "Conducted end-to-end profitability analysis on 9,994 Superstore transactions using Python (pandas, NumPy, Matplotlib, Seaborn) to identify discount strategy inefficiencies and category performance drivers through feature engineering and data visualization.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">EXPERIENCE</h2>
          <p className="text-muted-foreground italic">Classified professional history file</p>
        </motion.div>

        {/* Mission Cards */}
        <div className="space-y-12">
          {missions.map((mission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg p-8 md:p-10 shadow-2xl"
            >
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

              {/* Mission Rank Stamp */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-primary bg-background flex items-center justify-center shadow-lg z-10">
                <span className="text-sm font-bold text-primary">{mission.rank}</span>
              </div>

              {/* Decorative Corner Seals */}
              <div className="absolute top-6 left-6 w-8 h-8 border-2 border-secondary rounded-sm rotate-45 opacity-20"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-accent rounded-sm rotate-45 opacity-20"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6 pb-4 border-b-2 border-primary/30">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#f5deb3] mb-2">
                    {mission.role}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-1">
                    {mission.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {mission.period}
                  </p>
                </div>

                {/* Report Summary */}
                <div className="bg-black/30 border-l-4 border-primary p-6 rounded-lg">
                  <h4 className="font-bold text-[#f5deb3] uppercase tracking-wide text-sm mb-4">
                    📋 Report Summary:
                  </h4>
                  <ul className="space-y-4">
                    {mission.report.map((item, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 group">
                        <div className="mt-1 flex-shrink-0">
                          <KunaiBullet />
                        </div>
                        <span className="text-foreground/90 leading-relaxed text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
