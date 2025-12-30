import { motion } from "framer-motion"
import { Card } from "../ui/Card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "../ui/Button"
import { sounds } from "../../lib/soundEffects"

export function Projects() {
  const projects = [
  {
    title: "Road Lane Lines Detection",
    rank: "A-Rank",
    desc: "Deep learning lane detection system using PyTorch UNet trained on TuSimple dataset. Real-time video processing with full-stack React + Flask application.",
    tech: ["PyTorch", "OpenCV", "React", "Flask"],
    link: "#",
    github: "https://github.com/avradeephalder/Road-Lane-Lines-Detection",
    image: "/project-images/lane-detection.png",
    glowColor: "chakra-blue",
  },
  {
    title: "Resume Parser",
    rank: "A-Rank",
    desc: "AI-powered resume parser that extracts structured data from PDF resumes using Llama 3.1. Features NLP-powered extraction and real-time processing.",
    tech: ["React", "FastAPI", "Ollama", "Llama 3.1"],
    link: "#",
    github: "https://github.com/avradeephalder/Resume-Parser",
    image: "/project-images/resume-parser.png",
    glowColor: "primary",
  },
  {
    title: "Smart Text Corrector",
    rank: "B-Rank",
    desc: "AI-powered text correction tool using NLP and ML models with Ollama. Grammar checking, spell fixes, and intelligent text rewriting in real-time.",
    tech: ["NLP", "ML Models", "Ollama", "Python"],
    link: "#",
    github: "https://github.com/avradeephalder/Smart-Text-Corrector",
    image: "/project-images/text-corrector.png",
    glowColor: "chakra-glow",
  },
  {
    title: "Translator App",
    rank: "B-Rank",
    desc: "Real-time voice translation app supporting 11+ languages with text and voice I/O. Built with React, Google Cloud Translate, and Azure Speech Services.",
    tech: ["React", "Google Cloud Translate", "Azure Speech"],
    link: "#",
    github: "https://github.com/avradeephalder/Translator-App",
    image: "/project-images/translator.png",
    glowColor: "primary",
  },
  {
    title: "Sentiment Analysis",
    rank: "B-Rank",
    desc: "Full-stack sentiment analysis app with React + Vite frontend and ML model backend. Interactive UI for real-time sentiment predictions.",
    tech: ["React", "Vite", "Express", "ML Models"],
    link: "#",
    github: "https://github.com/avradeephalder/Sentiment-Analysis",
    image: "/project-images/sentiment.png",
    glowColor: "chakra-blue",
  },
  {
    title: "Fake News Detection",
    rank: "B-Rank",
    desc: "AI system to detect and classify fake news articles using NLP and Machine Learning. Text classification with accuracy-driven predictions.",
    tech: ["NLP", "scikit-learn", "Python", "Flask"],
    link: "#",
    github: "https://github.com/avradeephalder/Fake-News-Detection",
    image: "/project-images/fake-news.png",
    glowColor: "chakra-glow",
  },
];

  const handleLiveClick = (e) => {
    e.preventDefault()
    alert("🚧 This project is not live yet! Stay tuned for updates. 🚧")
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">PROJECTS</h2>
          <p className="text-muted-foreground italic">
            "A ninja's worth is proven by the difficulty of the missions (projects) they complete."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="overflow-hidden group hover:chakra-glow transition-all duration-300">
                {/* Image / Preview */}
                <div className="relative h-48 bg-muted overflow-hidden">
                {/* Project Image */}
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                
                {/* Rank Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                    {project.rank}
                </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {/* Code Button - Opens in new tab with sound */}
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.narutoJutsu()}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    {/* Live Button - Shows popup */}
                    <Button 
                      variant="jutsu" 
                      size="sm"
                      onClick={handleLiveClick}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className={`h-1 bg-gradient-to-r from-${project.glowColor} to-primary`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
