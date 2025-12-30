import { motion } from "framer-motion"
import { KunaiBullet } from "../naruto/KunaiBullet"

export function Education() {
  const milestones = [
    {
      title: "Jote Shibrampur Sikshaniketan (H.S.)",
      degree: "Secondary School Certificate",
      year: "Jan, 2014 - Feb, 2020",
      desc: "Six years of comprehensive secondary education covering fundamental subjects in Mathematics, Science, Languages, and Social Sciences. Built strong academic foundation and essential learning skills for higher secondary studies.",
    },
    {
      title: "Maheshtala High School (H.S)",
      degree: "Higher Secondary Certificate",
      year: "Mar, 2020 - May, 2022",
      desc: "Completed higher secondary education with focus on Science stream. Built strong foundation in Mathematics, Physics and Chemistry fundamentals, preparing for engineering studies and competitive examinations.",
    },
    {
      title: "Narula Institute of Technology",
      degree: "Bachelor of Technology in Computer Science (Data Science)",
      year: "Sep, 2023 - Present",
      desc: "Pursuing specialized coursework in data structures, algorithms, machine learning, and deep learning. Gained hands-on experience in full-stack MERN development, Python programming, and statistical analysis. Actively involved in practical projects including sentiment analysis, NLP applications, and computer vision systems.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">EDUCATION</h2>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-20"
              >
                {/* Content */}
                <div className="bg-card border border-border p-6 rounded-lg">
                  <div className="text-sm text-primary font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground mb-2">{milestone.degree}</p>
                  <p className="text-foreground/80">{milestone.desc}</p>
                </div>

                {/* Kunai Pin */}
                <div className="absolute left-4 top-6 transform -translate-x-1/2">
                  <KunaiBullet className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
