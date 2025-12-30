import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sounds } from "../../lib/soundEffects"

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Yo! I'm Avradeep's personal assistant. Ask me anything about his skills, projects, or experience! 🍃"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const chatBoxRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Prevent body scroll when hovering over chat
  useEffect(() => {
    const chatBox = chatBoxRef.current
    if (!chatBox) return

    const preventScroll = (e) => {
      e.stopPropagation()
    }

    chatBox.addEventListener('wheel', preventScroll, { passive: false })
    return () => chatBox.removeEventListener('wheel', preventScroll)
  }, [isOpen])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }])
    } catch (error) {
      // Fallback responses based on keywords
      const reply = getLocalResponse(input)
      setMessages(prev => [...prev, { role: "assistant", content: reply }])
    } finally {
      setIsLoading(false)
    }
  }

  const getLocalResponse = (query) => {
    const q = query.toLowerCase()
    
    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      return "Avradeep is skilled in MERN Stack (MongoDB, Express, React, Node.js), Python, Data Science, Machine Learning, and more! Check out the Tech Stack section above! 🔥"
    }
    if (q.includes("experience") || q.includes("work") || q.includes("intern")) {
      return "He recently completed a Data Science Internship at ShadowFox where he worked on data visualization, sentiment analysis, and profitability analysis! 📊"
    }
    if (q.includes("project")) {
      return "Avradeep has built amazing projects using ML, DL, and Full Stack technologies. Scroll to the Projects section to see them! 🚀"
    }
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "You can reach out via the Contact section! He's available on GitHub, LinkedIn, and Email. Let's connect! 📧"
    }
    if (q.includes("education") || q.includes("study")) {
      return "He's a Computer Science Engineering student with Data Science specialization. Check the Education section for more! 🎓"
    }
    return "That's a great question! Feel free to explore the different sections of this portfolio, or ask me about his skills, experience, projects, or contact info! 🍃"
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleOpen = () => {
    if (!isOpen) {
      sounds.sharingan() // Play sound only when opening
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating Sharingan Button */}
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Sharingan SVG with rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12"
        >
          <img 
            src="/icons/sharingan.svg" 
            alt="Sharingan" 
            className="w-full h-full"
          />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatBoxRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gradient-to-br from-[#2d2416] to-[#1a1410] border-4 border-[#8b6f47] rounded-lg shadow-2xl flex flex-col overflow-hidden chat-assistant"
          >
            {/* Uchiha Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <img 
                src="/icons/uzumaki-spiral.svg" 
                alt="Uchiha" 
                className="w-64 h-64"
              />
            </div>

            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center p-2">
                  <img 
                    src="/icons/akatsuki-cloud.svg" 
                    alt="Akatsuki" 
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Ninja Assistant</h3>
                  <p className="text-xs text-red-200">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-red-200 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar relative z-10">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-[#8b6f47] bg-[#1a1410] relative z-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {/* Send Icon SVG */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1410;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #dc2626, #991b1b);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ef4444, #dc2626);
        }

        .chat-assistant {
          overscroll-behavior: contain;
        }
      `}</style>
    </>
  )
}
